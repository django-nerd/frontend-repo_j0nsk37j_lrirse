import { Menu, Camera, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white shadow-sm">
            <Camera className="h-5 w-5" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight text-lg">Lightfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#cta" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-white/80 hover:text-white transition">Log in</button>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition">
            Get started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg text-white/80 hover:text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
