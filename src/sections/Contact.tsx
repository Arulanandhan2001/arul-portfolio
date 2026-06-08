import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { personalInfo } from '../data';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiExternalLink } from 'react-icons/fi';

const CONTACTS = [
  {
    label: 'Email',
    value: 'arul_anandhan@yahoo.com',
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
    color: 'from-red-600/20 to-orange-600/20',
    border: 'border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    label: 'Phone',
    value: '+91 9385396051',
    href: `tel:${personalInfo.phone}`,
    icon: FiPhone,
    color: 'from-green-600/20 to-emerald-600/20',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    label: 'GitHub',
    value: 'Arulanandhan2001',
    href: personalInfo.github,
    icon: FiGithub,
    color: 'from-gray-600/20 to-gray-700/20',
    border: 'border-gray-500/20',
    iconColor: 'text-gray-300',
  },
  {
    label: 'LinkedIn',
    value: 'arulanandhan2001',
    href: personalInfo.linkedin,
    icon: FiLinkedin,
    color: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-center text-xs font-mono text-cosmic-400 tracking-[0.3em] mb-3">
            GET IN TOUCH
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="section-subtitle">
            Open to AI engineering roles and collaborative projects. Let's build something intelligent together.
          </p>
        </SectionReveal>

        <div className="max-w-3xl mx-auto">
          {/* Contact info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {CONTACTS.map((contact, i) => (
              <SectionReveal key={contact.label} delay={i * 0.1}>
                <motion.a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={`flex items-center gap-4 p-5 glass-card bg-gradient-to-br ${contact.color} border ${contact.border} hover:border-opacity-60 transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${contact.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <contact.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 font-mono tracking-wide mb-0.5">{contact.label}</p>
                    <p className="text-sm font-semibold text-white truncate">{contact.value}</p>
                  </div>
                  <FiExternalLink className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors flex-shrink-0" size={14} />
                </motion.a>
              </SectionReveal>
            ))}
          </div>

          {/* CTA box */}
          <SectionReveal delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card p-8 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-600/8 via-transparent to-nebula-600/8 pointer-events-none" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cosmic-600 to-nebula-600 flex items-center justify-center shadow-[0_0_30px_rgba(100,113,241,0.4)]">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Let's Engineer Intelligence Together</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
                  I'm actively looking for AI engineering opportunities. If you're building something impactful, let's connect.
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="cosmic-btn inline-flex items-center gap-2"
                >
                  <FiMail size={16} />
                  Send Message
                </a>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
