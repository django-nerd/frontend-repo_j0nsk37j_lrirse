import { Sparkles, Shield, Timer, Wand2 } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Proposal builder",
    desc: "Craft beautiful, on-brand proposals in minutes — reusable sections, image blocks, and pricing tables included.",
  },
  {
    icon: Timer,
    title: "Time tracking",
    desc: "Start timers per project and auto-convert tracked hours into invoices.",
  },
  {
    icon: Shield,
    title: "Contracts & e-sign",
    desc: "Legally-sound contracts with one-click e‑signature and client countersign.",
  },
  {
    icon: Wand2,
    title: "Client portal",
    desc: "A minimalist portal where clients can review deliverables, approve milestones, and pay invoices.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Everything you need, nothing you don’t</h2>
          <p className="mt-3 text-white/70">Purpose-built tools that feel as crisp as your work.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
