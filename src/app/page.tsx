"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { BackgroundEffects } from "@/components/background-effects";
import { MotionShell } from "@/components/motion-shell";
import { Navbar } from "@/components/navbar";
import { ChatAssistant, CommandPalette, LoadingScreen } from "@/components/portfolio-widgets";
import { Button } from "@/components/ui/button";
import { Counter, FilterTabs, GlassCard, ProjectCard, SectionHeader, SkillCard, TestimonialCard, useProjectFilter } from "@/components/portfolio-cards";
import { experiences, posts, profile, projects, services, skills, socials, stats, testimonials } from "@/lib/portfolio-data";

export default function Home() {
  const { active, setActive, filters, filtered } = useProjectFilter(projects);
  const orbitItems = useMemo(() => ["AI", "Cyber", "Web", "Cloud", "CMS", "API", "UX", "Ops"], []);
  const [formStatus, setFormStatus] = useState("Ready to receive secure opportunities.");

  async function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus("Sending message...");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    setFormStatus(response.ok ? "Message received. Paul will respond soon." : "Message failed. Please email Paul directly.");
    if (response.ok) form.reset();
  }

  return (
    <MotionShell>
      <LoadingScreen />
      <BackgroundEffects />
      <Navbar />
      <main id="home" className="relative z-10 overflow-hidden">
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
          <div>
            <motion.p className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-sky-100" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              Nigerian Software + Cybersecurity Technologist
            </motion.p>
            <motion.h1 className="max-w-5xl text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Paul Anyebe builds secure intelligent digital systems.
            </motion.h1>
            <motion.p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {profile.role}. I combine human-in-the-loop AI, cybersecurity thinking, modern web engineering, and systems administration to ship polished products for global opportunities.
            </motion.p>
            <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Button size="lg" asChild><a href="#contact">Hire Me <Send className="size-4" /></a></Button>
              <Button size="lg" variant="secondary" asChild><a href="#projects">View Projects</a></Button>
              <Button size="lg" variant="ghost" asChild><a href="/Paul-Anyebe-CV.pdf" download>Download CV <Download className="size-4" /></a></Button>
            </motion.div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="p-4">
                  <p className="text-2xl font-bold text-white"><Counter value={stat.value} />{stat.suffix}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          <motion.div className="relative mx-auto aspect-square w-full max-w-[34rem]" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.8 }}>
            <div className="absolute inset-0 rounded-full border border-sky-300/20 bg-sky-300/5 blur-sm" />
            <div className="absolute inset-10 animate-spin-slow rounded-full border border-dashed border-sky-300/30" />
            {orbitItems.map((item, index) => (
              <span key={item} className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/10 bg-white/10 text-xs font-bold text-sky-100 backdrop-blur-xl" style={{ transform: `rotate(${index * 45}deg) translateY(-210px) rotate(-${index * 45}deg)` }}>
                {item}
              </span>
            ))}
            <div className="absolute inset-24 grid place-items-center rounded-[3rem] border border-white/10 bg-slate-950/70 p-6 text-center shadow-2xl backdrop-blur-2xl">
              <div className="grid size-28 place-items-center rounded-[2rem] bg-gradient-to-br from-sky-300 to-indigo-400 text-4xl font-black text-slate-950 shadow-[0_0_70px_rgba(56,189,248,.45)]">PA</div>
              <p className="mt-5 font-mono text-sm uppercase tracking-[0.35em] text-sky-200">AI Generalist</p>
              <p className="mt-2 text-sm text-slate-400">Cybersecurity Science • FUT Minna</p>
            </div>
          </motion.div>
          <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-sky-200 md:block" aria-label="Scroll to about"><ArrowDown className="size-5 animate-bounce" /></a>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="About" title="Security-minded builder for the AI era." text="Paul's journey sits at the intersection of applied AI, cybersecurity, web products, infrastructure support, and product-focused problem solving." />
          <div className="grid gap-6 lg:grid-cols-[1fr_.85fr]">
            <GlassCard><h3 className="text-2xl font-bold text-white">Professional Summary</h3><p className="mt-5 leading-8 text-slate-300">{profile.summary}</p><p className="mt-5 leading-8 text-slate-300">He is passionate about AI-powered tools, secure digital platforms, automation, and building web experiences that feel premium, usable, and reliable.</p></GlassCard>
            <GlassCard><h3 className="text-2xl font-bold text-white">Education</h3><p className="mt-5 text-slate-300">Bachelor&apos;s degree in Cyber Security Science from Federal University of Technology, Minna, Nigeria.</p><div className="mt-6 flex items-center gap-2 text-sky-200"><MapPin className="size-4" /> Based in Nigeria, available globally</div></GlassCard>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Capabilities" title="A multi-disciplinary technical stack." text="Animated skill cards with a focus on secure, AI-aware, performance-minded product execution." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{skills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}</div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Projects" title="Premium project showcase." text="Filtered portfolio cards for legal tech, AI dashboards, fintech, CMS, APIs, and AI-powered applications." />
          <FilterTabs active={active} setActive={setActive} filters={filters} />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Experience" title="A practical timeline of impact." text="Infrastructure, AI evaluation, web development, and systems administration experience." />
          <div className="relative space-y-6 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-sky-300/20">
            {experiences.map((item) => <GlassCard key={item.title} className="relative ml-12"><span className="absolute -left-[3.35rem] top-7 size-4 rounded-full bg-sky-300 shadow-[0_0_30px_rgba(56,189,248,.9)]" /><p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-200">{item.period}</p><h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3><p className="text-slate-300">{item.place}</p><p className="mt-3 leading-7 text-slate-400">{item.text}</p></GlassCard>)}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Services" title="Premium technical services." text="For founders, teams, recruiters, and organizations that need secure AI-aware technology delivery." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => { const Icon = service.icon; return <GlassCard key={service.title} className="transition hover:-translate-y-2 hover:border-sky-300/40"><Icon className="mb-5 size-7 text-sky-200" /><h3 className="font-semibold text-white">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{service.text}</p></GlassCard>; })}</div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Testimonials" title="Trusted, polished, and security-aware." text="Social proof styled as a premium glassmorphism carousel row." />
          <div className="flex snap-x gap-5 overflow-x-auto pb-4">{testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}</div>
        </section>

        <section id="insights" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Blog / Insights" title="Ideas across AI, cybersecurity, and growth." text="A CMS-ready insight grid for technical articles, career essays, and product thinking." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{posts.map((post) => <GlassCard key={post.title} className="p-5"><span className="text-xs text-sky-200">{post.tag}</span><h3 className="mt-4 min-h-24 font-semibold text-white">{post.title}</h3><p className="text-sm text-slate-400">{post.read} read</p></GlassCard>)}</div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Contact" title="Let’s build something secure and intelligent." text="Use the contact form, email, or WhatsApp CTA to discuss AI roles, cybersecurity work, web projects, or collaborations." />
          <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
            <GlassCard><h3 className="text-2xl font-bold text-white">Professional CTA</h3><p className="mt-4 leading-8 text-slate-300">Available for international tech jobs, AI roles, freelancing, startup branding, cybersecurity opportunities, scholarships, and fellowship applications.</p><div className="mt-6 flex flex-wrap gap-3">{socials.slice(0, 3).map((social) => { const Icon = social.icon; return <Button key={social.label} variant="secondary" asChild><a href={social.href}><Icon className="size-4" /> {social.label}</a></Button>; })}</div></GlassCard>
            <GlassCard><form className="grid gap-4" onSubmit={handleContact}><div className="grid gap-4 sm:grid-cols-2"><input name="name" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-300" placeholder="Your name" required /><input name="email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-300" placeholder="Email address" type="email" required /></div><input name="subject" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-300" placeholder="Project or opportunity type" /><textarea name="message" className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-300" placeholder="Tell Paul what you want to build..." required /><Button type="submit" size="lg">Send Message <Send className="size-4" /></Button><p className="text-sm text-sky-100" role="status">{formStatus}</p></form></GlassCard>
          </div>
        </section>
      </main>
      <Footer />
      <CommandPalette />
      <ChatAssistant />
    </MotionShell>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Paul Anyebe. Built for secure AI-era opportunities.</p>
        <a href="#home" className="rounded-full border border-white/10 px-4 py-2 text-sm text-sky-200 hover:bg-white/10">Scroll to top</a>
      </div>
    </footer>
  );
}
