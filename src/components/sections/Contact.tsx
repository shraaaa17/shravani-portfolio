import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate EmailJS submission delay
    setTimeout(() => {
      setStatus('success');
      // Reset after showing success
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-moon-surface/10 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Let's Build Something <br/>
              <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-moon-muted text-lg mb-12 max-w-md">
              Whether you have a project in mind, a role to fill, or just want to chat about tech—my inbox is always open.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:shravanich.17@gmail.com" className="flex items-center gap-4 text-white hover:text-moon-highlight transition-colors group">
                <div className="w-12 h-12 rounded-full bg-moon-surface flex items-center justify-center group-hover:bg-moon-primary/20 transition-colors border border-white/5">
                  <Mail size={20} className="text-moon-primary" />
                </div>
                <span className="text-lg">shravanich.17@gmail.com</span>
              </a>
              <a href="tel:+919321796361" className="flex items-center gap-4 text-white hover:text-moon-highlight transition-colors group">
                <div className="w-12 h-12 rounded-full bg-moon-surface flex items-center justify-center group-hover:bg-moon-primary/20 transition-colors border border-white/5">
                  <Phone size={20} className="text-moon-primary" />
                </div>
                <span className="text-lg">+91 9321796361</span>
              </a>
              <div className="flex items-center gap-4 mt-4 pl-2">
                <a href="https://www.linkedin.com/in/shravani-chavan-858894292/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"><FaLinkedin size={24} /></a>
                <a href="https://github.com/shraaaa17" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"><FaGithub size={24} /></a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 lg:p-10">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 size={64} className="text-green-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-moon-muted">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-moon-muted mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-moon-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-moon-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-moon-muted mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-moon-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-moon-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-moon-muted mb-2">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={5}
                      className="w-full bg-moon-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-moon-primary transition-colors resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full mt-2" 
                    disabled={status === 'submitting'}
                    icon={status === 'submitting' ? undefined : <Send size={18} />}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
