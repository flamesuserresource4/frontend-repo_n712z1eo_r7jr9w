import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Image as ImageIcon, Sparkles } from 'lucide-react';

const categories = [
  { key: 'tech', label: 'Tech' },
  { key: 'fashion', label: 'Fashion' },
  { key: 'fitness', label: 'Fitness' },
  { key: 'memes', label: 'Memes' },
];

function IdeaCard({ idea, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.03 * i }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400/90 to-fuchsia-500/90 grid place-content-center text-black/90">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-white/70">{idea.tagline}</p>
          <h4 className="mt-1 text-base font-semibold tracking-tight">{idea.title}</h4>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {idea.hashtags.map((h) => (
          <span key={h} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{h}</span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
        <ImageIcon className="h-3.5 w-3.5" /> AI image attached
      </div>
    </motion.div>
  );
}

export default function IdeaGenerator() {
  const [category, setCategory] = useState('tech');
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const seedIdeas = {
    tech: [
      { title: 'Pocket AI Rig', tagline: 'Your phone becomes a production studio', hashtags: ['#ai', '#shorts', '#creator'] },
      { title: '5 Apps in 5 Minutes', tagline: 'Rapid-fire demos with split-screen overlays', hashtags: ['#buildinpublic', '#dev', '#automation'] },
    ],
    fashion: [
      { title: 'Neon Capsule Wardrobe', tagline: 'Streetwear with cyber glow accents', hashtags: ['#fitcheck', '#neon', '#aesthetic'] },
      { title: 'Thrift Flip: Sci‑Fi Edition', tagline: 'Upcycle basics into futuristic pieces', hashtags: ['#thriftflip', '#DIY', '#glam'] },
    ],
    fitness: [
      { title: 'Looped HIIT Challenge', tagline: 'Seamless 20s loops that hypnotize', hashtags: ['#hiit', '#loop', '#wellness'] },
      { title: 'Biohack Morning', tagline: 'Cold plunge + red light + breathwork', hashtags: ['#biohacking', '#routine', '#health'] },
    ],
    memes: [
      { title: 'When AI Writes Captions', tagline: '“Me: keep it low-key” — AI:', hashtags: ['#memes', '#ai', '#lol'] },
      { title: 'Relatable Tech Debt', tagline: 'Before vs after refactor', hashtags: ['#programmerhumor', '#meme', '#relatable'] },
    ],
  };

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      const out = seedIdeas[category];
      setIdeas(out);
      setLoading(false);
    }, 600);
  };

  return (
    <section className="relative">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">AI Idea Generator</h2>
            <p className="mt-2 text-white/70">Pick a category and instantly get polished, ready-to-post content ideas.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors backdrop-blur-md ${
                  category === c.key
                    ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-200'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {c.label}
              </button>
            ))}
            <button
              onClick={generate}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 px-4 py-2 text-sm backdrop-blur-md hover:from-cyan-400/30 hover:to-fuchsia-500/30"
            >
              <Wand2 className="h-4 w-4" /> Generate
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5"
                  />
                ))
              : ideas.map((idea, i) => <IdeaCard key={idea.title} idea={idea} i={i} />)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
