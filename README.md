This project displays events based on the user's tier: **Free**, **Silver**, **Gold**, or **Platinum**.  
Users can log in, view events unlocked for their tier, and simulate upgrading their tier.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **Supabase** (PostgreSQL DB)
- **Clerk.dev** (Authentication + User Metadata)
- **Tailwind CSS** (Styling)

## 📦 Features

- ✅ User login/signup using Clerk
- ✅ Show/hide events based on tier (`free`, `silver`, `gold`, `platinum`)
- ✅ Simulate tier upgrade to test different views
- ✅ Responsive event card grid layout
- ✅ Supabase used for event storage

## 🧪 How to Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/Saidurga-2004/event-tiers.git
cd event-tiers
Install dependencies

bash
Copy
Edit
npm install
Create your .env.local file

Fill in your actual project keys:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
Start the dev server

bash
Copy
Edit
npm run dev
🛠 Folder Structure
markdown
Copy
Edit
components/
  ├── EventCard.tsx
  └── UpgradeTier.tsx

app/
  └── events/
      └── page.tsx

lib/
  └── supabase.ts

styles/
  └── globals.css
💡 Future Improvements
Add real payment flow (Stripe) for tier upgrades

Secure backend with Supabase RLS (Row Level Security)

Add admin panel for creating/updating events

Add filters, sorting, and search

Write automated tests

