import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ExternalLink } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

const achievements = [
  { title: 'Smart India Hackathon 2025', org: 'National Finalist (Hardware Edition)', year: '2025' },
  { title: 'Innverve National Level Hackathon', org: 'Finalist', year: '2024' },
  { title: 'FuturePreneur Competition', org: 'Winner - KC College, Thane', year: '2023' },
];

const certifications = [
  { title: 'Python for Data Science', org: 'NPTEL', year: '2024', link: '#' },
  { title: 'Data Analysis', org: 'IBM', year: '2024', link: '#' },
  { title: 'Data Analysis', org: 'Deloitte', year: '2025', link: '#' },
];

export const AchievementsAndCertifications: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Achievements */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <Trophy className="text-moon-accent" size={28} />
              <h2 className="text-3xl font-bold">Achievements</h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 flex items-center justify-between border-l-4 border-l-moon-accent">
                    <div>
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <p className="text-moon-muted text-sm">{item.org}</p>
                    </div>
                    <div className="font-code text-moon-primary bg-moon-bg px-3 py-1 rounded-md text-sm border border-white/5">
                      {item.year}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <Award className="text-moon-primary" size={28} />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {certifications.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <p className="text-moon-muted text-sm">{item.org} &bull; {item.year}</p>
                    </div>
                    <Button variant="outline" size="sm" icon={<ExternalLink size={14} />} className="w-fit text-xs py-1.5 px-3">
                      Credential
                    </Button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
