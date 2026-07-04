import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-moon-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-moon-primary/10 to-transparent z-0" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-moon-surface mb-6 shadow-xl">
                  <img 
                    src="passp (2).jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Shravani Ashish Chavan</h3>
                <p className="text-moon-highlight mb-6">Software Engineer</p>
                
                <div className="w-full grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-moon-bg/50 p-3 rounded-lg border border-white/5">
                    <span className="block text-moon-muted mb-1">Location</span>
                    <span className="font-semibold">Kalyan, MH</span>
                  </div>
                  <div className="bg-moon-bg/50 p-3 rounded-lg border border-white/5">
                    <span className="block text-moon-muted mb-1">Projects Built</span>
                    <span className="font-semibold">5+</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Terminal About */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F041A]">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 bg-moon-surface border-b border-white/5">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-moon-muted text-sm font-code flex-1 justify-center">
                  <Terminal size={14} /> shravani@portfolio: ~
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 font-code text-sm leading-relaxed text-gray-300">
                <div className="mb-4">
                  <span className="text-moon-primary">shravani@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span> cat objective.txt
                </div>
                <p className="mb-6 text-moon-highlight">
                  To leverage my expertise in full-stack development, AI, and data analytics to build scalable, impactful, and premium digital solutions that solve real-world problems.
                </p>

                <div className="mb-4">
                  <span className="text-moon-primary">shravani@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span> cat education.json
                </div>
                <pre className="text-green-400 mb-6 whitespace-pre-wrap text-xs md:text-sm">
{`[
  {
    "degree": "Bachelors of Engineering in IT",
    "institution": "Shivajirao S Jondhale College of Engineering",
    "timeline": "Nov 2022 - Jun 2026",
    "cgpa": "7.98"
  }
]`}
                </pre>
                
                <div className="mb-4 animate-pulse">
                  <span className="text-moon-primary">shravani@portfolio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span> <span className="inline-block w-2 h-4 bg-white align-middle" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
