"use client";

import React, { useEffect, useState } from "react";
import { FaMusic, FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const stanzas = [
  `NFCS Nigeria Federation of Catholic Students
is living the Faith.
We are the hope of our Faith to blossom
The dreams of the Church, hail NFCS.
With the strength of our Youth,
We will move our faith forward.
And defend it whatever be the case.`,
  `Let’s spread the good news of the Kingdom
To all people on earth, through NFCS,
And join hands with groups of like minds.
To evangelize the world, through NFCS
Let the message be brought to every living soul.
By the life we live as students`,
  `We say no to corruption, and greed,
Sectionalism and violence in NFCS.
And chant down the agent of Bribery,
Ethnicism and war in NFCS.
With Jesus, Prince of Love and Peace,
We pitch our tent.
Yes the enemies will forever be shamed.`,
];

const chorus = `When the roll is called
On the last day
A joyful song we’ll raise
Hail NFCS!`;

const delays = ["0s", "0.15s", "0.3s", "0.45s", "0.6s"];

const ChaplaincyAnthemPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleStanza, setVisibleStanza] = useState<number | null>(null);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setVisibleStanza(current);
      current++;
      if (current >= stanzas.length) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col">
      {/* Sticky header */}
      <header className="sticky top-0 z-30 bg-gray-900 bg-opacity-90 backdrop-blur-md flex items-center gap-4 px-8 py-5 shadow-md select-none">
        <FaMusic className="text-indigo-400 text-4xl animate-pulse" />
        <h1 className="text-4xl font-extrabold tracking-wide text-gray-100">
          Chaplaincy Anthem
        </h1>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Left: Scrollable stanzas, no rectangles */}
        <section className="flex-1 overflow-y-auto px-10 py-12 space-y-16">
          {stanzas.map((stanza, idx) => (
            <article
              key={idx}
              className={`max-w-3xl mx-auto transition-opacity duration-700 ease-out ${
                visibleStanza !== null && idx <= visibleStanza
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <p
                className="text-gray-200 leading-relaxed whitespace-pre-line font-medium"
                style={{
                  fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
                  lineHeight: 1.6,
                }}
              >
                {stanza}
              </p>
            </article>
          ))}
        </section>

        {/* Right: Fixed chorus panel, no background rectangles */}
        <aside className="w-96 flex flex-col justify-center p-10 text-center text-indigo-300 italic font-semibold select-text">
          <p
            className="whitespace-pre-line leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", lineHeight: 1.6 }}
          >
            {chorus}
          </p>
        </aside>
      </main>

      {/* Play/Pause Button fixed bottom center */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-indigo-700 hover:bg-indigo-600 transition-colors rounded-full px-10 py-4 shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-400 z-40 select-none"
      >
        {isPlaying ? (
          <FaPauseCircle className="text-4xl" />
        ) : (
          <FaPlayCircle className="text-4xl" />
        )}
        <span
          className="text-gray-100 font-semibold"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
        >
          {isPlaying ? "Pause Anthem" : "Play Anthem"}
        </span>
      </button>

      {/* Animated music wave background */}
      <div className="fixed inset-0 -z-10 flex justify-center items-center space-x-2 opacity-10 pointer-events-none">
        {delays.map((delay, idx) => (
          <span
            key={idx}
            className="block w-2 h-20 bg-gray-600 rounded-full animate-wave"
            style={{ animationDelay: delay }}
          />
        ))}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.4);
            opacity: 0.5;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .animate-wave {
          animation: wave 1.2s ease-in-out infinite;
          transform-origin: bottom center;
        }
        @media (max-width: 640px) {
          main {
            flex-direction: column;
          }
          aside {
            width: 100% !important;
            padding: 1.5rem !important;
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ChaplaincyAnthemPage;
