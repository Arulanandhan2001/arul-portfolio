import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data';

const CURSOR = '|';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const role = personalInfo.typingRoles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < role.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % personalInfo.typingRoles.length);
    }

    setDisplayed(role.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cosmic-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-600/15 border border-cosmic-500/25 text-cosmic-300 text-xs font-mono tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-aurora-400 animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
            >
              <span className="text-white">Arul </span>
              <span className="gradient-text text-shadow-glow">K A</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1 justify-center lg:justify-start mb-6 h-10"
            >
              <span className="text-xl md:text-2xl font-semibold text-cosmic-300 font-mono">
                {displayed}
              </span>
              <span className="text-xl md:text-2xl font-semibold text-nebula-400 cursor-blink">
                {CURSOR}
              </span>
            </motion.div>

            {/* Philosophy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-gray-400 italic mb-8 font-mono tracking-wide"
            >
              "{personalInfo.philosophy}"
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-8"
            >
              <a href="#projects" className="cosmic-btn flex items-center gap-2">
                View Projects
              </a>
              <a
                href={personalInfo.resumePath}
                download
                className="outline-btn flex items-center gap-2"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                { icon: FiPhone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-cosmic-500/50 hover:shadow-[0_0_12px_rgba(100,113,241,0.3)] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Orbit rings */}
              <div
                className="absolute inset-0 m-auto w-full h-full rounded-full border border-cosmic-500/20"
                style={{ animation: 'orbitRing 8s linear infinite' }}
              />
              <div
                className="absolute inset-[-20px] rounded-full border border-nebula-500/15"
                style={{ animation: 'orbitRing 12s linear infinite reverse' }}
              />
              <div
                className="absolute inset-[-40px] rounded-full border border-cosmic-600/10"
                style={{ animation: 'orbitRing 16s linear infinite' }}
              />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-600/30 to-nebula-600/20 blur-2xl" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-cosmic-500 via-nebula-500 to-cosmic-600 pulse-ring">
                <div className="w-full h-full rounded-full overflow-hidden bg-void-800 border-2 border-void-900">
                  <img
                    src={personalInfo.profileImage}
                    alt="Arul K A"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://ui-avatars.com/api/?name=Arul+KA&background=6471f1&color=fff&size=400&bold=true';
                    }}
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 px-3 py-2 glass-card border border-cosmic-500/40 rounded-xl text-xs font-mono text-cosmic-300"
              >
                🧠 AI Engineer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16 md:mt-20"
        >
          <span className="text-xs text-gray-600 font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-600"
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
