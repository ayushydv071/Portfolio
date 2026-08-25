import React, { useState } from 'react';
import { 
  Atom, Server, Cpu, Database, FileCode, Palette, 
  Code, Terminal, Brain, Globe, GitBranch, Workflow, Cloud, UploadCloud 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';

const iconMap = {
  Atom, Server, Cpu, Database, FileCode, Palette,
  Code, Terminal, Brain, Globe, GitBranch, Workflow, Cloud, UploadCloud
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsCategories.map(cat => cat.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-24 relative bg-[#1E1E1E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="eyebrow-tag">
            // TECH STACK & PROFICIENCY
          </span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold font-heading text-[#FFFFFF] tracking-tight">
            Skills & <span className="text-[#22C55E]">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-[#22C55E] mx-auto rounded-full mt-2"></div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-heading transition-all duration-300 ${
                  isSelected
                    ? 'text-[#1E1E1E]'
                    : 'bg-[#2A2A2A] text-[#A8A8A8] hover:text-white border border-white/5 shadow-charcoal-card'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="skillsTabBg"
                    className="absolute inset-0 bg-[#22C55E] rounded-full shadow-md shadow-mint/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid Grouped by Category */}
        <div className="space-y-14">
          {displayedCategories.map((catGroup, catIdx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold font-heading text-[#FFFFFF] flex items-center gap-2.5 border-b border-white/10 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
                {catGroup.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {catGroup.skills.map((skill) => {
                  const IconComp = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="charcoal-card charcoal-card-hover p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 cursor-default"
                    >
                      <div
                        className="w-14 h-14 rounded-2xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ color: skill.color === '#FFFFFF' ? '#FFFFFF' : skill.color }}
                      >
                        <IconComp className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold font-heading text-[#FFFFFF] group-hover:text-[#22C55E] transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[0.8rem] font-mono text-[#A8A8A8] block mt-1 font-medium">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
