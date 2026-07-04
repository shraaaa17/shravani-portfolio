import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const experiences = [
  {
    company: 'QSpiders',
    role: 'Data Science Intern',
    duration: 'Dec 2025 - Feb 2026',
    achievements: [
      'learned and implimented various data science techniques and algorithms, including regression, classification, clustering, and natural language processing.',
      'Developed and deployed machine learning models for real-world applications, such as predictive analytics, recommendation systems, and sentiment analysis.',
      'Collaborated with cross-functional teams to gather requirements, analyze data, and present findings to stakeholders, resulting in actionable insights and improved decision-making.',
    ]
  },

  {
    company: 'IIT-BHU',
    role: 'Research Intern',
    duration: 'April 2025 - July 2025',
    achievements: [
      'Developed a Python-based smart logistics optimization system using MILP and NSGA-II to balance cost, service level, resilience, and sustainability.',
      'Implemented multi-objective optimization techniques (ε-constraint and evolutionary algorithms) for scalable decision-making under uncertainty.',
      'Automated experimentation and analysis with modular, reproducible pipelines, improving model efficiency and reliability.',
    ]
  },
  {
    company: 'CADD Centre',
    role: 'Student Intern',
    duration: 'Mar 2024 - Apr 2024',
    achievements: [
      'Performed data cleaning, EDA, and trend analysis using Pandas and NumPy.',
      'Built ML models for actionable business insights, supporting strategy improvements.',
      'Worked with large datasets to identify anomalies and key decision-making metrics.',
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-moon-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-moon-surface ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-moon-primary border-4 border-moon-bg shadow-[0_0_10px_#6667AB]" />

              <GlassCard className="w-full relative group p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Briefcase size={64} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-code text-moon-highlight bg-moon-bg/50 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-lg text-moon-primary mb-6 font-medium">{exp.company}</h4>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm md:text-base flex items-start gap-3">
                        <span className="text-moon-accent mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-moon-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
