"use client";
import { useState, useRef } from "react";

const NFCSAnthem = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stanzas = [
    `NFCS Nigeria Federation of Catholic Students
is living the Faith.
We are the hope of our Faith to blossom
The dreams of the Church, hail NFCS.
With the strength of our Youth,
We will move our faith forward.
And defend it whatever be the case.`,
    `Let's spread the good news of the Kingdom
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
A joyful song we'll raise
Hail NFCS!`;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Audio Element */}
      <audio ref={audioRef} src="/anthem.mp3" loop />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            NFCS Anthem
          </h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The official anthem of the Nigeria Federation of Catholic Students
          </p>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="mt-8 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium flex items-center mx-auto transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 mr-2 ${isPlaying ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 mr-2 ${isPlaying ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {isPlaying ? "Pause Anthem" : "Play Anthem"}
          </button>
        </div>

        {/* Anthem Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {stanzas.map((stanza, index) => (
            <div key={index} className="group">
              {/* Stanza */}
              <div className="p-8 md:p-10 transition-all duration-300 hover:bg-gray-50">
                <div className="flex items-start max-w-5xl mx-auto">
                  <span className="text-2xl font-serif text-gray-400 mr-6 mt-1">
                    {index + 1}.
                  </span>
                  <p className="text-gray-800 whitespace-pre-line leading-relaxed text-lg">
                    {stanza}
                  </p>
                </div>
              </div>

              {/* Chorus after each stanza */}
              <div className="p-8 md:p-10 bg-gray-75 border-t border-gray-200">
                <div className="flex items-center max-w-5xl mx-auto">
                  <div className="mr-6 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      Chorus
                    </h3>
                    <p className="text-gray-600 italic whitespace-pre-line leading-relaxed">
                      {chorus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6">
            <img
              src="/futminna-logo.png"
              alt="FUTMinna Logo"
              className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <img
              src="/nfcs-logo.png"
              alt="NFCS Logo"
              className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <p className="mt-6 text-gray-500">
            © {new Date().getFullYear()} St Malachy
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFCSAnthem;
