"use client";

// pages/chaplaincy/anthem.tsx
import React from "react";
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

export default function ChaplaincyAnthemPage() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 flex flex-col items-center py-16 px-6 overflow-hidden">
      {/* Animated music wave background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center space-x-1 opacity-10">
        {delays.map((delay, idx) => (
          <span
            key={idx}
            className="block w-1.5 h-12 bg-gray-400 rounded-full animate-wave"
            style={{ animationDelay: delay }}
          />
        ))}
      </div>

      <header className="flex items-center space-x-3 mb-12 z-10">
        <FaMusic className="text-gray-300 text-4xl animate-pulse" />
        <h1 className="text-5xl font-extrabold tracking-wide text-white">
          Chaplaincy Anthem
        </h1>
      </header>

      <section className="w-full max-w-3xl rounded-3xl bg-gray-800 bg-opacity-90 p-10 shadow-2xl border border-gray-600 backdrop-blur-sm">
        <div className="space-y-14">
          {stanzas.map((stanza, idx) => (
            <div key={idx} className="space-y-6">
              <div className="bg-gray-700 rounded-xl p-6 border border-gray-600 shadow-inner">
                <p className="text-lg leading-relaxed whitespace-pre-line font-medium text-gray-100">
                  {stanza}
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700 italic font-semibold text-gray-300 shadow-md">
                <p className="whitespace-pre-line">{chorus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="mt-12 flex items-center space-x-3 bg-gray-700 hover:bg-gray-600 transition rounded-full px-6 py-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500"
      >
        {isPlaying ? (
          <FaPauseCircle className="text-3xl text-white" />
        ) : (
          <FaPlayCircle className="text-3xl text-white" />
        )}
        <span className="text-xl font-semibold text-white">
          {isPlaying ? "Pause Anthem" : "Play Anthem"}
        </span>
      </button>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.4);
            opacity: 0.6;
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
      `}</style>
    </div>
  );
}
