"use server"

import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Use service role for server actions
const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Helper function to get current time slot
function getCurrentTimeSlot(): string {
  const hour = new Date().getUTCHours() + 7 // Convert to Jakarta time (UTC+7)
  const adjustedHour = hour >= 24 ? hour - 24 : hour // Handle overflow

  if (adjustedHour >= 0 && adjustedHour < 6) return "00-06"
  if (adjustedHour >= 6 && adjustedHour < 12) return "06-12"
  if (adjustedHour >= 12 && adjustedHour < 18) return "12-18"
  return "18-24"
}

// Helper function to get current date in YYYY-MM-DD format
function getCurrentDate(): string {
  const date = new Date()
  return date.toISOString().split("T")[0]
}

// Helper function to update time analytics
async function updateTimeAnalytics(type: "visitor" | "cta_click" | "email" | "whatsapp") {
  try {
    const date = getCurrentDate()
    const timeSlot = getCurrentTimeSlot()

    // First, try to get the existing record
    const { data: existingRecord } = await supabase
      .from("time_analytics")
      .select("*")
      .eq("date", date)
      .eq("time_slot", timeSlot)
      .maybeSingle()

    if (existingRecord) {
      // Update the existing record
      const updateData: any = { updated_at: new Date().toISOString() }

      if (type === "visitor") updateData.unique_visitors = existingRecord.unique_visitors + 1
      if (type === "cta_click") updateData.cta_clicks = existingRecord.cta_clicks + 1
      if (type === "email") updateData.email_conversions = existingRecord.email_conversions + 1
      if (type === "whatsapp") updateData.whatsapp_conversions = existingRecord.whatsapp_conversions + 1

      await supabase.from("time_analytics").update(updateData).eq("id", existingRecord.id)
    } else {
      // Create a new record
      const newRecord: any = {
        date,
        time_slot: timeSlot,
        unique_visitors: type === "visitor" ? 1 : 0,
        cta_clicks: type === "cta_click" ? 1 : 0,
        email_conversions: type === "email" ? 1 : 0,
        whatsapp_conversions: type === "whatsapp" ? 1 : 0,
      }

      await supabase.from("time_analytics").insert(newRecord)
    }
  } catch (error) {
    console.error("Error updating time analytics:", error)
    // Don't throw the error - let the operation fail silently
  }
}

export async function submitEmailAndWhatsApp(formData: FormData) {
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string

  if (!email || !email.includes("@")) {
    return { success: false, message: "Email tidak valid" }
  }

  try {
    // Track email submission
    await supabase.from("analytics").insert({
      event: "email_submission",
      data: { email },
    })

    // Update time analytics for email conversion
    await updateTimeAnalytics("email")

    // Check if email already exists
    const { data: existingUser } = await supabase.from("signups").select("*").eq("email", email).maybeSingle()

    if (existingUser) {
      // Update existing user with WhatsApp if provided
      if (whatsapp) {
        await supabase
          .from("signups")
          .update({
            whatsapp_number: whatsapp,
            discount_eligible: true,
            updated_at: new Date().toISOString(),
          })
          .eq("email", email)

        // Track WhatsApp submission
        await supabase.from("analytics").insert({
          event: "whatsapp_submission",
          data: { email, whatsapp },
        })

        // Update time analytics for WhatsApp conversion
        await updateTimeAnalytics("whatsapp")
      }
    } else {
      // Create new user
      await supabase.from("signups").insert({
        email,
        whatsapp_number: whatsapp || null,
        discount_eligible: whatsapp ? true : false,
        source: "landing_page",
      })

      // Track WhatsApp submission if provided
      if (whatsapp) {
        await supabase.from("analytics").insert({
          event: "whatsapp_submission",
          data: { email, whatsapp },
        })

        // Update time analytics for WhatsApp conversion
        await updateTimeAnalytics("whatsapp")
      }
    }

    return {
      success: true,
      email,
      hasWhatsApp: !!whatsapp,
    }
  } catch (error) {
    console.error("Error submitting data:", error)
    return { success: false, message: "Terjadi kesalahan. Silakan coba lagi." }
  }
}

export async function trackPageVisit() {
  try {
    // Get visitor ID from cookie or create a new one
    const cookieStore = cookies()
    let visitorId = cookieStore.get("visitor_id")?.value

    if (!visitorId) {
      visitorId = crypto.randomUUID()
      // This would normally set a cookie, but we can't do that in a server action
      // We'd need to handle this in a client component
    }

    // Track page visit
    await supabase.from("analytics").insert({
      event: "page_visit",
      data: { page: "landing_page", visitor_id: visitorId },
    })

    // Update time analytics for unique visitor
    await updateTimeAnalytics("visitor")

    return { success: true, visitorId }
  } catch (error) {
    console.error("Error tracking page visit:", error)
    return { success: false }
  }
}

export async function trackCTAClick(buttonName: string) {
  try {
    // Track CTA click
    await supabase.from("analytics").insert({
      event: "cta_click",
      data: { button: buttonName },
    })

    // Update time analytics for CTA click
    await updateTimeAnalytics("cta_click")

    return { success: true }
  } catch (error) {
    console.error("Error tracking CTA click:", error)
    return { success: false }
  }
}
