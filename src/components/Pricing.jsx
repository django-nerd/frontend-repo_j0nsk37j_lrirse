export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, creator-friendly pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you’re ready.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-white font-medium">Starter</h3>
            <p className="mt-1 text-sm text-white/70">Everything to get going.</p>
            <div className="mt-6 text-white"><span className="text-4xl font-semibold">$0</span> <span className="text-sm text-white/70">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>3 active clients</li>
              <li>Invoices & payments</li>
              <li>Basic proposals</li>
            </ul>
            <a href="#cta" className="mt-7 inline-flex justify-center w-full rounded-lg bg-white text-slate-900 py-3 font-medium hover:bg-blue-50 transition">Start free</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-7 ring-1 ring-inset ring-emerald-400/20">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200">Most popular</div>
            <h3 className="mt-3 text-white font-medium">Pro</h3>
            <p className="mt-1 text-sm text-white/70">For growing independents.</p>
            <div className="mt-6 text-white"><span className="text-4xl font-semibold">$19</span> <span className="text-sm text-white/70">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>Unlimited clients</li>
              <li>Advanced proposals</li>
              <li>Contracts & e‑sign</li>
              <li>Client portal</li>
            </ul>
            <a href="#cta" className="mt-7 inline-flex justify-center w-full rounded-lg bg-white text-slate-900 py-3 font-medium hover:bg-blue-50 transition">Go Pro</a>
          </div>

          {/* Studio */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-white font-medium">Studio</h3>
            <p className="mt-1 text-sm text-white/70">For teams & studios.</p>
            <div className="mt-6 text-white"><span className="text-4xl font-semibold">$39</span> <span className="text-sm text-white/70">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>Team collaboration</li>
              <li>Custom branding</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-7 inline-flex justify-center w-full rounded-lg bg-white text-slate-900 py-3 font-medium hover:bg-blue-50 transition">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
