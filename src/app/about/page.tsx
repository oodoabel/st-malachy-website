"use client";

import MassSchedule from "@/components/MassSchedule";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaChurch, FaUserFriends, FaHandsHelping } from "react-icons/fa";

const cardData = [
  {
    icon: <FaChurch className="text-2xl text-gray-700" />,
    title: "Our Mission",
    description:
      "To nurture spiritual growth through sacraments, formation programs, and service opportunities rooted in Catholic tradition.",
    link: "/chaplaincy-anthem",
    linkText: "View NFCS anthem",
  },
  {
    icon: <FaUserFriends className="text-2xl text-gray-700" />,
    title: "Our Community",
    description:
      "A diverse family of Catholic students united in faith, fellowship, and commitment to academic excellence and spiritual growth.",
    link: "/about/forums",
    linkText: "Explore forums",
  },
  {
    icon: <FaHandsHelping className="text-2xl text-gray-700" />,
    title: "Our Impact",
    description:
      "Transforming campus life through outreach programs, leadership development, and service initiatives that make a lasting difference.",
    link: "/events",
    linkText: "View events",
  },
];

const InfoCard = ({
  icon,
  title,
  description,
  link,
  linkText,
}: (typeof cardData)[0]) => (
  <motion.div
    whileHover={{
      y: -5,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    }}
    className="bg-white rounded-xl p-8 shadow-md border border-gray-200 transition-shadow duration-300"
  >
    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      href={link}
      className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors"
    >
      {linkText}
      <ArrowRight className="w-4 h-4 ml-1" />
    </Link>
  </motion.div>
);

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    <div className="min-h-screen bg-gradient-to-br mt-10 from-gray-100 to-gray-200 text-gray-800 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.header className="text-center" variants={itemVariants as any}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Our Chaplaincy
          </h1>
          <div className="w-24 h-1 bg-gray-400 mx-auto my-6"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the vibrant Catholic community at the Federal University of
            Technology, Minna - where faith, knowledge, and service converge.
          </p>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.section
            className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Announcements
            </h2>
            <p className="text-gray-600">
              Announcements will be displayed here.
            </p>
          </motion.section>
          <motion.section
            className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
            variants={itemVariants}
          >
            <MassSchedule />
          </motion.section>
        </div>

        {/* Mission, Community, Impact */}
        <motion.section
          className="grid md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          {cardData.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="bg-gray-800 rounded-xl py-8 px-6 sm:px-8 text-gray-300"
          variants={itemVariants}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Contact Us</h3>
              <p className="mb-2">St Malachy's Chaplaincy</p>
              <p className="mb-2">Federal University of Technology</p>
              <p>Minna, Niger State</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="hover:text-white transition-colors"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.4c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.73.33-1.52.55-2.35.65.84-.5 1.49-1.3 1.8-2.23-.79.47-1.67.81-2.6 1-.75-.8-1.82-1.3-3-1.3-2.28 0-4.13 1.85-4.13 4.13 0 .32.04.63.11.93-3.44-.17-6.48-1.82-8.52-4.33-.35.6-.56 1.3-.56 2.05 0 1.43.73 2.69 1.83 3.43-.67-.02-1.3-.21-1.86-.51v.05c0 2 1.42 3.67 3.31 4.05-.35.1-.72.15-1.1.15-.27 0-.53-.03-.79-.07.53 1.65 2.07 2.85 3.9 2.88-1.43 1.13-3.23 1.8-5.19 1.8-.34 0-.67-.02-1-.06 1.82 1.17 4 1.85 6.33 1.85" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.16c2.67 0 2.99.01 4.04.05 2.64.12 3.79 1.27 3.91 3.91.04 1.05.05 1.37.05 4.04s-.01 2.99-.05 4.04c-.12 2.64-1.27 3.79-3.91 3.91-1.05.04-1.37.05-4.04.05s-2.99-.01-4.04-.05c-2.64-.12-3.79-1.27-3.91-3.91-.04-1.05-.05-1.37-.05-4.04s.01-2.99.05-4.04c.12-2.64 1.27-3.79 3.91-3.91 1.05-.04 1.37-.05 4.04-.05zm0-1.6c-2.72 0-3.07.01-4.13.06-3.61.16-5.2 1.75-5.36 5.36-.05 1.06-.06 1.41-.06 4.13s.01 3.07.06 4.13c.16 3.61 1.75 5.2 5.36 5.36 1.06.05 1.41.06 4.13.06s3.07-.01 4.13-.06c3.61-.16 5.2-1.75 5.36-5.36.05-1.06.06-1.41.06-4.13s-.01-3.07-.06-4.13c-.16-3.61-1.75-5.2-5.36-5.36-1.06-.05-1.41-.06-4.13-.06z" />
                    <path d="M12 6.16a5.84 5.84 0 110 11.68 5.84 5.84 0 010-11.68zm0 1.6a4.24 4.24 0 100 8.48 4.24 4.24 0 000-8.48z" />
                    <circle cx="16.8" cy="7.2" r="1.28" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </div >
  );
};

export default AboutPage;
