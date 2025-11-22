import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Simple, creator-friendly pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready.</p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-7 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-slate-900 font-medium">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">Everything to get going.</p>
            <div className="mt-6 text-slate-900"><span className="text-4xl font-semibold">$0</span> <span className="text-sm text-slate-600">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>3 active clients</li>
              <li>Invoices & payments</li>
              <li>Basic proposals</li>
            </ul>
            <a href="#cta" className="mt-7 inline-flex justify-center w-full rounded-lg bg-slate-900 text-white py-3 font-medium hover:bg-slate-800 transition">Start free</a>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-900 to-slate-800 p-7 shadow-sm ring-1 ring-slate-900/10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white">Most popular</div>
            <h3 className="mt-3 text-white font-medium">Pro</h3>
            <p className="mt-1 text-sm text-slate-200">For growing independents.</p>
            <div className="mt-6 text-white"><span className="text-4xl font-semibold">$19</span> <span className="text-sm text-slate-300">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-200/90">
              <li>Unlimited clients</li>
              <li>Advanced proposals</li>
              <li>Contracts & e‑sign</li>
              <li>Client portal</li>
            </ul>
            <a href="#cta" className="mt-7 inline-flex justify-center w-full rounded-lg bg-white text-slate-900 py-3 font-medium hover:bg-slate-100 transition">Go Pro</a>
          </motion.div>

          {/* Studio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-7 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-slate-900 font-medium">Studio</h3>
            <p className="mt-1 text-sm text-slate-600">For teams & studios.</p>
            <div className="mt-6 text-slate-900"><span className="text-4xl font-semibold">$39</span> <span className="text-sm text-slate-600">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>Team collaboration</li>
              <li>Custom branding</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-7 inline-flex justify-center w-full rounded-lg bg-slate-900 text-white py-3 font-medium hover:bg-slate-800 transition">Contact sales</a>
          </motion.div>
        </div>
      </div>

      {/* background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-8 right-10 h-24 w-24 rounded-full bg-sky-200/60 blur-2xl" />
      </div>
    </section>
  );
}
