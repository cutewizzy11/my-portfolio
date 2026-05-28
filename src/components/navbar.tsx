"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed left-0 right-0 top-0 z-50 transition-all duration-300", scrolled && "border-b border-white/10 bg-slate-950/65 shadow-2xl shadow-sky-950/20 backdrop-blur-2xl") }>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3 font-mono text-sm font-bold tracking-[0.25em] text-foreground" aria-label="Paul Anyebe home">
          <span className="grid size-10 place-items-center rounded-2xl border border-sky-300/30 bg-sky-300/10 text-sky-200 shadow-[0_0_30px_rgba(56,189,248,.25)]">PA</span>
          <span className="hidden sm:block">PAUL ANYEBE</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="hidden size-4 dark:block" />
            <Moon className="size-4 dark:hidden" />
          </Button>
          <Button className="hidden md:inline-flex" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
          <Button variant="secondary" size="icon" className="lg:hidden" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-200 hover:bg-white/10">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
