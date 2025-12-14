"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import EventsHero from "@/components/EventsHero";
import Footer from "@/components/Footer";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  location: string;
  isPastEvent: boolean;
}

const EventPage = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "past">(
    "all"
  );

  // Sample event data
  const events: Event[] = [
    {
      id: 1,
      title: "Revival 2024",
      date: "2023-10-15",
      description:
        "Join us for a morning of fellowship and prayer with community members.",
      imageUrl: "events/thy-kingdom-come.png",
      location: "Convocation square, GK Campus",
      isPastEvent: true,
    },
    {
      id: 2,
      title: "Revival 2025",
      date: "Second semester",
      description:
        "Weekend retreat focusing on mindfulness and spiritual growth in nature.",
      imageUrl: "/events/retreat.jpg",
      location: "GK campus",
      isPastEvent: false,
    },
    {
      id: 3,
      title: "NFCS Week 2025",
      date: "April 2025",
      description:
        "Annual community food collection for families in need during the holidays.",
      imageUrl: "events/nfcs-week-2025.jpg",
      location: "GK Campus",
      isPastEvent: true,
    },
    {
      id: 4,
      title: "FYB Send Forth 2024",
      date: "September 2024",
      description:
        "Discussion on building bridges between different faith traditions.",
      imageUrl: "/events/noctis-gractia.jpg",
      location: "Indoor sport Complex",
      isPastEvent: true,
    },
  ];

  const filteredEvents = events.filter((event) => {
    if (activeFilter === "upcoming") return !event.isPastEvent;
    if (activeFilter === "past") return event.isPastEvent;
    return true;
  });

  const formatDate = (dateString: string) => {
    // Basic check if it's a valid date string for standard formatting
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; // Return original string if not a standard date format (e.g. "Second semester")
    }

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-[var(--primary-bg)] font-sans selection:bg-[var(--primary-red)] selection:text-white">
      <EventsHero />

      <section className="py-24 sm:py-32 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* Filter Buttons */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-[var(--secondary-bg)] rounded-full border border-[var(--border-color)] shadow-sm">
              {(["all", "upcoming", "past"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === filter
                      ? "bg-[var(--primary-red)] text-white shadow-md"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/50"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  layout
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--primary-red)]/30 hover:shadow-2xl hover:shadow-[var(--primary-red)]/10 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Event Image */}
                  <div className="relative h-64 overflow-hidden bg-[var(--secondary-bg)]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Event'; // Fallback
                      }}
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${event.isPastEvent
                            ? "bg-white/90 text-gray-600 backdrop-blur-sm"
                            : "bg-[var(--primary-red)] text-white"
                          }`}
                      >
                        {event.isPastEvent ? "Past" : "Upcoming"}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-red)] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[var(--primary-red)]" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[var(--primary-red)]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-8 leading-relaxed flex-grow">
                      {event.description}
                    </p>

                    <div className="pt-6 border-t border-[var(--border-color)] flex justify-between items-center">
                      <Link href={`event/${event.id}`}>
                        <button className="inline-flex items-center gap-2 text-[var(--text-primary)] font-bold group/btn">
                          <span className="group-hover/btn:text-[var(--primary-red)] transition-colors">View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform group-hover/btn:text-[var(--primary-red)]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-24 h-24 bg-[var(--secondary-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-[var(--text-secondary)] opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                No events found
              </h3>
              <p className="text-[var(--text-secondary)]">
                There are currently no {activeFilter} events scheduled.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPage;
