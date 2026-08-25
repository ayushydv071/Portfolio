import React from 'react';
import { Code2, Layers, BrainCircuit, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, aboutCards } from '../data/portfolioData';
import FuzzyText from './FuzzyText';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  BrainCircuit: BrainCircuit,
  Zap: Zap,
};

export default function About() {
  // Fix 3: Filter out "10+ Projects Delivered" and "100+ DSA Problems" from bottom section
  const remainingStats = personalInfo.stats.filter(
    (stat) => stat.label === 'Current Focus' || stat.label === 'Degree Level'
  );

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#1E1E1E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="eyebrow-tag">
            // GET TO KNOW ME
          </span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold font-heading text-[#FFFFFF] tracking-tight flex items-center justify-center gap-3 flex-wrap">
            <span>About</span>
            <FuzzyText
              baseIntensity={0.15}
              hoverIntensity={0.5}
              enableHover={true}
              fontSize="clamp(1.75rem, 3.5vw, 2.5rem)"
              fontWeight={700}
              fontFamily="Syne, sans-serif"
              color="#22C55E"
              fuzzRange={20}
              transitionDuration={12}
              clickEffect={true}
              glitchMode={true}
              glitchInterval={3500}
              glitchDuration={250}
            >
              Ayush Yadav
            </FuzzyText>
          </h2>
          <div className="w-16 h-1 bg-[#22C55E] mx-auto rounded-full mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 4 Feature Cards (Fix 3: 24px+ gap maintained) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {aboutCards.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || Code2;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="charcoal-card charcoal-card-hover p-7 sm:p-8 space-y-4 relative group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-[#22C55E] group-hover:scale-110 group-hover:border-emerald-500/50 transition-all">
                    <IconComponent className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#22C55E] font-semibold tracking-wide uppercase">{card.subtitle}</span>
                    <h3 className="text-[clamp(1.15rem,2vw,1.35rem)] font-bold font-heading text-[#FFFFFF] group-hover:text-[#22C55E] transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#A8A8A8] leading-relaxed font-sans font-normal">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Bio Narrative, Checklist, & De-congested Stats (Fix 3) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            
            <div className="space-y-5">
              <h3 className="text-[clamp(1.35rem,2.5vw,1.85rem)] font-bold font-heading text-[#FFFFFF] leading-tight">
                Engineering student dedicated to <span className="text-[#22C55E]">building & shipping</span> production-ready software.
              </h3>
              
              <div className="space-y-4 text-[#A8A8A8] text-base leading-relaxed font-normal">
                {personalInfo.aboutBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-[#FFFFFF] text-sm font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center flex-shrink-0 border border-[#22C55E]/30">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFFFFF] text-sm font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center flex-shrink-0 border border-[#22C55E]/30">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>Ship Products over Prototypes</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFFFFF] text-sm font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center flex-shrink-0 border border-[#22C55E]/30">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>Continuous Learning in Public</span>
              </div>
              <div className="flex items-center gap-3 text-[#FFFFFF] text-sm font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center flex-shrink-0 border border-[#22C55E]/30">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span>Problem Solver</span>
              </div>
            </div>

            {/* Fix 3: De-congested Stats Area (32px-40px gap, 32px divider margin, centered generous spacing) */}
            <div className="my-8 pt-8 border-t-2 border-[#22C55E]/20">
              <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-12">
                {remainingStats.map((stat, idx) => (
                  <div key={idx} className="text-center space-y-1 bg-[#2A2A2A] px-6 py-4 rounded-2xl border border-white/5 flex-1 min-w-[200px]">
                    <p className="text-xl sm:text-2xl font-extrabold font-heading text-[#22C55E]">{stat.value}</p>
                    <p className="text-xs font-bold text-[#A8A8A8] uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
