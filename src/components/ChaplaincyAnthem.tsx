import { useState } from "react";

const NFCSAnthem = () => {
  const [isHovered, setIsHovered] = useState(-1);
  const [showChorus, setShowChorus] = useState(false);

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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center tracking-wide">
        NFCS Anthem
      </h2>

      <div className="space-y-8">
        {stanzas.map((stanza, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg transition-all duration-300 ${
              isHovered === index
                ? "bg-gray-100 scale-[1.02] shadow-md"
                : "bg-white shadow-sm"
            }`}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
          >
            <div className="flex items-start">
              <span className="text-gray-400 font-mono mr-4 text-lg">
                {index + 1}.
              </span>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {stanza}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowChorus(!showChorus)}
          className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
        >
          {showChorus ? "Hide Chorus" : "Show Chorus"}
        </button>
      </div>

      {showChorus && (
        <div
          className="mt-6 p-6 bg-gray-200 rounded-lg animate-fadeIn"
          style={{ animation: "fadeIn 0.5s ease-out" }}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">Chorus</h3>
          </div>
          <p className="mt-4 text-gray-700 italic whitespace-pre-line leading-relaxed pl-9">
            {chorus}
          </p>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NFCSAnthem;
