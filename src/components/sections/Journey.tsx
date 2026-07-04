import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import reel1 from '../../assets/reel1.mp4';
import reel2 from '../../assets/reel2.mp4';
import reel3 from '../../assets/reel3.mp4';

const reels = [
  { id: 1, title: 'SMART INDIA HACKATHON', videoUrl: reel1, duration: '0:30' },
  { id: 2, title: 'ETH MUMBAI HACKATHON', videoUrl: reel2, duration: '0:30' },
  { id: 3, title: 'INTERNSHIP', videoUrl: reel3, duration: '0:30' },
];

export const Journey: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef(new Map<number, HTMLVideoElement>());

  // IntersectionObserver to auto-play/pause muted videos when they become visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          if (!el) return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // try to play; browsers may reject autoplay without muted attribute
            el.muted = true;
            el.play().catch(() => {
              /* ignore play errors */
            });
          } else {
            el.pause();
          }
        });
      },
      { threshold: [0.5] }
    );

    // observe all video elements currently registered
    const vids = Array.from(videoRefs.current.values()).filter(Boolean);
    vids.forEach((v) => observer.observe(v));

    return () => {
      vids.forEach((v) => {
        try {
          observer.unobserve(v);
        } catch {}
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section id="journey" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-moon-muted max-w-2xl mx-auto mb-4">
            A visual story of my experiences, hackathons, and the path to becoming a developer.
          </p>
          <div className="w-20 h-1 bg-moon-primary mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="pl-6 md:pl-12 lg:pl-24 pb-8">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pr-6 md:pr-12 lg:pr-24 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="snap-center shrink-0 w-[280px] md:w-[320px] lg:w-[400px]"
            >
              <GlassCard className="p-3 group relative hover:border-moon-highlight/30" hoverEffect={false}>
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-moon-bg">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current.set(reel.id, el);
                      else videoRefs.current.delete(reel.id);
                    }}
                    src={reel.videoUrl}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moon-bg via-moon-bg/20 to-transparent opacity-80 pointer-events-none" />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-bold text-lg text-white mb-1 drop-shadow-md">{reel.title}</h3>
                    <div className="text-moon-highlight text-sm font-medium">{reel.duration}</div>
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
