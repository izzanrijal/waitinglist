"use server"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Use service role for server actions
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function submitEmailAndWhatsApp(formData: FormData) {
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string

  if (!email || !email.includes("@")) {
    return { success: false, message: "Email tidak valid" }
  }

  try {
    // Track page visit
    await supabase.from("analytics").insert({
      event: "combined_submission",
      data: { email, whatsapp },
    })

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
      }
    } else {
      // Create new user
      await supabase.from("signups").insert({
        email,
        whatsapp_number: whatsapp || null,
        discount_eligible: whatsapp ? true : false,
        source: "landing_page",
      })
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
    await supabase.from("analytics").insert({
      event: "page_visit",
      data: { page: "landing_page" },
    })
    return { success: true }
  } catch (error) {
    console.error("Error tracking page visit:", error)
    return { success: false }
  }
}
