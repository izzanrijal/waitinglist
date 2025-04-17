# KuliahDimana Landing Page

A landing page for KuliahDimana, targeting pre-college students in Indonesia, guiding them toward future-proof majors that won't be easily replaced by AI.

## Features

- Responsive design inspired by manychat.com
- Email and WhatsApp collection with 50% discount offer
- Supabase integration for data storage
- Analytics tracking for page visits and conversions

## Setup Instructions

### 1. Environment Variables

Make sure you have the following environment variables set up:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
\`\`\`

### 2. Database Setup

Run the SQL script in the Supabase SQL Editor to create the necessary tables:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor section
3. Create a new query and paste the SQL script from `setup-database.tsx`
4. Run the query to create the tables
5. Verify the tables were created in the Table Editor

### 3. Development

\`\`\`bash
# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

### 4. Deployment

Deploy the application to Vercel:

\`\`\`bash
vercel
\`\`\`

## Project Structure

- `app/` - Next.js app router pages
- `components/` - React components
- `lib/` - Utility functions and server actions
- `public/` - Static assets

## Admin Dashboard

A simple admin dashboard is available at `/admin` to view signups and analytics data.

## License

MIT
