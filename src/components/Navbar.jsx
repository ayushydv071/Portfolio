import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));

          const sections = navLinks.map(link => link.href.substring(1));
          const scrollPosition = window.scrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              const currentSec = sections[i];
              setActiveSection(prev => (prev !== currentSec ? currentSec : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl font-bold font-heading text-white tracking-tight group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#22C55E] flex items-center justify-center text-[#1E1E1E] shadow-md shadow-mint/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-white">
              Ayush <span className="text-[#22C55E]">Yadav</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#22C55E] ml-1.5 animate-pulse"></span>
            </span>
          </a>

          {/* Desktop Navigation Links — Solid #3A3A3A Pill Shape (Fix 1) */}
          <nav className="hidden md:flex items-center gap-1 bg-[#3A3A3A] p-1.5 rounded-full border border-white/10 shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#1E1E1E]'
                      : 'text-[#A8A8A8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#22C55E] rounded-full shadow-md shadow-mint/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume (Fix 1: Solid #22C55E Mint background with #1E1E1E dark text) */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href={personalInfo.resumeUrl}
              download="Ayush_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-bold font-heading rounded-2xl bg-[#22C55E] hover:bg-[#16A34A] text-[#1E1E1E] shadow-mint-glow transition-all duration-300"
            >
              <Download className="w-4 h-4 text-[#1E1E1E] stroke-[2.5]" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Ayush_Yadav_Resume.pdf"
              aria-label="Download Resume"
              className="p-2.5 rounded-2xl bg-[#22C55E] text-[#1E1E1E]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-[#3A3A3A] border border-white/10 text-white hover:text-[#22C55E] focus:outline-none shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#22C55E]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2A2A2A] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-bold font-heading text-base transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-[#22C55E] text-[#1E1E1E]'
                    : 'text-[#A8A8A8] hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="Ayush_Yadav_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-2xl bg-[#22C55E] text-[#1E1E1E] font-bold font-heading text-base shadow-md"
            >
              <Download className="w-5 h-5 text-[#1E1E1E]" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
