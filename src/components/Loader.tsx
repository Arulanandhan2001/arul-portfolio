import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  'INITIALIZING CORE SYSTEMS...',
  'LOADING NEURAL NETWORKS...',
  'CALIBRATING LLM MODULES...',
  'SYNCING RAG PIPELINES...',
  'ACTIVATING INTELLIGENCE LAYER...',
  'ALL SYSTEMS OPERATIONAL',
];

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    const lineInterval = setInterval(() => {
      if (lineIdx < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[lineIdx]]);
        lineIdx++;
      } else {
        clearInterval(lineInterval);
      }
    }, 420);

    const progInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progInterval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 56);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-void-900 flex flex-col items-center justify-center scanlines"
        >
          {/* Cosmic orb */}
          <div className="relative mb-12">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cosmic-600 to-nebula-600 opacity-20 absolute inset-0 blur-2xl" />
            <div className="w-28 h-28 rounded-full border-2 border-cosmic-500/50 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-cosmic-400/20 animate-ping" />
              <div
                className="absolute w-36 h-36 rounded-full border border-cosmic-500/20"
                style={{ animation: 'orbitRing 4s linear infinite' }}
              />
              <div
                className="absolute w-44 h-44 rounded-full border border-nebula-500/15"
                style={{ animation: 'orbitRing 6s linear infinite reverse' }}
              />
              {/* Core */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-500 to-nebula-500 animate-pulse-slow shadow-[0_0_30px_rgba(100,113,241,0.8)]" />
            </div>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold font-mono gradient-text tracking-widest">
              INITIALIZING INTELLIGENCE...
            </h1>
            <p className="text-xs text-gray-500 mt-2 tracking-[0.3em] font-mono">AI ENGINEER PORTFOLIO v1.0</p>
          </motion.div>

          {/* Boot log */}
          <div className="w-full max-w-md px-6 mb-8 font-mono text-xs space-y-1 min-h-[140px]">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-2 ${i === lines.length - 1 ? 'text-aurora-400' : 'text-gray-500'}`}
              >
                <span className={i === lines.length - 1 ? 'text-aurora-400' : 'text-cosmic-600'}>›</span>
                {line}
                {i === lines.length - 1 && (
                  <span className="inline-block w-2 h-3 bg-aurora-400 cursor-blink" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-md px-6">
            <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
              <span>LOADING AI SYSTEMS</span>
              <span className="text-cosmic-400">{progress}%</span>
            </div>
            <div className="h-1 bg-void-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cosmic-600 to-nebula-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs font-mono text-gray-600 tracking-[0.25em]">
                AI ENGINEER PORTFOLIO — ARUL K A
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
