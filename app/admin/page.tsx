import { createClient } from "@supabase/supabase-js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
