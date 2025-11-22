import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Built for freelancers & creators
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Run your freelance business in one clean workspace
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Proposals, contracts, invoices, and client portals — thoughtfully designed for photographers, designers, and creative pros.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium hover:bg-blue-50 transition">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur px-5 py-3 text-white border border-white/20 hover:bg-white/15 transition">
              See features
            </a>
          </div>
          <p className="mt-3 text-xs text-white/70">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
