import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Light gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Built for freelancers & creators
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Run your freelance business in one clean workspace
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Proposals, contracts, invoices, and client portals — thoughtfully designed for photographers, designers, and creative pros.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur px-5 py-3 text-slate-900 border border-slate-200 hover:bg-white transition">
              See features
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">No credit card required</p>
        </motion.div>
      </div>

      {/* floating orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 left-20 h-40 w-40 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-32 w-32 rounded-full bg-indigo-300/40 blur-3xl" />
      </div>
    </section>
  );
}
