import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight"
        >
          Launch in minutes, not months
        </motion.h2>
        <p className="mt-3 text-slate-600">Join thousands of independents running their business on Lightfolio.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input type="email" placeholder="you@studio.com" className="w-full rounded-lg bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition">Get early access</button>
        </form>
        <p className="mt-3 text-xs text-slate-500">Free forever on Starter • Cancel anytime</p>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-40 w-[80%] max-w-3xl rounded-full bg-sky-200/40 blur-3xl" />
      </div>
    </section>
  );
}
