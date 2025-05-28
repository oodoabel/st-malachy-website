"use client";

import Link from "next/link";
import React from "react";
import { FaChurch, FaUserFriends, FaHandsHelping } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Discover who we are, what we believe, and how we serve the Catholic
            student community at the Federal University of Technology, Minna
            (FUTMinna), Niger State.
          </p>
        </header>

        {/* Mission, Community, Impact */}
        <section className="grid md:grid-cols-3 gap-10 animate-fade-in-up delay-200">
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
            <FaChurch className="text-4xl text-white mb-4" />
            <h2 className="text-xl font-bold mb-2 text-white">Our Mission</h2>
            <p className="text-gray-400 text-sm">
              To nurture the spiritual, academic, and moral lives of Catholic
              students through sacraments, formation, and service rooted in
              Christ.
            </p>
            <p>
              <Link href="/chaplaincy-anthem">view NFCS anthem →</Link>
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
            <FaUserFriends className="text-4xl text-white mb-4" />
            <h2 className="text-xl font-bold mb-2 text-white">Our Community</h2>
            <p className="text-gray-400 text-sm">
              We are a family of Catholic students at FUTMinna — united by
              faith, fellowship, and a shared commitment to spiritual growth and
              evangelization.{" "}
            </p>
            <p>
              <Link href="/about/forums">Go to Forums →</Link>
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
            <FaHandsHelping className="text-4xl text-white mb-4" />
            <h2 className="text-xl font-bold mb-2 text-white">Our Impact</h2>
            <p className="text-gray-400 text-sm">
              Through campus outreach, spiritual programs, and community
              service, we bring the light of Christ to our campus and society.
            </p>
            <p>
              <Link href="/events">view events →</Link>
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-gray-900 border border-gray-700 rounded-xl p-10 shadow-xl animate-fade-in-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            The Catholic Chaplaincy at FUTMinna has been a beacon of faith,
            knowledge, and service for years. Rooted in Catholic tradition and
            youth empowerment, we serve as a spiritual home for students to
            encounter Christ, grow in leadership, and live out their faith with
            courage and compassion.
          </p>
        </section>
        <footer className="bg-gray-900 border-t border-gray-800 py-6 px-4 text-sm text-gray-400">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              &copy; {new Date().getFullYear()} Catholic Chaplaincy, FUTMinna.
              All rights reserved.
            </p>

            <div className="flex space-x-4 text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.4c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.8 8.001a2.6 2.6 0 00-1.83-1.837C18.41 6 12 6 12 6s-6.41 0-7.97.164A2.6 2.6 0 002.2 8c-.16 1.562-.2 3.144-.2 3.999s.04 2.437.2 4c.17 1.038.998 1.848 2.03 2.005C5.6 18 12 18 12 18s6.41 0 7.97-.164c1.03-.157 1.86-.967 2.03-2.005.16-1.562.2-3.144.2-4s-.04-2.437-.2-3.999zM10 14.5v-5l5 2.5-5 2.5z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
        <a
          href="/"
          className="inline-block mt-4 text-gray-400 hover:text-white text-sm underline"
        >
          Back to home
        </a>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
