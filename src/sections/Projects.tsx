import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { projects } from '../data';


export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-center text-xs font-mono text-cosmic-400 tracking-[0.3em] mb-3">
            PORTFOLIO
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world AI applications built with cutting-edge technology.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.id} delay={i * 0.1}>
              <motion.div
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card h-full flex flex-col overflow-hidden group relative cursor-default"
              >
                {/* Glow on hover */}
                <AnimatePresence>
                  {hovered === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-cosmic-600/8 via-transparent to-nebula-600/8 pointer-events-none rounded-2xl"
                    />
                  )}
                </AnimatePresence>

                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-cosmic-600 via-nebula-500 to-cosmic-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon & title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-600/20 to-nebula-600/20 border border-cosmic-500/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-cosmic-500/50 transition-all">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cosmic-300 transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cosmic-500 to-nebula-500 mt-1" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
