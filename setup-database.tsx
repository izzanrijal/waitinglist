"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Code } from "lucide-react"

export default function SetupDatabase() {
  const [copied, setCopied] = useState(false)

  const sqlScript = `-- Create signups table to store user information
CREATE TABLE IF NOT EXISTS signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  whatsapp_number TEXT,
  discount_eligible BOOLEAN DEFAULT FALSE,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create analytics table to track events
CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event TEXT NOT NULL,
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create time-based analytics table for 6-hour intervals
CREATE TABLE IF NOT EXISTS time_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  time_slot TEXT NOT NULL, -- '00-06', '06-12', '12-18', '18-24'
  unique_visitors INTEGER DEFAULT 0,
  cta_clicks INTEGER DEFAULT 0,
  email_conversions INTEGER DEFAULT 0,
  whatsapp_conversions INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create unique constraint on date and time_slot
CREATE UNIQUE INDEX IF NOT EXISTS time_analytics_date_slot_idx ON time_analytics (date, time_slot);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS signups_email_idx ON signups (email);

-- Create index on event type for analytics queries
CREATE INDEX IF NOT EXISTS analytics_event_idx ON analytics (event);

-- Create index on date and time_slot for time_analytics
CREATE INDEX IF NOT EXISTS time_analytics_date_idx ON time_analytics (date);`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sqlScript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Set Up Supabase Database</CardTitle>
          <CardDescription>
            Run the following SQL script in your Supabase SQL Editor to create the necessary tables
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
              <code>{sqlScript}</code>
            </pre>
            <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={copyToClipboard}>
              <Code className="h-4 w-4 mr-2" />
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-medium">Instructions:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Go to your Supabase project dashboard</li>
              <li>Navigate to the SQL Editor section</li>
              <li>Create a new query and paste the SQL script above</li>
              <li>Run the query to create the tables</li>
              <li>Verify the tables were created in the Table Editor</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
