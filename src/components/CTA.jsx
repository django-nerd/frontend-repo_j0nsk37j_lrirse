export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Launch in minutes, not months</h2>
        <p className="mt-3 text-white/70">Join thousands of independents running their business on Lightfolio.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input type="email" placeholder="you@studio.com" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <button className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium hover:bg-blue-50 transition">Get early access</button>
        </form>
        <p className="mt-3 text-xs text-white/60">Free forever on Starter • Cancel anytime</p>
      </div>
    </section>
  );
}
