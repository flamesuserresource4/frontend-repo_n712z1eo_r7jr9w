import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Play, Scissors } from 'lucide-react';

const presets = [
  { name: 'Reel 9:16', ratio: '1080x1920' },
  { name: 'Short 9:16', ratio: '1080x1920' },
  { name: 'Thumb 16:9', ratio: '1280x720' },
  { name: 'Post 1:1', ratio: '1080x1080' },
];

export default function ContentStudio() {
  const [selected, setSelected] = useState('Reel 9:16');

  return (
    <section className="relative">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Content Studio</h2>
            <p className="mt-2 text-white/70">Minimal editor with autosuggested templates for reels, shorts, thumbnails and posts.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
            <Layout className="h-4 w-4" /> {selected}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[260px,1fr]">
          <div className="space-y-3">
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() => setSelected(p.name)}
                className={`w-full rounded-xl border p-3 text-left transition ${
                  selected === p.name
                    ? 'border-fuchsia-400/40 bg-fuchsia-400/10'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{p.name}</span>
                  <span className="text-xs text-white/60">{p.ratio}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_0%,_rgba(236,72,153,0.15),_transparent_60%)]" />
            <div className="relative grid h-[360px] place-content-center rounded-xl border border-white/10 bg-black/40 text-white/70">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="grid h-16 w-16 place-content-center rounded-2xl bg-white/10">
                  <Play className="h-8 w-8" />
                </div>
                <p className="text-sm">Drop media or start with a template</p>
                <div className="flex items-center gap-2">
                  <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">Add Clip</button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1.5 text-xs text-fuchsia-200">
                    <Scissors className="h-3.5 w-3.5" /> Auto-Edit
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
