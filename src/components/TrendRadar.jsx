import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Flame, TrendingUp, Hashtag } from 'lucide-react';

const trends = [
  {
    title: 'NeoWear Tech',
    hashtags: ['#wearables', '#ai', '#health'],
    score: 92,
    img: 'https://images.unsplash.com/photo-1542759564-14282d877dae?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Loop Fitness',
    hashtags: ['#fitness', '#loop', '#smartbands'],
    score: 88,
    img: 'https://images.unsplash.com/photo-1543975200-8e313fb04b29?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cyber Glam',
    hashtags: ['#fashion', '#neon', '#glam'],
    score: 84,
    img: 'https://images.unsplash.com/photo-1535525153412-5a4532d8b3b8?q=80&w=1600&auto=format&fit=crop',
  },
];

function TrendCard({ trend, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <img src={trend.img} alt={trend.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div>
            <p className="text-sm text-white/70">Predicted Virality</p>
            <div className="mt-1 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-300" />
              <span className="text-lg font-semibold">{trend.score}%</span>
            </div>
          </div>
          <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-300 text-xs border border-emerald-300/30">
            Rising
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">{trend.title}</h3>
        <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/70">
          <Flame className="h-3.5 w-3.5 text-fuchsia-400" /> Hot
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {trend.hashtags.map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-white/70 border border-white/10">
            <Hashtag className="h-3 w-3 text-cyan-300" /> {tag.replace('#','')}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TrendRadar() {
  return (
    <section className="relative">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-400/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold tracking-tight">Trend Radar</h2>
            <p className="mt-2 text-white/70">Scanning global social platforms in real-time to spot surging conversations before they explode.</p>
          </div>
          <div className="relative mt-6 h-[420px] w-full overflow-hidden rounded-2xl">
            <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {trends.map((t, i) => (
            <TrendCard key={t.title} trend={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
