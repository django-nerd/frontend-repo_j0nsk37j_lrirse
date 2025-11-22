import { Menu, Camera, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm ring-1 ring-slate-200/60 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-slate-800 to-slate-600 text-white flex items-center justify-center shadow-inner">
            <Camera className="h-5 w-5" />
          </div>
          <span className="text-slate-900 font-semibold tracking-tight text-lg">Lightfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#cta" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 transition">Log in</button>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white font-medium shadow hover:bg-slate-800 transition">
            Get started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
