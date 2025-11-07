import React from 'react';
import { Globe2 } from 'lucide-react';

const regions = [
  { name: 'North America', intensity: 0.85 },
  { name: 'Europe', intensity: 0.78 },
  { name: 'Asia', intensity: 0.92 },
  { name: 'South America', intensity: 0.66 },
  { name: 'Africa', intensity: 0.58 },
  { name: 'Oceania', intensity: 0.61 },
];

export default function BuzzTracker() {
  return (
    <section className="relative">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Buzz Tracker</h2>
            <p className="mt-2 text-white/70">Heat-map showing how fast trends grow across regions.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
            <Globe2 className="h-4 w-4" /> Live
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10">
            <div className="absolute inset-0 opacity-60" style={{
              backgroundImage: 'radial-gradient(120px_120px_at_20%_30%, rgba(34,211,238,0.35), transparent 60%), radial-gradient(140px_140px_at_65%_60%, rgba(217,70,239,0.35), transparent 60%), radial-gradient(100px_100px_at_40%_80%, rgba(168,85,247,0.35), transparent 60%)'
            }} />
            <div className="relative z-10 grid h-full place-content-center text-center">
              <p className="text-sm text-white/70">Heat intensity by region</p>
            </div>
          </div>

          <div className="grid gap-3">
            {regions.map((r) => (
              <div key={r.name} className="flex items-center gap-3">
                <div className="w-36 text-sm text-white/70">{r.name}</div>
                <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                    style={{ width: `${Math.round(r.intensity * 100)}%` }}
                  />
                </div>
                <div className="w-12 text-right text-sm font-medium">{Math.round(r.intensity * 100)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
