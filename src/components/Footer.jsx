import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#1E1E1E] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#22C55E] flex items-center justify-center text-[#1E1E1E] font-bold shadow-md">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <p className="text-base font-extrabold font-heading text-white">
                Ayush <span className="text-[#22C55E]">Yadav</span>
              </p>
              <p className="text-xs text-[#A8A8A8] font-mono font-semibold">
                Full-Stack & Data Science Engineer
              </p>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-xs text-[#A8A8A8] font-normal">
            <p>© {new Date().getFullYear()} Ayush Yadav. Dark Charcoal & Mint Developer Portfolio.</p>
          </div>

          {/* Back To Top Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-[#2A2A2A] hover:bg-[#22C55E] text-white hover:text-[#1E1E1E] border border-white/10 transition-all flex items-center gap-2 text-xs font-bold font-heading shadow-charcoal-card group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#22C55E] group-hover:text-[#1E1E1E] transition-colors" />
          </motion.button>

        </div>
      </div>
    </footer>
  );
}
