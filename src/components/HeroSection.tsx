"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Navbar from "./navBar";

const images = [
  "/gal1.png",
  "/gal2.png",
  "/gal3.png",
  "/gal4.png",
  "/gal5.png",
  "/gal6.png",
];

const NavbarHero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen w-full bg-[var(--primary-navy)] overflow-hidden pt-20">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>

        {/* Background Editorial Typography */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none z-0 select-none">
          <h1 className="text-[15vw] leading-none font-black text-outline opacity-10 whitespace-nowrap animate-[shimmer_60s_linear_infinite]">
            FAITH • SERVICE • COMMUNITY • FAITH • SERVICE • COMMUNITY
          </h1>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-between min-h-[calc(100vh-80px)]">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow py-12">

            {/* Left Column: Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center relative">
              {/* Decorative Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100px" }}
                transition={{ duration: 1, ease: "circOut" }}
                className="absolute -left-8 top-0 w-[2px] bg-[var(--primary-red)] hidden lg:block"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-12 bg-[var(--primary-red)]"></span>
                  <span className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm">Est. 2005</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight mb-8">
                  One Family <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    Working for
                  </span> <br />
                  <span className="text-[var(--primary-red)] italic font-serif">Christ.</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-10 border-l border-white/10 pl-6">
                  The Nigerian Federation of Catholic Students (NFCS) at FUTMinna is a vibrant community dedicated to spiritual growth, academic excellence, and selfless service.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link href="/register">
                    <button className="group relative px-8 py-4 bg-[var(--primary-red)] text-white font-bold text-lg tracking-wide overflow-hidden transition-transform hover:scale-105">
                      <span className="relative z-10 flex items-center gap-3">
                        Join the Family <ArrowRight className="w-5 h-5" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </button>
                  </Link>

                  <Link href="/about">
                    <button className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                      <Play className="w-4 h-4 fill-current" /> Watch Video
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Floating Visuals (5 cols) */}
            <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
              {/* Abstract Background Shapes */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-red)]/20 to-transparent rounded-full blur-[100px] animate-pulse"></div>

              {/* Floating Image Deck */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 50, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -50, rotateY: 10 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="absolute inset-0 z-20"
                  >
                    <div className="relative w-full h-full rounded-none overflow-hidden shadow-2xl border-4 border-white/5">
                      <img
                        src={images[currentImage]}
                        alt="Chaplaincy Life"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                      />
                      {/* Image Overlay Info */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
                        <p className="text-white/80 text-sm uppercase tracking-widest mb-1">Featured Gallery</p>
                        <p className="text-white text-xl font-bold">Community Moments {currentImage + 1}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Frame Behind */}
                <div className="absolute top-8 -right-8 w-full h-full border-2 border-[var(--primary-red)]/30 z-10 hidden md:block"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Ticker */}
          <div className="w-full border-t border-white/10 py-6 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm font-medium uppercase tracking-widest">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-white">500+</span>
                  <span className="text-xs">Active<br />Members</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-white">14</span>
                  <span className="text-xs">Active<br />Societies</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-white">Weekly</span>
                  <span className="text-xs">Mass &<br />Events</span>
                </div>
              </div>

              <Link href="/societies" className="flex items-center gap-2 hover:text-[var(--primary-red)] transition-colors group">
                Explore All Societies <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarHero;
