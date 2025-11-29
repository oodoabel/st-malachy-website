"use client";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

// Import slick-carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./navBar";

const images = [
  "/gal1.png",
  "/gal2.png",
  "/gal3.png",
  "/gal4.png",
  "/gal5.png",
  "/gal6.png",
  "/gal7.png",
  "/gal8.png",
  "/gal9.png",
];

const NavbarHero: React.FC = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  } as any;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[var(--accent-cream)]">
        {/* Background Image Slider with Overlay */}
        <div className="absolute inset-0 z-0">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx} className="relative h-screen">
                <img
                  src={src}
                  alt={`St. Malachy Chaplaincy ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 gradient-overlay" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              {/* Chaplaincy Badge */}
              <motion.div
                variants={itemVariants}
                className="mb-6 inline-flex items-center gap-2 rounded-full glass-card-dark px-6 py-2 text-sm font-medium text-[var(--primary-gold)] shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary-gold)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary-gold)]"></span>
                </span>
                NFCS FUTMinna
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Welcome to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[var(--primary-gold)] to-yellow-300 bg-clip-text text-transparent">
                    St. Malachy's
                  </span>
                  <span className="absolute -bottom-2 left-0 h-3 w-full bg-[var(--primary-gold)] opacity-20 blur-sm"></span>
                </span>
                <br />
                Chaplaincy
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="mb-8 max-w-2xl text-lg font-medium text-gray-100 sm:text-xl md:text-2xl"
              >
                One Family Working for Christ
              </motion.p>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mb-12 max-w-3xl text-base text-gray-200 sm:text-lg"
              >
                Join a vibrant community of Catholic students dedicated to
                spiritual growth, fellowship, and service at the Federal
                University of Technology Minna.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
              >
                <Link href="/register">
                  <button className="group relative overflow-hidden rounded-lg bg-[var(--primary-gold)] px-8 py-4 font-semibold text-[var(--dark-navy)] shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] btn-premium">
                    <span className="relative z-10 flex items-center gap-2">
                      Register as an NFCSer
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>

                <Link href="/about/forums">
                  <button className="group relative overflow-hidden rounded-lg border-2 border-[var(--primary-gold)] bg-transparent px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--primary-gold)] hover:text-[var(--dark-navy)] btn-premium">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Our Forums
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                variants={itemVariants}
                className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8"
              >
                {[
                  { label: "Active Members", value: "500+" },
                  { label: "Societies", value: "14" },
                  { label: "Weekly Events", value: "10+" },
                  { label: "Years Active", value: "20+" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="glass-card-dark rounded-xl px-6 py-4 text-center"
                  >
                    <div className="text-3xl font-bold text-[var(--primary-gold)] sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-300 sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default NavbarHero;
