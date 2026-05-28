"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Command, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div className="fixed inset-0 z-[200] grid place-items-center bg-slate-950" exit={{ opacity: 0 }} transition={{ duration: 0.55 }}>
          <div className="text-center">
            <motion.div className="mx-auto mb-6 grid size-24 place-items-center rounded-[2rem] border border-sky-300/30 bg-sky-300/10 text-sky-200" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}>
              <Sparkles className="size-9" />
            </motion.div>
            <p className="font-mono text-sm uppercase tracking-[0.45em] text-sky-200">Initializing PaulOS</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const actions = ["Hire Paul", "View Projects", "Download CV", "Open AI services", "Read insights"];

  return (
    <>
      <Button id="command" variant="secondary" className="fixed bottom-6 left-6 z-40 hidden shadow-2xl md:inline-flex" onClick={() => setOpen(true)}>
        <Command className="size-4" /> Ctrl K
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[150] grid place-items-start bg-slate-950/70 p-4 pt-28 backdrop-blur-xl sm:place-items-center sm:pt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-4 shadow-2xl" initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }}>
              <div className="mb-3 flex items-center justify-between px-2">
                <p className="font-mono text-sm text-sky-200">Command Palette</p>
                <button aria-label="Close command palette" onClick={() => setOpen(false)}><X className="size-5" /></button>
              </div>
              <div className="space-y-2">
                {actions.map((action) => (
                  <a key={action} href={action.includes("Project") ? "#projects" : action.includes("Hire") ? "#contact" : "#services"} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/40 hover:bg-sky-300/10">
                    {action}<span className="text-sky-200">↵</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div className="mb-4 w-[min(22rem,calc(100vw-3rem))] rounded-[2rem] border border-sky-300/20 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-2xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}>
            <div className="mb-4 flex items-center gap-3"><Bot className="size-5 text-sky-200" /><div><p className="font-semibold">Paul AI Assistant</p><p className="text-xs text-slate-400">Ask about skills, services, or projects.</p></div></div>
            <div className="rounded-2xl bg-white/5 p-3 text-sm text-slate-300">Hi, I can guide recruiters, founders, and collaborators through Paul&apos;s AI, cybersecurity, web, and systems work.</div>
            <div className="mt-3 flex gap-2"><input className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none focus:border-sky-300" placeholder="Ask a portfolio question" /><Button size="icon" aria-label="Send message"><Send className="size-4" /></Button></div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button size="icon" onClick={() => setOpen((value) => !value)} aria-label="Open AI assistant" className="size-14 shadow-2xl">
        <MessageCircle className="size-6" />
      </Button>
    </div>
  );
}
