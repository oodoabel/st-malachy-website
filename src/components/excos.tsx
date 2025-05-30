"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Executive = {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
};

const executives: Executive[] = [
  {
    id: 1,
    name: "Ella Solomon Echobu",
    position: "President",
    imageUrl: "/presido.png",
  },
  {
    id: 2,
    name: "Arome Perpetual Juliet",
    position: "Vice president GK",
    imageUrl: "/vp-gk.png",
  },
  {
    id: 3,
    name: "Otabo",
    position: "Vice president Bosso",
    imageUrl: "/vp-bosso.png",
  },
];

const ExecutiveCard = ({ executive }: { executive: Executive }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      {/* Executives Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {executives.map((executive) => (
          <motion.div
            key={executive.id}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Amber accent bar */}
            <div className="absolute top-0 left-0 h-full w-1.5 bg-gray-500" />

            <div className="p-6 flex flex-col h-full">
              {/* Profile Image or Placeholder */}
              <div className="mb-4 relative">
                {executive.imageUrl ? (
                  <motion.img
                    src={executive.imageUrl}
                    alt={executive.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto flex items-center justify-center border-4 border-gray-200 group-hover:border-gray-300 transition-colors duration-300">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Executive Details */}
              <div className="text-center flex-grow">
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-1 hover:text-gray-500"
                  whileHover={{ color: "" }} // amber-700
                >
                  {executive.name}
                </motion.h3>
                <p className="text-gray-600 font-medium mb-2">
                  {executive.position}
                </p>
              </div>

              {/* Contact Button */}
              {/* <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 w-full py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Contact
                      </motion.button> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const ExecutiveTeam = () => {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Our Leadership Team
            </h2>
          </div>
          <Link
            href="/executives"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All Executives
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col  gap-6 lg:flex lg:flex-row justify-center">
          {executives.map((executive) => (
            <ExecutiveCard key={executive.id} executive={executive} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
