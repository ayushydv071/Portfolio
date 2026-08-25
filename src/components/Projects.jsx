import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, FolderGit2, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('personal');
  const [githubRepos, setGithubRepos] = useState({});

  useEffect(() => {
    const fetchGitHubData = async () => {
      const cacheKey = 'ayush_github_repos_cache';
      const cacheTimeKey = 'ayush_github_repos_cache_time';
      const cachedData = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);

      if (cachedData && cachedTime && Date.now() - parseInt(cachedTime) < 30 * 60 * 1000) {
        try {
          setGithubRepos(JSON.parse(cachedData));
          return;
        } catch (e) {
          console.warn("Cache parse error", e);
        }
      }

      try {
        const response = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?per_page=100`);
        if (response.ok) {
          const repos = await response.json();
          const repoMap = {};
          repos.forEach(repo => {
            repoMap[repo.name.toLowerCase()] = {
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              html_url: repo.html_url,
              description: repo.description,
              language: repo.language,
              updated_at: repo.updated_at
            };
          });
          setGithubRepos(repoMap);
          localStorage.setItem(cacheKey, JSON.stringify(repoMap));
          localStorage.setItem(cacheTimeKey, Date.now().toString());
        }
      } catch (err) {
        console.warn('GitHub API fetch fallback:', err);
      }
    };

    fetchGitHubData();
  }, []);

  const projectsToDisplay = activeTab === 'personal' ? projectsData.personal : projectsData.client;

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#1E1E1E] relative border-t border-white/5">
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
            // MY PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold font-heading text-[#FFFFFF] tracking-tight">
            Featured <span className="text-[#22C55E]">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-[#22C55E] mx-auto rounded-full mt-2"></div>
        </motion.div>

        {/* Tab Toggle: Personal Projects vs Client Projects */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#2A2A2A] p-1.5 rounded-2xl inline-flex items-center gap-2 border border-white/10 shadow-charcoal-card">
            <button
              onClick={() => setActiveTab('personal')}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-bold font-heading text-sm transition-all duration-300 ${
                activeTab === 'personal' ? 'text-[#1E1E1E]' : 'text-[#A8A8A8] hover:text-white'
              }`}
            >
              {activeTab === 'personal' && (
                <motion.span
                  layoutId="projectTabBg"
                  className="absolute inset-0 bg-[#22C55E] rounded-xl shadow-md shadow-mint/25"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <FolderGit2 className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Personal Projects ({projectsData.personal.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('client')}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-bold font-heading text-sm transition-all duration-300 ${
                activeTab === 'client' ? 'text-[#1E1E1E]' : 'text-[#A8A8A8] hover:text-white'
              }`}
            >
              {activeTab === 'client' && (
                <motion.span
                  layoutId="projectTabBg"
                  className="absolute inset-0 bg-[#EC4899] rounded-xl shadow-md shadow-pink/25"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Briefcase className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Client Projects ({projectsData.client.length})</span>
            </button>
          </div>
        </div>

        {/* Compact Projects Grid without Image Banners */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="wait">
            {projectsToDisplay.map((project) => {
              const repoData = project.repoName ? githubRepos[project.repoName.toLowerCase()] : null;
              const stars = repoData?.stars ?? project.fallbackStars ?? 0;
              const forks = repoData?.forks ?? project.fallbackForks ?? 0;
              const githubLink = repoData?.html_url || project.githubUrl;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="charcoal-card charcoal-card-hover p-7 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 group relative"
                >
                  <div className="space-y-4">
                    {/* Card Header Top Row */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                        project.isClientProject
                          ? 'bg-[#1E1E1E] border-pink-500/30 text-[#EC4899] group-hover:border-[#EC4899]'
                          : 'bg-[#1E1E1E] border-emerald-500/30 text-[#22C55E] group-hover:border-[#22C55E]'
                      }`}>
                        <FolderGit2 className="w-6 h-6 stroke-[2]" />
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-bold font-heading border ${
                        project.isClientProject
                          ? 'bg-[#EC4899]/15 text-[#EC4899] border-[#EC4899]/30'
                          : 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30'
                      }`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2 pt-1">
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#22C55E] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#A8A8A8] leading-relaxed font-sans font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Features checklist if present */}
                    {project.features && project.features.length > 0 && (
                      <div className="pt-3 space-y-1.5 border-t border-white/5">
                        <span className="text-[0.7rem] font-mono font-bold uppercase tracking-wider text-[#22C55E] block mb-1">
                          Key Features:
                        </span>
                        <div className="grid grid-cols-1 gap-1">
                          {project.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-xl text-xs font-mono bg-[#1E1E1E] text-[#A8A8A8] font-semibold border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold font-heading">
                    <div className="flex items-center gap-3">
                      {githubLink && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-white hover:text-[#22C55E] transition-colors px-3 py-1.5 rounded-xl bg-[#1E1E1E] border border-white/10 hover:border-[#22C55E]/40"
                        >
                          <Github className="w-4 h-4 text-white" />
                          <span>Repository</span>
                        </a>
                      )}

                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#22C55E] hover:text-[#16A34A] transition-colors px-3 py-1.5 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    {!project.isClientProject ? (
                      <div className="flex items-center gap-2 font-mono text-[#A8A8A8] text-xs">
                        <span className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {stars}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#22C55E]">
                          <GitFork className="w-3.5 h-3.5 text-[#22C55E]" />
                          {forks}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[0.75rem] font-mono text-[#EC4899] font-semibold">
                        Client Project
                      </span>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
