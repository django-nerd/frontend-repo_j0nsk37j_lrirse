import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* top radial glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      {/* footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Lightfolio — Built for independents.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;