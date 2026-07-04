import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { TechChip } from '../ui/TechChip';

const projects = [
  {
    title: 'CleanChain AI',
    description: 'AI-Based Waste Management & Optimization System. Developed a smart waste management solution using AI to optimize waste collection, with data-driven models to analyze waste patterns.',
    image: 'https://i.pinimg.com/1200x/2f/9a/eb/2f9aebee78ffae610cfaebc05f97b277.jpg',
    tech: ['Python', 'WebTech', 'Data Analysis', 'AI', 'blockchain', 'Full Stack'],
    github: 'https://github.com/shraaaa17',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'Exprecut',
    description: 'AI Interview Evaluation System. Built an NLP-based scoring system with voice input processing and backend logic, applying data exploration to identify improvement opportunities.',
    image: 'https://i.pinimg.com/736x/16/ac/3a/16ac3aa8fedbb2fdb0ea535d11a5658c.jpg',
    tech: ['NLP', 'LLMs', 'Python', 'Full Stack', 'Data Analysis', 'WebTech'],
    github: 'https://github.com/shraaaa17',
    caseStudy: 'https://www.jetir.org/papers/JETIR2504685.pdf'
  },

 {
    title: 'Elite-Pay',
    description: 'Built a blockchain-powered POS system enabling secure INR, crypto, and cross-border NFC payments with AI-driven fraud detection using Web3 and ESP32.',
    image: 'https://i.pinimg.com/1200x/0d/e2/41/0de241ad498dc908f116fc7d4d872a99.jpg',
    tech: ['Solidity', 'Node.js', 'Mongo DB', 'Web3.js', 'AI', 'ESP32', 'NFC', 'Blockchain'],
    github: 'https://github.com/shraaaa17',
    live: '#',
    caseStudy: '#'
  }, 

  {
    title: 'AI-Driven IPL Match Analysis',
    description: 'Performed data cleaning, feature engineering, and applied ML algorithms to uncover game patterns, improving model accuracy by 22%. Built dashboards to convert findings into insights.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop',
    tech: ['Machine Learning', 'Matplotlib', 'Seaborn' , 'Pandas', 'NumPy', 'Data Analysis'],
    github: 'https://github.com/shraaaa17',
    live: '#',
    caseStudy: '#'
  }

];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-moon-surface/10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-moon-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col p-0 overflow-hidden group">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-moon-bg/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-moon-highlight transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(tech => (
                      <TechChip key={tech} label={tech} className="py-1 px-3 text-xs bg-moon-bg/50" />
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    <Button variant="primary" size="sm" icon={<ExternalLink size={16} />} onClick={() => window.open(project.live)}>
                      Live Demo
                    </Button>
                    <Button variant="secondary" size="sm" icon={<FaGithub size={16} />} onClick={() => window.open(project.github)}>
                      Code
                    </Button>
                    {project.caseStudy && (
                      <Button variant="ghost" size="sm" icon={<BookOpen size={16} />} onClick={() => window.open(project.caseStudy)}>
                        Case Study
                      </Button>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
