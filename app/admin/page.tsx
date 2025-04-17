import { createClient } from "@supabase/supabase-js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

// This would typically be protected by authentication
export default async function AdminPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // Fetch signups
  const { data: signups } = await supabase
    .from("signups")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10)

  // Fetch analytics counts correctly
  const { count: pageVisitsCount } = await supabase
    .from("analytics")
    .select("*", { count: "exact", head: true })
    .eq("event", "page_visit")

  const { count: emailSubmissionsCount } = await supabase
    .from("analytics")
    .select("*", { count: "exact", head: true })
    .eq("event", "email_submission")

  const { count: whatsappSubmissionsCount } = await supabase
    .from("analytics")
    .select("*", { count: "exact", head: true })
    .eq("event", "whatsapp_submission")

  // Fetch CTA clicks count
  const { count: ctaClicksCount } = await supabase
    .from("analytics")
    .select("*", { count: "exact", head: true })
    .eq("event", "cta_click")

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Page Visits</CardTitle>
            <CardDescription>Total number of landing page visits</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{pageVisitsCount || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>CTA Clicks</CardTitle>
            <CardDescription>Total button clicks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{ctaClicksCount || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Email Signups</CardTitle>
            <CardDescription>Total email submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{emailSubmissionsCount || 0}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>WhatsApp Conversions</CardTitle>
            <CardDescription>Users who provided WhatsApp</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{whatsappSubmissionsCount || 0}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Time-Based Analytics</CardTitle>
            <CardDescription>View detailed analytics by time intervals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              View detailed analytics broken down by 6-hour intervals (00:00-06:00, 06:00-12:00, 12:00-18:00,
              18:00-24:00) to understand traffic patterns and conversion rates throughout the day.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/admin/analytics">
                <Clock className="mr-2 h-4 w-4" />
                View Time Analytics
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Signups</CardTitle>
          <CardDescription>The 10 most recent user signups</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>WhatsApp</TableHead>
                <TableHead>Discount Eligible</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {signups && signups.length > 0 ? (
                signups.map((signup) => (
                  <TableRow key={signup.id}>
                    <TableCell>{signup.email}</TableCell>
                    <TableCell>{signup.whatsapp_number || "—"}</TableCell>
                    <TableCell>{signup.discount_eligible ? "Yes" : "No"}</TableCell>
                    <TableCell>{signup.source}</TableCell>
                    <TableCell>{new Date(signup.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    No signups yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
