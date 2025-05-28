"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUsers, FaHome } from "react-icons/fa";

const forums = [
  {
    level: "100 Level",
    name: "Triumphant Family",
    slug: "triumphant-family",
    description:
      "A welcoming space for new students to build friendships, get guidance, and grow in faith.",
  },
  {
    level: "200 Level",
    name: "Golden Phoenix Family",
    slug: "golden-phoenix-family",
    description:
      "Focused on helping students strengthen their identity in Christ and academic journey.",
  },
  {
    level: "300 Level",
    name: "Luminous Family",
    slug: "luminous-family",
    description:
      "Grooming leaders and encouraging responsibility through service and spiritual maturity.",
  },
  {
    level: "400 Level",
    name: "Excellers in Christ Family",
    slug: "excellers-in-christ-family",
    description:
      "Deepening Catholic faith, spiritual discernment, and preparing for post-campus life.",
  },
  {
    level: "500 Level",
    name: "Exquisite Family",
    slug: "exquisite-family",
    description:
      "Support and encouragement as students prepare to transition into the next phase of life.",
  },
  {
    level: "Alumni",
    name: "Legacy Family",
    slug: "legacy-family",
    description:
      "A dedicated forum for alumni to stay connected, mentor current students, and continue their faith journey.",
  },
];

// Footer component with home button
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Chaplaincy Forums. All rights
          reserved.
        </p>
        <Link
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-300"
          href="/"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </footer>
  );
};

const ForumsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 text-gray-200 px-6 py-16 flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-100">
          Chaplaincy Forums
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-400">
          The Chaplaincy has established forums that align with each level of
          study, creating safe spaces for spiritual development, mentorship, and
          fellowship as students progress through their academic journey.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {forums.map((forum, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 15px 30px rgba(100, 116, 139, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-700 rounded-3xl border border-gray-600 shadow-md p-6 space-y-4 cursor-pointer transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3">
                <FaUsers className="text-indigo-400 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-100">
                  {forum.level} – {forum.name}
                </h2>
              </div>
              <p className="text-gray-300 text-sm">{forum.description}</p>
              <Link href={`/about/forums/${forum.slug}`}>
                <span className="inline-block mt-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200">
                  Go to {forum.name} Page &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default ForumsPage;
