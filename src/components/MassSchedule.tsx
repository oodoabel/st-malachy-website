"use client";
import React from "react";
import { Clock, MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const massTimes = [
  {
    day: "Sunday",
    location: "Bosso Campus",
    time: "7:00 AM",
    note: "Main Mass",
    highlight: true,
  },
  {
    day: "Sunday",
    location: "Gidan Kwano",
    time: "8:00 AM",
    note: "Main Mass",
    highlight: true,
  },
  {
    day: "Tuesday",
    location: "Gidan Kwano",
    time: "6:00 AM",
    note: "Daily Mass",
  },
  {
    day: "Wednesday",
    location: "Bosso Campus",
    time: "6:00 PM",
    note: "Confession @ 5:00PM",
  },
  {
    day: "Thursday",
    location: "Gidan Kwano",
    time: "6:00 PM",
    note: "Confession @ 5:00PM",
  },
];

const MassSchedule = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--secondary-bg)]/50 -z-10"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--primary-red)]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-[var(--primary-red)]"></span>
              <h2 className="text-[var(--primary-red)] font-bold tracking-widest uppercase text-sm">
                Worship With Us
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)]">
              Mass Schedule
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-md text-lg"
          >
            Join us in the celebration of the Holy Eucharist. Experience the joy of community worship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {massTimes.map((mass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${mass.highlight
                  ? "bg-white border-[var(--primary-red)]/20 shadow-xl shadow-[var(--primary-red)]/5"
                  : "bg-white/50 border-[var(--border-color)] hover:bg-white hover:shadow-lg"
                }`}
            >
              {/* Card Decoration */}
              {mass.highlight && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--primary-red)]/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              )}

              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-5 h-5 ${mass.highlight ? "text-[var(--primary-red)]" : "text-gray-400"}`} />
                    <span className={`font-bold text-lg ${mass.highlight ? "text-[var(--primary-red)]" : "text-[var(--text-primary)]"}`}>
                      {mass.day}
                    </span>
                  </div>
                  {mass.highlight && (
                    <span className="px-3 py-1 rounded-full bg-[var(--primary-red)]/10 text-[var(--primary-red)] text-xs font-bold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${mass.highlight ? "bg-[var(--primary-red)] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[var(--primary-red)] group-hover:text-white transition-colors"}`}>
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Time</p>
                      <p className="text-lg font-bold text-[var(--text-primary)]">{mass.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${mass.highlight ? "bg-[var(--primary-red)]/10 text-[var(--primary-red)]" : "bg-gray-100 text-gray-500 group-hover:bg-[var(--primary-red)]/10 group-hover:text-[var(--primary-red)] transition-colors"}`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Location</p>
                      <p className="text-[var(--text-primary)] font-medium">{mass.location}</p>
                    </div>
                  </div>
                </div>

                {mass.note && (
                  <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
                    <p className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-red)]"></span>
                      {mass.note}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MassSchedule;
