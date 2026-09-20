"use client";

import {
  Code, Cpu, Brain, Database, Shield, Network,
  Terminal, GitBranch, Cloud, Zap, Binary, Radio,
} from "lucide-react";

const TechBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--accent) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Soft radial glows */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[var(--accent)]/10 to-[var(--teal)]/10 blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-[24rem] h-[24rem] rounded-full bg-gradient-to-tr from-[var(--teal)]/10 to-[var(--accent)]/10 blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 w-[26rem] h-[26rem] rounded-full bg-gradient-to-tr from-[var(--accent)]/8 to-[var(--teal)]/8 blur-3xl" />

      {/* Floating tech icons scattered across the page */}
      <Code className="absolute top-[8%] left-[6%] w-10 h-10 text-[var(--accent)] opacity-[0.08] animate-float-slow" />
      <Cpu className="absolute top-[22%] left-[12%] w-12 h-12 text-[var(--teal)] opacity-[0.08] animate-float-slower" />
      <Brain className="absolute top-[38%] right-[8%] w-12 h-12 text-[var(--accent)] opacity-[0.08] animate-float-slow" />
      <Database className="absolute top-[52%] left-[4%] w-10 h-10 text-[var(--teal)] opacity-[0.08] animate-float-slower" />
      <Shield className="absolute top-[68%] right-[12%] w-11 h-11 text-[var(--accent)] opacity-[0.07] animate-float-slow" />
      <Network className="absolute top-[82%] left-[10%] w-9 h-9 text-[var(--teal)] opacity-[0.07] animate-float-slow" />
      <Terminal className="absolute top-[15%] right-[22%] w-9 h-9 text-[var(--accent)] opacity-[0.06] animate-float-slower" />
      <GitBranch className="absolute top-[44%] left-[22%] w-10 h-10 text-[var(--teal)] opacity-[0.06] animate-float-slow" />
      <Cloud className="absolute top-[60%] right-[22%] w-10 h-10 text-[var(--accent)] opacity-[0.06] animate-float-slower" />
      <Zap className="absolute top-[74%] left-[26%] w-9 h-9 text-[var(--teal)] opacity-[0.06] animate-float-slow" />
      <Binary className="absolute top-[90%] right-[6%] w-10 h-10 text-[var(--accent)] opacity-[0.07] animate-float-slower" />
      <Radio className="absolute top-[30%] left-[30%] w-9 h-9 text-[var(--teal)] opacity-[0.05] animate-float-slow" />
    </div>
  );
};

export default TechBackground;