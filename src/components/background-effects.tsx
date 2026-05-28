"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshTransmissionMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,.20),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,.18),transparent_28%),linear-gradient(135deg,#020617_0%,#07111f_45%,#020617_100%)] dark:opacity-100" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -left-32 top-20 size-96 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 size-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute inset-0 hidden opacity-70 lg:block">
        <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]}>
          <ambientLight intensity={1.2} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#7dd3fc" />
          <Stars radius={80} depth={45} count={900} factor={3} saturation={0} fade speed={0.6} />
          <FloatingCore />
        </Canvas>
      </div>
    </div>
  );
}

function FloatingCore() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.16;
    mesh.current.rotation.y += delta * 0.22;
  });

  return (
    <Float speed={1.25} rotationIntensity={0.45} floatIntensity={1.2}>
      <Icosahedron ref={mesh} args={[1.45, 2]} position={[3.6, 0.8, -1.8]}>
        <MeshTransmissionMaterial color="#7dd3fc" thickness={0.85} roughness={0.18} transmission={0.78} chromaticAberration={0.06} anisotropy={0.4} />
      </Icosahedron>
    </Float>
  );
}
