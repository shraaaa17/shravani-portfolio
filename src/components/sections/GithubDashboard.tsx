import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { GlassCard } from '../ui/GlassCard';

const pinnedRepos = [
  { name: 'clean-chain', desc: 'AI-powered waste management system', stars: 24, forks: 5, language: 'TypeScript' },
  { name: 'data-dashboard', desc: 'Enterprise analytics dashboard', stars: 12, forks: 2, language: 'Python' },
  { name: 'portfolio-v2', desc: 'Premium developer portfolio', stars: 45, forks: 8, language: 'React' },
];

export const GithubDashboard: React.FC = () => {
  return (
    <section id="github" className="py-24 relative z-10 bg-[#0D0216] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <FaGithub size={40} className="text-white" />
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold">GitHub Dashboard</h2>
            <p className="text-moon-muted">@shravaniachavan</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            <GlassCard className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-white">Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-moon-muted">Total Stars</span>
                  <span className="font-bold text-moon-highlight">156</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-moon-muted">Total Commits</span>
                  <span className="font-bold text-moon-highlight">1.2k+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-moon-muted">Repositories</span>
                  <span className="font-bold text-moon-highlight">42</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-white">Top Languages</h3>
              <div className="space-y-4">
                {[
                  { lang: 'TypeScript', pct: 45, color: 'bg-blue-400' },
                  { lang: 'Python', pct: 30, color: 'bg-yellow-400' },
                  { lang: 'CSS/Tailwind', pct: 25, color: 'bg-purple-400' },
                ].map(l => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{l.lang}</span>
                      <span className="text-moon-muted">{l.pct}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-moon-bg rounded-full overflow-hidden">
                      <div className={`h-full ${l.color}`} style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Repos Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <h3 className="font-semibold text-lg text-white mb-2">Pinned Repositories</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {pinnedRepos.map((repo, idx) => (
                <GlassCard key={idx} className="p-5 hover:border-moon-primary/50 cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-moon-primary" />
                    <a href="#" className="font-semibold text-white hover:underline">{repo.name}</a>
                  </div>
                  <p className="text-sm text-moon-muted mb-6 h-10">{repo.desc}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-moon-muted">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1 hover:text-moon-highlight">
                      <Star size={14} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-moon-highlight">
                      <GitFork size={14} /> {repo.forks}
                    </span>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Contribution Graph Placeholder */}
            <GlassCard className="p-6 mt-2">
              <h3 className="font-semibold text-sm mb-4 text-white">1,204 contributions in the last year</h3>
              <div className="w-full h-32 bg-[url('https://ghchart.rshah.org/210635/shravaniachavan')] bg-no-repeat bg-center bg-contain opacity-70 filter brightness-150 contrast-125 hue-rotate-[260deg]" />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
