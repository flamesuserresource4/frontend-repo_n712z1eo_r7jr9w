import React from 'react';
import TrendRadar from './components/TrendRadar.jsx';
import IdeaGenerator from './components/IdeaGenerator.jsx';
import ContentStudio from './components/ContentStudio.jsx';
import BuzzTracker from './components/BuzzTracker.jsx';
import { Rocket, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070812] text-white antialiased">
      {/* Global neon gradient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[conic-gradient(at_top_left,_theme(colors.cyan.500),_transparent_30%,_theme(colors.fuchsia.500))] opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,_theme(colors.purple.700),_transparent_60%)] opacity-40 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_40px_0_rgba(34,211,238,0.45)] grid place-content-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">TrendForge</h1>
              <p className="text-xs text-white/60">AI-powered viral trend engine</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
            <Rocket className="h-4 w-4" /> Launch
          </button>
        </div>
      </header>

      {/* Sections */}
      <main className="mx-auto max-w-7xl px-6 space-y-20 py-8">
        <TrendRadar />
        <IdeaGenerator />
        <ContentStudio />
        <BuzzTracker />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-white/60">
          Crafted for creators. © {new Date().getFullYear()} TrendForge
        </div>
      </footer>
    </div>
  );
}
