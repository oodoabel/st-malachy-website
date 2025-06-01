"use client";
import Link from "next/link";
import { useState } from "react";

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
      title: "FYB Send Forth 2025",
      date: "September 2024",
      description:
        "Discussion on building bridges between different faith traditions.",
      imageUrl: "/events/interfaith.jpg",
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
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Chaplaincy Events
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for spiritual gatherings, community service, and meaningful
            conversations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4 animate-fade-in-up">
          {(["all", "upcoming", "past"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-gray-800 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl animate-fade-in-up"
            >
              {/* Event Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={event.imageUrl}
                  className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"
                />
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        event.isPastEvent
                          ? "bg-gray-200 text-gray-700"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {event.isPastEvent ? "Past Event" : "Upcoming"}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {formatDate(event.date)}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {event.location}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{event.description}</p>

                <div className="mt-6 flex justify-between items-center">
                  <Link href="event/nfcs-week-2025">
                    <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center group">
                      View event pictures
                      <svg
                        className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </Link>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 animate-pulse">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              No events found
            </h3>
            <p className="mt-2 text-gray-600">
              There are currently no {activeFilter} events scheduled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;
