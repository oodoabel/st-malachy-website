"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUsers, FaHome, FaArrowRight } from "react-icons/fa";

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

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} St Malachy Chaplaincy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

const ForumsPage = () => {
  return (
    <div className="min-h-screen mt-5 bg-gray-50 text-gray-800 px-6  py-16 flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Chaplaincy Forums
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            The Chaplaincy has established forums that align with each level of
            study, creating safe spaces for spiritual development, mentorship,
            and fellowship as students progress through their academic journey.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {forums.map((forum, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <FaUsers className="text-gray-700 text-xl" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    <span className="block text-sm text-gray-500">
                      {forum.level}
                    </span>
                    {forum.name}
                  </h2>
                </div>

                <p className="text-gray-600 text-sm flex-grow">
                  {forum.description}
                </p>

                <Link
                  href={`/about/forums/${forum.slug}`}
                  className="inline-flex items-center mt-4 text-gray-700 hover:text-gray-900 transition-colors duration-200 group/link"
                >
                  <span className="font-medium">Explore forum</span>
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumsPage;
