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
- Production-ready structure for Node hosting, VPS deployment, Docker, and platforms that support Next.js server rendering

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

## Deployment Without Vercel

This app uses the Next.js App Router and includes an API route at `src/app/api/contact/route.ts`, so the recommended non-Vercel deployment target is a host that can run a Node.js server.

### Option 1: VPS with Node.js and PM2

Use this option for a DigitalOcean droplet, AWS EC2 instance, Hetzner server, Contabo VPS, Linode server, or any Linux server with SSH access.

1. Install Node.js 20+ and Git on the server.
2. Clone the repository:

```bash
git clone https://github.com/cutewizzy11/my-portfolio.git
cd my-portfolio
```

3. Install dependencies:

```bash
npm ci
```

4. Create the production environment file:

```bash
cp .env.example .env
```

5. Edit `.env` and add real values:

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL="Paul Anyebe Portfolio <onboarding@resend.dev>"
CONTACT_TO_EMAIL="hello@paulanyebe.dev"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

6. Build the app:

```bash
npm run build
```

7. Install PM2 globally:

```bash
npm install -g pm2
```

8. Start the app:

```bash
pm2 start npm --name paul-portfolio -- start
pm2 save
pm2 startup
```

9. Put Nginx or Apache in front of the app as a reverse proxy to `http://localhost:3000`.

Example Nginx server block:

```nginx
server {
  listen 80;
  server_name your-domain.com www.your-domain.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

10. Add HTTPS with Certbot:

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Option 2: Docker

Use Docker when deploying to a VPS, Render, Railway, Fly.io, Coolify, Dokploy, or any container platform.

Create a `Dockerfile`:

```Dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Build and run locally:

```bash
docker build -t paul-portfolio .
docker run -p 3000:3000 --env-file .env paul-portfolio
```

### Option 3: Render, Railway, or similar Node hosts

Use these settings:

```text
Build command: npm ci && npm run build
Start command: npm run start
Node version: 20+
```

Add the environment variables from `.env.example` in the platform dashboard.

### Option 4: Static hosting only

Static-only hosts like GitHub Pages, basic cPanel static hosting, or plain Netlify static deploys are not recommended for the current setup because the contact API route needs a server.

If you want static-only deployment, remove or replace the API route with a third-party form service such as Formspree, Getform, Basin, EmailJS, or a separate backend endpoint.

## Content Management

Portfolio content is centralized in:

```text
src/lib/portfolio-data.ts
```

Update this file to edit profile details, skills, projects, experience, services, testimonials, blog cards, and social links.

## Admin-ready Extensions

The current build is frontend-first but structured for adding project management, a blog CMS, resume upload, contact message dashboard, GitHub stats, and visitor analytics.
