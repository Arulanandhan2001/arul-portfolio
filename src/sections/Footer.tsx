import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data';
import { RiBrainLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-950/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cosmic-600/10 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Philosophy statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-600 to-nebula-600 flex items-center justify-center shadow-[0_0_20px_rgba(100,113,241,0.5)]">
              <RiBrainLine size={20} className="text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black gradient-text text-shadow-glow tracking-wide mb-2">
            Engineering Intelligence
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white/80 tracking-wide">
            Through Intelligence
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cosmic-600/30 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name & role */}
          <div className="text-center md:text-left">
            <p className="font-bold text-white font-mono">ARUL K A</p>
            <p className="text-xs text-gray-500 tracking-widest font-mono">AI ENGINEER</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={label}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-cosmic-500/50 hover:shadow-[0_0_10px_rgba(100,113,241,0.4)] transition-all"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 font-mono text-center md:text-right">
            © 2025 Arul K A. Built with React + TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
