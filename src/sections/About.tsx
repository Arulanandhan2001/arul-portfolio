import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { personalInfo, journeySteps } from '../data';
import { FiArrowDown } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-center text-xs font-mono text-cosmic-400 tracking-[0.3em] mb-3">
            WHO AM I
          </p>
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            Transforming complex challenges into practical AI-driven solutions.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <SectionReveal delay={0.1}>
            <div className="space-y-5">
              {personalInfo.about.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  className="text-gray-300 leading-relaxed text-base md:text-lg"
                >
                  {para}
                </motion.p>
              ))}


            </div>
          </SectionReveal>

          {/* Journey timeline */}
          <SectionReveal delay={0.2}>
            <div className="glass-card p-8">
              <h3 className="text-sm font-mono text-gray-400 tracking-widest mb-8 text-center">
                MY JOURNEY
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-600/50 via-nebula-600/50 to-transparent" />

                <div className="space-y-6">
                  {journeySteps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.1 }}
                      className="flex items-center gap-4 relative"
                    >
                      {/* Node */}
                      <div
                        className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{step.label}</p>
                        {i < journeySteps.length - 1 && (
                          <div className="flex items-center gap-1 mt-1 text-gray-600">
                            <FiArrowDown size={12} />
                            <span className="text-xs">evolved to</span>
                          </div>
                        )}
                      </div>
                      {i === journeySteps.length - 1 && (
                        <span className="ml-auto px-2 py-1 bg-aurora-500/20 border border-aurora-500/30 rounded-full text-xs text-aurora-400 font-mono">
                          CURRENT
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
