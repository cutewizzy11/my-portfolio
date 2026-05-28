"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";

export function MotionShell({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[100] h-1 origin-left bg-sky-300 shadow-[0_0_24px_rgba(125,211,252,.9)]" style={{ scaleX }} />
      <MouseGlow />
      <CustomCursor />
      {children}
    </>
  );
}

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden opacity-70 lg:block"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(56,189,248,.16), transparent 42%)`,
      }}
    />
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const update = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[120] hidden size-7 rounded-full border border-sky-300/70 mix-blend-difference lg:block"
      animate={{ x: position.x - 14, y: position.y - 14 }}
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.4 }}
    />
  );
}
