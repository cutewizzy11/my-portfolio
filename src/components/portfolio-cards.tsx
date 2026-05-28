"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type IconType = React.ComponentType<{ className?: string }>;

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.7 }}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-sky-200">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>
    </motion.div>
  );
}

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-sky-950/20 backdrop-blur-2xl", className)}>{children}</div>;
}

export function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function SkillCard({ skill, index }: { skill: { name: string; value: number; details: string; icon: IconType }; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
      <GlassCard className="group h-full transition duration-300 hover:-translate-y-2 hover:border-sky-300/40 hover:bg-sky-300/10">
        <div className="mb-5 flex items-center justify-between"><Icon className="size-7 text-sky-200" /><span className="font-mono text-sm text-sky-100">{skill.value}%</span></div>
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">{skill.details}</p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-sky-300 to-cyan-200" initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} /></div>
      </GlassCard>
    </motion.div>
  );
}

export function ProjectCard({ project, index }: { project: { title: string; category: string; stack: string[]; description: string; accent: string }; index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-2xl">
      <div className={cn("h-52 bg-gradient-to-br p-5", project.accent)}>
        <div className="h-full rounded-[1.5rem] border border-white/30 bg-slate-950/35 p-4 backdrop-blur-xl">
          <div className="mb-4 flex gap-2"><span className="size-3 rounded-full bg-red-300" /><span className="size-3 rounded-full bg-amber-300" /><span className="size-3 rounded-full bg-emerald-300" /></div>
          <div className="grid h-32 grid-cols-3 gap-3"><div className="col-span-2 rounded-2xl bg-white/25" /><div className="rounded-2xl bg-white/15" /><div className="rounded-2xl bg-white/15" /><div className="col-span-2 rounded-2xl bg-white/20" /></div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between"><span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs text-sky-200">{project.category}</span><ArrowUpRight className="size-5 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-200" /></div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item}</span>)}</div>
        <div className="mt-6 flex gap-3"><Button size="default" asChild><a href="#contact">Live Demo</a></Button><Button variant="secondary" size="icon" aria-label={`${project.title} source code`}><Code2 className="size-4" /></Button></div>
      </div>
    </motion.article>
  );
}

export function TestimonialCard({ item }: { item: { quote: string; name: string; role: string } }) {
  return (
    <GlassCard className="min-w-full sm:min-w-[28rem]">
      <div className="mb-5 flex gap-1 text-sky-200">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div>
      <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
      <div className="mt-6"><p className="font-semibold text-white">{item.name}</p><p className="text-sm text-slate-400">{item.role}</p></div>
    </GlassCard>
  );
}

export function FilterTabs({ active, setActive, filters }: { active: string; setActive: (value: string) => void; filters: string[] }) {
  return <div className="mb-10 flex flex-wrap justify-center gap-2">{filters.map((filter) => <button key={filter} onClick={() => setActive(filter)} className={cn("rounded-full border px-4 py-2 text-sm transition", active === filter ? "border-sky-300 bg-sky-300 text-slate-950" : "border-white/10 bg-white/5 text-slate-300 hover:border-sky-300/40")}>{filter}</button>)}</div>;
}

export function useProjectFilter<T extends { category: string }>(projects: T[]) {
  const [active, setActive] = useState("All");
  const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);
  return { active, setActive, filters, filtered };
}
