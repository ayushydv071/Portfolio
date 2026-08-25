import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 relative bg-[#1E1E1E] border-t border-white/5">
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
            // LET'S CONNECT
          </span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold font-heading text-white tracking-tight">
            Get In <span className="text-[#22C55E]">Touch</span>
          </h2>
          <p className="text-[#A8A8A8] text-base leading-relaxed font-normal">
            Whether you're looking for a full-stack engineer, intern, freelance collaborator, or just want to discuss AI & web development—feel free to reach out directly!
          </p>
          <div className="w-16 h-1 bg-[#22C55E] mx-auto rounded-full mt-2"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Email Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="charcoal-card charcoal-card-hover p-7 sm:p-8 flex flex-col justify-between space-y-8 max-w-full overflow-hidden"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-[#22C55E]">
                <Mail className="w-7 h-7 stroke-[2]" />
              </div>

              <div className="space-y-1 max-w-full overflow-hidden">
                <span className="text-xs font-mono text-[#22C55E] uppercase font-bold tracking-wider">Primary Email</span>
                
                {/* Email Overflow Fix */}
                <h3 className="text-[clamp(1rem,2.2vw,1.35rem)] font-bold font-heading text-white break-email leading-snug">
                  {personalInfo.email}
                </h3>
                
                <p className="text-xs text-[#A8A8A8] pt-1 font-normal">
                  Direct inbox for inquiries, internships, & freelance work.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#22C55E] hover:bg-[#16A34A] text-[#1E1E1E] font-extrabold font-heading text-sm shadow-mint-glow transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#1E1E1E]" />
                <span>Send Email</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyEmail}
                className="py-3.5 px-4 rounded-2xl bg-[#1E1E1E] hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors flex items-center gap-2"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#22C55E]" />
                    <span className="text-[#22C55E] font-bold font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white" />
                    <span>Copy</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Socials Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="charcoal-card charcoal-card-hover p-7 sm:p-8 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-[#22C55E]">
                <Linkedin className="w-7 h-7 stroke-[2]" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-[#22C55E] uppercase font-bold tracking-wider">Professional Networks</span>
                <h3 className="text-[clamp(1.15rem,2.2vw,1.35rem)] font-bold font-heading text-white">
                  GitHub & LinkedIn
                </h3>
                <p className="text-xs text-[#A8A8A8] pt-1 font-normal">
                  Explore my codebase, competitive programming, and professional experience.
                </p>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#1E1E1E] hover:bg-[#22C55E] text-white hover:text-[#1E1E1E] border border-white/10 text-xs font-bold font-heading transition-all shadow-sm group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#1E1E1E] hover:bg-[#22C55E] text-white hover:text-[#1E1E1E] border border-white/10 text-xs font-bold font-heading transition-all shadow-sm group"
              >
                <Linkedin className="w-4 h-4 text-[#22C55E] group-hover:text-[#1E1E1E]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
