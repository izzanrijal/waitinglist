import { createClient } from "@supabase/supabase-js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would typically be protected by authentication
export default async function TimeAnalyticsPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // Fetch time analytics for the last 7 days
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const dateString = sevenDaysAgo.toISOString().split("T")[0]

  const { data: timeAnalytics } = await supabase
    .from("time_analytics")
    .select("*")
    .gte("date", dateString)
    .order("date", { ascending: false })
    .order("time_slot", { ascending: true })

  // Group by date
  const analyticsByDate: Record<string, any[]> = {}

  timeAnalytics?.forEach((record) => {
    if (!analyticsByDate[record.date]) {
      analyticsByDate[record.date] = []
    }
    analyticsByDate[record.date].push(record)
  })

  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Link href="/admin" className="flex items-center text-primary hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Kembali ke Dashboard
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Analisis Waktu</h1>

      {Object.keys(analyticsByDate).length > 0 ? (
        Object.entries(analyticsByDate).map(([date, records]) => (
          <Card key={date} className="mb-6">
            <CardHeader>
              <CardTitle>
                Laporan Harian:{" "}
                {new Date(date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </CardTitle>
              <CardDescription>Analisis per interval 6 jam</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Interval Waktu</TableHead>
                    <TableHead>Pengunjung Unik</TableHead>
                    <TableHead>Klik CTA</TableHead>
                    <TableHead>Konversi Email</TableHead>
                    <TableHead>Konversi WhatsApp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {records.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">
                        {record.time_slot === "00-06" && "00:00 - 06:00"}
                        {record.time_slot === "06-12" && "06:00 - 12:00"}
                        {record.time_slot === "12-18" && "12:00 - 18:00"}
                        {record.time_slot === "18-24" && "18:00 - 24:00"}
                      </TableCell>
                      <TableCell>{record.unique_visitors}</TableCell>
                      <TableCell>{record.cta_clicks}</TableCell>
                      <TableCell>{record.email_conversions}</TableCell>
                      <TableCell>{record.whatsapp_conversions}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/50">
                    <TableCell className="font-bold">Total</TableCell>
                    <TableCell className="font-bold">
                      {records.reduce((sum, record) => sum + record.unique_visitors, 0)}
                    </TableCell>
                    <TableCell className="font-bold">
                      {records.reduce((sum, record) => sum + record.cta_clicks, 0)}
                    </TableCell>
                    <TableCell className="font-bold">
                      {records.reduce((sum, record) => sum + record.email_conversions, 0)}
                    </TableCell>
                    <TableCell className="font-bold">
                      {records.reduce((sum, record) => sum + record.whatsapp_conversions, 0)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-gray-500">Belum ada data analisis waktu yang tersedia.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
