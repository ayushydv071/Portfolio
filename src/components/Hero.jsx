import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import Lightfall from './Lightfall';

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = ['/profile1.jpg', '/profile2.jpg'];

  useEffect(() => {
    const fullWord = personalInfo.heroWords[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDelay = isDeleting ? 0 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % personalInfo.heroWords.length);
      } else {
        const nextChar = isDeleting
          ? fullWord.substring(0, currentText.length - 1)
          : fullWord.substring(0, currentText.length + 1);
        setCurrentText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex]);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(photoInterval);
  }, []);

  return (
    <section id="home" className="relative py-20 lg:py-24 pt-32 lg:pt-40 overflow-hidden bg-[#1E1E1E]">
      {/* Lightfall Animated Background */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <Lightfall
          colors={['#22C55E', '#4ADE80', '#EC4899', '#86EFAC']}
          backgroundColor="#1E1E1E"
          speed={0.7}
          streakCount={4}
          streakWidth={1.0}
          streakLength={1.2}
          glow={1.1}
          density={0.5}
          twinkle={1}
          zoom={2.5}
          backgroundGlow={0.4}
          opacity={0.8}
          dpr={1}
          mouseInteraction={false}
        />
      </div>

      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle z-0"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left relative z-20"
          >
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2A2A2A] border border-[#22C55E]/30 text-[#22C55E] text-xs sm:text-sm font-bold tracking-wide shadow-charcoal-card">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] -ml-5"></span>
              <span>Available for Internships & Freelance</span>
            </div>

            {/* Headline Hierarchy & Locked Line 1 */}
            <div className="space-y-3 max-w-full overflow-hidden">
              <p className="eyebrow-tag">
                SOFTWARE ENGINEER // {personalInfo.name}
              </p>
              
              <h1 className="font-extrabold font-heading text-[#FFFFFF] tracking-tight leading-[1.18] text-[clamp(2rem,4.5vw,3.5rem)]">
                {/* Line 1: 'I am a [Animated Word]' - Locked together on line 1 without breaking */}
                <span className="inline-flex items-center gap-2.5 max-w-full flex-wrap sm:flex-nowrap whitespace-nowrap">
                  <span>I am a</span>
                  <span className="inline-flex items-center bg-[#EC4899]/15 text-[#EC4899] px-3.5 py-0.5 rounded-2xl border border-[#EC4899]/30 font-extrabold text-[clamp(1.35rem,3.2vw,2.5rem)]">
                    {currentText}
                    <span className="animate-blink text-[#EC4899] font-mono ml-0.5">|</span>
                  </span>
                </span>
                <br />
                {/* Line 2: 'Developer.' */}
                <span className="block mt-1">Developer.</span>
              </h1>
            </div>

            {/* Bio Paragraph */}
            <p className="text-[#A8A8A8] text-base sm:text-lg max-w-2xl leading-relaxed font-sans font-normal">
              {personalInfo.heroBio}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#22C55E] hover:bg-[#16A34A] text-[#1E1E1E] font-extrabold font-heading text-base shadow-mint-glow transition-all"
              >
                <span>Browse Projects</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download="Ayush_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white font-bold font-heading text-base border border-white/15 shadow-charcoal-card transition-all"
              >
                <Download className="w-4 h-4 text-[#22C55E]" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-transparent hover:bg-white/5 text-[#A8A8A8] hover:text-white font-bold font-heading text-base border border-white/10 shadow-charcoal-card transition-all"
              >
                <span>Get In Touch</span>
              </motion.a>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 flex items-center gap-6 text-[#A8A8A8]">
              <span className="text-xs font-mono tracking-wider uppercase text-[#A8A8A8] font-bold">Connect:</span>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#2A2A2A] hover:bg-[#22C55E] text-[#FFFFFF] hover:text-[#1E1E1E] border border-white/10 shadow-charcoal-card transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#2A2A2A] hover:bg-[#22C55E] text-[#FFFFFF] hover:text-[#1E1E1E] border border-white/10 shadow-charcoal-card transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={personalInfo.socials.email}
                  className="p-3 rounded-2xl bg-[#2A2A2A] hover:bg-[#22C55E] text-[#FFFFFF] hover:text-[#1E1E1E] border border-white/10 shadow-charcoal-card transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Profile Photo Frame with Option A Animated Conic Gradient Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative z-10"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Option A — Animated Conic Gradient Ring (Mint & Pink 8s continuous spin) */}
              <div className="profile-ring-option-a"></div>

              {/* Photo Frame Container (Photo stays completely still inside) */}
              <div className="relative z-10 w-full h-full rounded-full p-2.5 bg-[#2A2A2A] border border-white/10 shadow-charcoal-card overflow-hidden flex items-center justify-center">
                {photos.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Ayush Yadav Profile ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-1000 ease-in-out ${
                      index === photoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Tech Badges (z-20 so they stay above the ring) */}
              <div className="absolute -bottom-2 -left-2 z-20 bg-[#2A2A2A]/95 border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-charcoal-card backdrop-blur-md animate-float-slow">
                <div className="p-1.5 rounded-xl bg-[#22C55E]/10 text-[#22C55E]">
                  <Code className="w-4 h-4 text-[#22C55E]" />
                </div>
                <span className="text-xs font-mono text-[#FFFFFF] font-bold">MERN & C++</span>
              </div>

              <div className="absolute -top-2 -right-2 z-20 bg-[#2A2A2A]/95 border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-charcoal-card backdrop-blur-md animate-float-slow [animation-delay:2.5s]">
                <div className="p-1.5 rounded-xl bg-[#EC4899]/10 text-[#EC4899]">
                  <Sparkles className="w-4 h-4 text-[#EC4899]" />
                </div>
                <span className="text-xs font-mono text-[#FFFFFF] font-bold">Data Science Student</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
