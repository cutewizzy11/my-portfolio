import { Bot, BrainCircuit, BriefcaseBusiness, CloudCog, Code2, DatabaseZap, Figma, GraduationCap, Layers3, Linkedin, LockKeyhole, Mail, Network, ServerCog, ShieldCheck, Sparkles, TerminalSquare, Wrench } from "lucide-react";

export const profile = {
  name: "Paul Anyebe",
  location: "Nigeria",
  email: "hello@paulanyebe.dev",
  whatsapp: "https://wa.me/2348127700421",
  github: "https://github.com/cutewizzy11",
  linkedin: "https://www.linkedin.com/in/paul-anyebe-web-designer/",
  role: "WordPress Designer | Cybersecurity Graduate | Backend Developer | Systems Administrator",
  summary: "Nigerian tech-savvy Backend Developer and Cybersecurity Science graduate building secure, intelligent, high-performance digital systems across web, automation, AI evaluation, infrastructure, and human-in-the-loop workflows.",
};

export const navItems = ["About", "Skills", "Projects", "Experience", "Services", "Insights", "Contact"];

export const stats = [
  { label: "Technical domains", value: 9, suffix: "+" },
  { label: "Project categories", value: 7, suffix: "+" },
  { label: "Security-first mindset", value: 100, suffix: "%" },
  { label: "AI workflow focus", value: 24, suffix: "/7" },
];

export const skills = [
  { name: "AI & Data Annotation", value: 94, icon: BrainCircuit, details: "Prompt evaluation, model feedback, red teaming, quality rubrics" },
  { name: "Frontend Development", value: 92, icon: Code2, details: "Next.js, React, TypeScript, Tailwind, animation systems" },
  { name: "Backend Development", value: 86, icon: DatabaseZap, details: "APIs, authentication, databases, payment workflows" },
  { name: "Cybersecurity", value: 88, icon: ShieldCheck, details: "Risk awareness, secure design, vulnerability thinking" },
  { name: "Systems Administration", value: 90, icon: ServerCog, details: "Windows/Linux administration, user support, server operations" },
  { name: "WordPress & Shopify", value: 91, icon: Layers3, details: "CMS builds, e-commerce, plugins, performance tuning" },
  { name: "Cloud & DevOps", value: 82, icon: CloudCog, details: "Deployment, CI/CD, Vercel, monitoring foundations" },
  { name: "UI/UX", value: 85, icon: Figma, details: "Design systems, responsive layouts, conversion-first experiences" },
  { name: "Networking", value: 84, icon: Network, details: "Routing basics, troubleshooting, network support" },
];

export const projects = [
  { title: "Jurilinka Legal Tech Platform", category: "Web", stack: ["Next.js", "TypeScript", "LegalTech", "AI"], description: "A secure legal technology platform concept for connecting clients, legal resources, workflows, and intelligent case assistance.", accent: "from-sky-400 to-cyan-300" },
  { title: "AI Evaluation Dashboard", category: "AI", stack: ["React", "Analytics", "Human-in-the-loop"], description: "A dashboard for tracking AI responses, annotation quality, reviewer performance, and model evaluation decisions.", accent: "from-indigo-400 to-sky-400" },
  { title: "Investment Platform", category: "Fintech", stack: ["Next.js", "Payments", "Security"], description: "A premium investment interface with onboarding, transaction views, portfolio metrics, and secure user flows.", accent: "from-emerald-300 to-sky-400" },
  { title: "Kids CMS", category: "CMS", stack: ["CMS", "UX", "Admin"], description: "A child-friendly content management experience with simplified publishing, content safety workflows, and role-based access.", accent: "from-amber-300 to-pink-300" },
  { title: "Portfolio Websites", category: "Web", stack: ["React", "Tailwind", "SEO"], description: "High-converting personal and business portfolio websites with fast loading, strong visual systems, and responsive UX.", accent: "from-blue-300 to-violet-400" },
  { title: "Payment Gateway System", category: "Backend", stack: ["API", "Security", "Webhooks"], description: "A payment integration layer with transaction status handling, webhook processing, and secure implementation patterns.", accent: "from-cyan-300 to-blue-500" },
];

export const experiences = [
  { title: "Networking Intern", place: "Benue State University", period: "Infrastructure Support", text: "Supported network troubleshooting, system connectivity, device setup, and technical operations in an institutional environment." },
  { title: "Systems Administrator", place: "W.D. Widgets", period: "Operations & Support", text: "Managed systems, user support, uptime-focused workflows, issue resolution, and operational technology support." },
  { title: "AI/Data Annotation Specialist", place: "Human-in-the-Loop AI", period: "AI Evaluation", text: "Evaluated AI outputs, improved prompt-response quality, applied annotation rubrics, and supported safer model behavior." },
  { title: "Web Developer", place: "Freelance & Product Builds", period: "Full Stack", text: "Built responsive websites, CMS solutions, APIs, dashboards, e-commerce experiences, and portfolio systems." },
];

export const services = [
  { title: "AI Prompt Engineering", icon: Bot, text: "Prompt systems, AI workflow design, model evaluation, and productivity automation." },
  { title: "Full Stack Web Development", icon: Code2, text: "Modern web apps with Next.js, TypeScript, APIs, dashboards, and secure flows." },
  { title: "WordPress Development", icon: Layers3, text: "Professional WordPress sites, plugin setup, performance, and CMS training." },
  { title: "Cybersecurity Consulting", icon: LockKeyhole, text: "Security-aware reviews, hardening guidance, risk education, and best practices." },
  { title: "Systems Administration", icon: ServerCog, text: "System setup, troubleshooting, maintenance, user support, and infrastructure care." },
  { title: "AI Evaluation & Annotation", icon: BrainCircuit, text: "Human review, annotation quality, red-team thinking, and rubric-based analysis." },
  { title: "UI/UX Design", icon: Sparkles, text: "Premium interfaces, design systems, responsive flows, and conversion-first layouts." },
  { title: "API Integration", icon: Wrench, text: "Payment gateways, third-party APIs, webhooks, authentication, and automation." },
];

export const testimonials = [
  { quote: "Paul combines technical discipline with rare product intuition. His work feels secure, polished, and easy to use.", name: "Amina Yusuf", role: "Product Lead" },
  { quote: "He understands AI workflows, web systems, and infrastructure deeply enough to connect them into real business value.", name: "Daniel Okafor", role: "Startup Founder" },
  { quote: "A reliable technologist with a security mindset, strong communication, and impressive execution speed.", name: "Grace Eze", role: "Operations Manager" },
];

export const posts = [
  { title: "How Human-in-the-Loop AI Improves Model Safety", tag: "AI", read: "5 min" },
  { title: "Cybersecurity Habits Every Founder Should Adopt", tag: "Cybersecurity", read: "6 min" },
  { title: "Building Fast Portfolios That Recruiters Remember", tag: "Tech", read: "4 min" },
  { title: "Systems Thinking for Better Developer Productivity", tag: "Productivity", read: "7 min" },
  { title: "Why Personal Growth Matters in Technical Careers", tag: "Growth", read: "3 min" },
];

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Portfolio CLI", href: "#command", icon: TerminalSquare },
  { label: "Work", href: "#projects", icon: BriefcaseBusiness },
  { label: "Education", href: "#about", icon: GraduationCap },
];
