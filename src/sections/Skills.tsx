import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { skills } from '../data';

const CATEGORIES = ['All', 'AI/ML', 'Language', 'Framework', 'Data', 'DevOps', 'Analytics', 'Productivity'];

const CATEGORY_COLORS: Record<string, string> = {
  'AI/ML': 'from-cosmic-600 to-nebula-600',
  Language: 'from-blue-600 to-cyan-600',
  Framework: 'from-orange-600 to-amber-600',
  Data: 'from-green-600 to-emerald-600',
  DevOps: 'from-red-600 to-rose-600',
  Analytics: 'from-purple-600 to-pink-600',
  Productivity: 'from-teal-600 to-cyan-600',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-center text-xs font-mono text-cosmic-400 tracking-[0.3em] mb-3">
            CAPABILITIES
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive arsenal of AI/ML technologies, frameworks, and tools.
          </p>
        </SectionReveal>

        {/* Category filter */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white shadow-[0_0_15px_rgba(100,113,241,0.4)]'
                    : 'glass-card text-gray-400 hover:text-white hover:border-cosmic-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card-hover p-4 text-center group cursor-default"
              >
                <div
                  className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${CATEGORY_COLORS[skill.category] || 'from-gray-600 to-gray-700'} flex items-center justify-center text-xs font-bold text-white opacity-80 group-hover:opacity-100 transition-opacity`}
                >
                  {skill.name[0]}
                </div>
                <p className="text-xs text-gray-300 group-hover:text-white transition-colors leading-tight font-medium">
                  {skill.name}
                </p>
                <p className="text-[10px] text-gray-600 mt-1 font-mono">{skill.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats row */}
        <SectionReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { label: 'Skills & Tools', value: '27+', color: 'from-cosmic-500 to-cosmic-600' },
              { label: 'AI/ML Technologies', value: '12+', color: 'from-nebula-500 to-nebula-600' },
              { label: 'Projects Worked', value: '5+', color: 'from-aurora-500 to-aurora-400' },
              { label: 'Experience', value: '1yr+', color: 'from-blue-500 to-cyan-500' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-6 text-center"
              >
                <p className={`text-3xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 font-mono tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
