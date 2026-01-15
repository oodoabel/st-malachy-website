"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, ChevronRight } from "lucide-react";

const societies = [
  {
    name: "Sacred Heart Choir (SHC)",
    image: "/images/shc.png",
    about:
      "Leads worship through choral music during services and special programs.",
    schedule: [
      { day: "Wednesday", time: "5:00 PM - 7:00 PM" },
      { day: "Saturday", time: "4:00 PM - 6:00 PM" },
    ],
  },
  {
    name: "Lectors",
    image: "/images/lectors.png",
    about: "Proclaim the Word of God during Mass and liturgical celebrations.",
    schedule: [{ day: "Thursday", time: "After mass" }],
  },
  {
    name: "Legion of Mary",
    image: "/images/legion.png",
    about: "Engages in spiritual works of mercy and Marian devotions.",
    schedule: [{ day: "Sunday", time: "after mass" }],
  },
  {
    name: "Altar Knights",
    image: "/images/altar.png",
    about: "Assist the priest during Mass and maintain the altar.",
    schedule: [{ day: "Friday", time: "5:30pm" }],
  },
  {
    name: "Divine Mercy Apostolate",
    image: "/images/divinemercy.png",
    about:
      "Promotes devotion to the Divine Mercy through prayers and outreach.",
    schedule: [{ day: "Sunday", time: "2:45 pm" }],
  },
  {
    name: "St Vincent de Paul Society",
    image: "/images/vincent.png",
    about: "Supports the poor and less privileged through acts of charity.",
    schedule: [{ day: "Thursday", time: "After mass" }],
  },
  {
    name: "CCRN",
    image: "/images/ccrn.png",
    about:
      "Catholic Charismatic Renewal ministry focusing on prayer, healing and evangelism.",
    schedule: [{ day: "Sundays", time: "4:00pm" }],
  },
  {
    name: "Talent Theater",
    image: "/images/talent.png",
    about: "Drama unit",
    schedule: [{ day: "days", time: "" }],
  },
  {
    name: "NFCS Brigade",
    image: "gal5.png",
    about:
      "Ensures order and decorum during chaplaincy events with disciplined movement and formation.",
    schedule: [{ day: "", time: "" }],
  },
  {
    name: "Precious Blood of Jesus",
    image: "/images/preciousblood.png",
    about:
      "Promotes devotion to the Most Precious Blood of Jesus through prayers.",
    schedule: [{ day: "Thursdays", time: "after mass" }],
  },
  {
    name: "Purgatorial Society",
    image: "/images/purgatory.png",
    about:
      "Prays for the souls in purgatory and spreads teachings on the afterlife.",
    schedule: [{ day: "Saturday", time: "9:00AM" }],
  },
  {
    name: "Church Wardens",
    image: "/images/wardens.png",
    about:
      "Manages orderliness during church services and assists in logistics.",
    schedule: [{ day: "", time: "" }],
  },
  {
    name: "Cadet",
    image: "/images/cadet.png",
    about:
      "Maintains security and provides support during major chaplaincy events.",
    schedule: [{ day: "", time: "" }],
  },
  {
    name: "Media Team",
    image: "/images",
    about: "Capture and document moments/events in the chaplaincy",
    schedule: [{ day: "", time: "" }],
  },
];

const SocietyCard = ({
  society,
  index,
}: {
  society: (typeof societies)[0];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={society.image}
          alt={society.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "/gal1.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Icon */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Users className="w-6 h-6 text-[var(--primary-red)]" />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary-red)] transition-colors duration-300">
          {society.name}
        </h3>

        {/* About */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {society.about}
        </p>

        {/* Schedule Section */}
        {society.schedule.some((s) => s.day && s.time) && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Calendar className="w-4 h-4 text-[var(--primary-red)]" />
              <span>Meeting Schedule</span>
            </div>

            <AnimatePresence>
              {society.schedule
                .slice(0, isExpanded ? undefined : 1)
                .map((item, i) =>
                  item.day && item.time ? (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2"
                    >
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{item.day}:</span>
                      <span>{item.time}</span>
                    </motion.div>
                  ) : null
                )}
            </AnimatePresence>

            {society.schedule.filter((s) => s.day && s.time).length > 1 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-[var(--primary-red)] hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
              >
                {isExpanded
                  ? "Show less"
                  : `+${society.schedule.length - 1} more`}
                <ChevronRight
                  className={`w-3 h-3 transition-transform ${
                    isExpanded ? "rotate-90" : ""
                  }`}
                />
              </button>
            )}
          </div>
        )}

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary-red)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default function ChaplaincySocieties() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--primary-red)] to-red-700 rounded-full mb-6 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-8 h-8 text-white" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chaplaincy Societies & Departments
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-transparent to-[var(--primary-red)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-[var(--primary-red)] via-red-600 to-[var(--primary-red)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-[var(--primary-red)] to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join one of our vibrant societies and departments dedicated to
            spiritual growth, service, and fellowship within our chaplaincy
            community.
          </p>
        </motion.div>

        {/* Societies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {societies.map((society, index) => (
            <SocietyCard key={society.name} society={society} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[var(--primary-red)]/5 via-red-50 to-[var(--primary-red)]/5 rounded-2xl p-8 border border-[var(--primary-red)]/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Get Involved?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover your calling and make a difference. Join a society that
              resonates with your passion and faith.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
