# Paul Anyebe Premium Portfolio

Production-ready portfolio website for Paul Anyebe, a Nigerian AI Generalist, Cybersecurity Science graduate, full stack web developer, systems administrator, and human-in-the-loop AI specialist.

## Stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion and React Three Fiber
- **3D:** Three.js via `@react-three/fiber` and `@react-three/drei`
- **Icons:** Lucide React
- **Theme:** `next-themes`
- **Contact:** Resend API route with local preview fallback

## Features

- Futuristic glassmorphism design with light blue accent
- Dark/light mode toggle
- Sticky blur navbar with mobile menu
- Animated hero, counters, project filtering, timeline, services, testimonials, blog cards, and contact form
- 3D background scene and floating orbit tech stack
- Custom cursor, mouse-follow light, command palette, loading screen, and chatbot-style assistant
- SEO metadata and accessible focus states
- Resend-ready secure contact endpoint
- Vercel-ready structure

## Setup

Install dependencies:

```bash
npm install
```

Create environment variables:

```powershell
copy .env.example .env.local
```

Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL="Paul Anyebe Portfolio <onboarding@resend.dev>"
CONTACT_TO_EMAIL="hello@paulanyebe.dev"
NEXT_PUBLIC_SITE_URL="https://paulanyebe.dev"
```

## Production

```bash
npm run build
npm run start
```

## Deployment

Deploy on Vercel:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

## Content Management

Portfolio content is centralized in:

```text
src/lib/portfolio-data.ts
```

Update this file to edit profile details, skills, projects, experience, services, testimonials, blog cards, and social links.

## Admin-ready Extensions

The current build is frontend-first but structured for adding project management, a blog CMS, resume upload, contact message dashboard, GitHub stats, and visitor analytics.
