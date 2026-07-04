import React from 'react';
import { motion } from 'framer-motion';
import { TechChip } from '../ui/TechChip';
import { Code2, Layout, Server, Database, Brain, Hexagon, Wrench } from 'lucide-react';

const categories = [
  {
    title: 'Programming',
    icon: <Code2 size={18} />,
    skills: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Web Dev',
    icon: <Layout size={18} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'node.js', 'Next.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Database',
    icon: <Database size={18} />,
    skills: ['SQL', 'MySQL', 'MongoDB', 'Firebase']
  },
  {
    title: 'Core Tech',
    icon: <Server size={18} />,
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Networking',]
  },
  {
    title: 'Data & AI',
    icon: <Brain size={18} />,
    skills: ['Data Analysis', 'Excel', 'Basic ML', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLP', 'LLMs']
  },
  {
    title: 'Tools',
    icon: <Wrench size={18} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva']
  }
];

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-moon-surface/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-moon-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 border-t-2 border-t-moon-primary/30"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="text-moon-highlight bg-moon-primary/20 p-2 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <TechChip key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
