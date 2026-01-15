"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Image as ImageIcon } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  location: string;
}

const EventPage = () => {
  // All events data
  const events: Event[] = [
    {
      id: 1,
      title: "Revival 2024",
      date: "October 15, 2023",
      description:
        "Join us for a morning of fellowship and prayer with community members.",
      imageUrl: "events/thy-kingdom-come.png",
      location: "Convocation Square, GK Campus",
    },
    {
      id: 2,
      title: "Revival 2025",
      date: "Second Semester",
      description:
        "Weekend retreat focusing on mindfulness and spiritual growth in nature.",
      imageUrl: "/events/retreat.jpg",
      location: "GK Campus",
    },
    {
      id: 3,
      title: "NFCS Week 2025",
      date: "April 2025",
      description:
        "Annual community food collection for families in need during the holidays.",
      imageUrl: "events/nfcs-week-2025.jpg",
      location: "GK Campus",
    },
    {
      id: 4,
      title: "FYB Send Forth 2024",
      date: "September 2024",
      description:
        "Discussion on building bridges between different faith traditions.",
      imageUrl: "/events/noctis-gractia.jpg",
      location: "Indoor Sport Complex",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
            <Calendar className="w-8 h-8 text-white" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chaplaincy Events
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
            Join us for spiritual gatherings, community service, and meaningful
            conversations that strengthen our faith community.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              {/* Event Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <svg class="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Date Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--primary-red)]" />
                    <span className="text-xs font-semibold text-gray-900">
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--primary-red)] transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--primary-red)]" />
                  <span>{event.location}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* View Pictures Link */}
                <Link
                  href="/event/nfcs-week-2025"
                  className="group/link inline-flex items-center gap-2 text-[var(--primary-red)] hover:text-red-700 font-semibold text-sm transition-colors duration-300"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>View Pictures</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Decorative Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary-red)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {events.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Events Available
            </h3>
            <p className="text-gray-600">
              Check back soon for upcoming chaplaincy events.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[var(--primary-red)]/5 via-red-50 to-[var(--primary-red)]/5 rounded-2xl p-8 border border-[var(--primary-red)]/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't miss out on our upcoming events. Follow us on social media
              or subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[var(--primary-red)] to-red-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Our Community
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-[var(--primary-red)] hover:text-[var(--primary-red)] transition-all duration-300"
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventPage;
