import { Sparkles, Shield, Timer, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Everything you need, nothing you don’t</h2>
          <p className="mt-3 text-slate-600">Purpose-built tools that feel as crisp as your work.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:shadow-lg hover:-translate-y-0.5 transition shadow-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center shadow">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-slate-900 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-6 left-10 h-24 w-24 rounded-full bg-sky-200/60 blur-2xl" />
        <div className="absolute bottom-0 right-20 h-20 w-20 rounded-full bg-indigo-200/60 blur-2xl" />
      </div>
    </section>
  );
}
