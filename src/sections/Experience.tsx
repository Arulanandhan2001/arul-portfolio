import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { experience } from '../data';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-center text-xs font-mono text-cosmic-400 tracking-[0.3em] mb-3">
            WORK HISTORY
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Building intelligent AI systems in production environments.
          </p>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-500/50 via-nebula-500/30 to-transparent md:-translate-x-px" />

          {experience.map((exp, i) => (
            <SectionReveal key={i} delay={0.1 * i}>
              <div className="relative flex flex-col md:flex-row md:justify-end gap-6 mb-10 pl-12 md:pl-0">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-500 to-nebula-500 flex items-center justify-center shadow-[0_0_15px_rgba(100,113,241,0.6)] z-10">
                  <FiBriefcase size={14} className="text-white" />
                </div>

                {/* Card - right side */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="md:w-5/12 glass-card p-6 hover:border-cosmic-500/30 transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-aurora-500/15 border border-aurora-500/25 rounded-full text-aurora-400 text-xs font-mono mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-aurora-400 animate-pulse" />
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cosmic-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1 font-semibold text-cosmic-300">
                        <FiBriefcase size={13} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-cosmic-600/30 to-transparent mb-4" />

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed"
                      >
                        <FiCheckCircle className="text-cosmic-400 mt-0.5 flex-shrink-0" size={14} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Left spacer label */}
                <div className="hidden md:flex items-start justify-end w-5/12 pr-8 pt-6">
                  <div className="text-right">
                    <p className="text-sm font-mono text-gray-500 tracking-wide">
                      <FiCalendar className="inline mr-1.5 mb-0.5" size={13} />
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
