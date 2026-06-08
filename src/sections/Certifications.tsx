import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { certifications, education } from '../data';
import { FiAward, FiBook, FiStar } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-center text-xs font-mono text-cosmic-400 tracking-[0.3em] mb-3">
            CREDENTIALS
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Certifications & Education</span>
          </h2>
          <p className="section-subtitle">
            Academic foundation and professional certifications.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Certifications */}
          <SectionReveal delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <FiAward className="text-cosmic-400" size={20} />
                <h3 className="text-lg font-semibold text-white">Certifications</h3>
              </div>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass-card-hover p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-600/20 to-nebula-600/20 border border-cosmic-500/20 flex items-center justify-center flex-shrink-0">
                      <FiAward className="text-cosmic-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 leading-tight">{cert.title}</h4>
                      <p className="text-sm text-cosmic-300 font-mono">{cert.issuer}</p>
                      <span className="inline-block mt-2 px-2.5 py-1 bg-aurora-500/15 border border-aurora-500/20 rounded-full text-xs text-aurora-400 font-mono">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                  {/* Achievement stars */}
                  <div className="flex gap-1 mt-3 ml-16">
                    {[...Array(5)].map((_, j) => (
                      <FiStar key={j} className="text-amber-400" size={12} fill="currentColor" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Education */}
          <SectionReveal delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <FiBook className="text-nebula-400" size={20} />
                <h3 className="text-lg font-semibold text-white">Education</h3>
              </div>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass-card-hover p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nebula-600/20 to-cosmic-600/20 border border-nebula-500/20 flex items-center justify-center text-xl flex-shrink-0">
                      🎓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 leading-tight">{edu.institution}</h4>
                      <p className="text-sm text-cosmic-300">{edu.degree}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{edu.field}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex-1 h-1.5 bg-void-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="h-full bg-gradient-to-r from-cosmic-500 to-nebula-500 rounded-full"
                          />
                        </div>
                        <span className="text-sm font-bold text-cosmic-300 font-mono whitespace-nowrap">
                          CGPA {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
