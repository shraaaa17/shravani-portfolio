import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Code2, Database, Brain, Hexagon } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-moon-highlight font-medium tracking-wider uppercase text-sm mb-4 block"
              >
                Hello, I'm
              </motion.span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Shravani <br/>
                <span className="text-gradient">Chavan</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-white/80 mb-6">
                Software Engineer 
              </h2>
              <p className="text-lg text-moon-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Turning ambitious ideas into scalable digital products through code, data, and innovation.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4"
            >
              <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => window.location.href = '#projects'}>
                View Projects
              </Button>
              <Button
                variant="secondary"
                icon={<Download size={18} />}
                onClick={() => window.open('https://drive.google.com/file/d/175YjiPudY60i6PQAruH9_lsm8V75I7AQ/view?usp=sharing', '_blank')}
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-8"
            >
              <a href="https://github.com/shraaaa17" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/shravani-chavan-858894292/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors"><FaLinkedin size={24} /></a>
              <a href="mailto:shravanich.17@gmail.com" className="text-white/60 hover:text-white transition-colors"><Mail size={24} /></a>
            </motion.div>
          </motion.div>

          {/* Right Side: Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* Main Portrait Placeholder */}
            <div className="relative z-20 w-64 h-80 lg:w-80 lg:h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-moon-bg to-transparent z-10" />
              <img 
                src="hero.jpeg"
                alt="Shravani Ashish Chavan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Glass Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-4 lg:right-12 z-30"
            >
              <GlassCard className="p-4 flex items-center gap-3 w-40">
                <Code2 className="text-moon-highlight" size={20} />
                <span className="text-sm font-medium">python</span>
              </GlassCard>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-4 lg:left-0 z-30"
            >
              <GlassCard className="p-4 flex items-center gap-3 w-44">
                <Database className="text-moon-accent" size={20} />
                <span className="text-sm font-medium">SQL & MongoDB</span>
              </GlassCard>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-4 lg:-right-8 z-10"
            >
              <GlassCard className="p-4 flex items-center gap-3">
                <Brain className="text-moon-primary" size={20} />
                <span className="text-sm font-medium">AI Models</span>
              </GlassCard>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 left-8 lg:left-4 z-10"
            >
              <GlassCard className="p-4 flex items-center gap-3">
                <Hexagon className="text-purple-400" size={20} />
                <span className="text-sm font-medium">Web3 & Smart Contracts</span>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
