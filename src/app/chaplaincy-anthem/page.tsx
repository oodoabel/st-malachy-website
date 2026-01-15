"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Play, Pause, Volume2 } from "lucide-react";

const NFCSAnthem = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stanzas = [
    `NFCS Nigeria Federation of Catholic Students
is living the Faith.
We are the hope of our Faith to blossom
The dreams of the Church, hail NFCS.
With the strength of our Youth,
We will move our faith forward.
And defend it whatever be the case.`,
    `Let's spread the good news of the Kingdom
To all people on earth, through NFCS,
And join hands with groups of like minds.
To evangelize the world, through NFCS
Let the message be brought to every living soul.
By the life we live as students`,
    `We say no to corruption, and greed,
Sectionalism and violence in NFCS.
And chant down the agent of Bribery,
Ethnicism and war in NFCS.
With Jesus, Prince of Love and Peace,
We pitch our tent.
Yes the enemies will forever be shamed.`,
  ];

  const chorus = `When the roll is called
On the last day
A joyful song we'll raise
Hail NFCS!`;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any },
    },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-red)]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/anthem.mp3" loop />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--primary-red)] to-red-700 rounded-full mb-6 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Music className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-4 tracking-tight">
            NFCS Anthem
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-transparent to-[var(--primary-red)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-[var(--primary-red)] via-red-600 to-[var(--primary-red)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-[var(--primary-red)] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            The official anthem of the Nigeria Federation of Catholic Students
          </p>

          {/* Play Button with Visualizer */}
          <motion.button
            onClick={togglePlay}
            className="group relative px-10 py-4 bg-gradient-to-r from-[var(--primary-red)] to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full font-semibold flex items-center mx-auto transition-all duration-300 shadow-2xl hover:shadow-[var(--primary-red)]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  <Pause className="w-6 h-6 mr-2 fill-white" />
                  <span>Pause Anthem</span>
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  <Play className="w-6 h-6 mr-2 fill-white" />
                  <span>Play Anthem</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animated Ring */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>

          {/* Audio Visualizer Bars */}
          {isPlaying && (
            <motion.div
              className="flex items-center justify-center gap-1 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[var(--primary-red)] to-red-400 rounded-full"
                  animate={{
                    height: [8, 24, 8],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Anthem Content */}
        <motion.div className="space-y-6" variants={itemVariants}>
          {stanzas.map((stanza, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stanza */}
              <div className="p-8 md:p-10">
                <div className="flex items-start max-w-5xl mx-auto">
                  <motion.span
                    className="text-4xl font-serif text-gray-400 mr-6 mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.8, type: "spring" }}
                  >
                    {index + 1}.
                  </motion.span>
                  <p className="text-white/90 whitespace-pre-line leading-relaxed text-lg font-light">
                    {stanza}
                  </p>
                </div>
              </div>

              {/* Chorus after each stanza */}
              <div className="p-8 md:p-10 bg-gradient-to-r from-[var(--primary-red)]/20 to-gray-800/30 border-t border-white/10">
                <div className="flex items-start max-w-5xl mx-auto">
                  <motion.div
                    className="mr-6 flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-red)] to-red-700 flex items-center justify-center">
                      <Volume2 className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-3 flex items-center gap-2">
                      Chorus
                      <motion.span
                        className="text-xs bg-[var(--primary-red)]/30 px-2 py-1 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Repeat
                      </motion.span>
                    </h3>
                    <p className="text-gray-300 italic whitespace-pre-line leading-relaxed text-lg">
                      {chorus}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <div className="inline-flex items-center gap-8 mb-6">
            <motion.img
              src="/futminna-logo.png"
              alt="FUTMinna Logo"
              className="h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <motion.div
              className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--primary-red)] to-transparent"
              initial={{ height: 0 }}
              animate={{ height: 48 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
            <motion.img
              src="/nfcs-logo.png"
              alt="NFCS Logo"
              className="h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
          </div>
          {/* <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} St Malachy Catholic Chaplaincy
          </p> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NFCSAnthem;
