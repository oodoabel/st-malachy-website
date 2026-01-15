"use client";
import React from "react";
import {
  User,
  Phone,
  MessageSquare,
  GraduationCap,
  Users,
  Briefcase,
  ChevronDown,
} from "lucide-react";

const SignupForm = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-2xl">
        {/* Header Section from Image 1 */}
        <div className="mb-12 relative pl-6 border-l-[3px] border-red-600">
          <span className="text-[10px] font-bold text-red-600 tracking-[0.2em] uppercase">
            Est. 1974
          </span>
          <h1 className="md:text-5xl text-3xl font-extrabold tracking-tight mt-1 text-gray-900">
            Join Our Community
          </h1>
          <p className="text-gray-500 text-lg mt-2 font-medium">
            Become an NFCSer today!
          </p>
        </div>

        {/* Form Fields from Image 2 */}
        <form className="space-y-8">
          {/* Full Name */}
          <div className="group">
            <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 transition-colors group-focus-within:text-red-600">
              <User size={18} /> Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-white border border-gray-300 rounded-2xl px-6 py-5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone Number */}
            <div className="group">
              <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 group-focus-within:text-red-600">
                <Phone size={18} /> Phone Number
              </label>
              <input
                type="tel"
                placeholder="+234 XXX XXX XXXX"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-600 transition-all"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3 group-focus-within:text-red-600">
                <MessageSquare size={18} className="text-green-600" /> Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-600 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1  gap-8">
            {/* department */}
            <div className="group">
              <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3">
                <Briefcase size={18} /> Department
              </label>
              <input
                type="text"
                placeholder="e.g. Computer Science"
                className="w-full border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-600 transition-all"
              />
            </div>
          </div>

          {/* Forum of Interest */}
          <div className="group">
            <label className="flex items-center gap-3 text-sm font-bold text-gray-700 mb-3">
              <Users size={18} /> Forum
            </label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-300 rounded-2xl px-6 py-5 focus:outline-none focus:border-red-600 transition-all bg-white cursor-pointer">
                <option>Select Level</option>
                <option>100 Level</option>
                <option>Triumphant Family</option>
                <option>Golden Phoenix Family</option>
                <option>Luminous Family</option>
                <option>Excellers in Christ Family</option>
              </select>
              <ChevronDown
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          {/* Styled Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-[#CC2131] w-full hover:bg-red-700 text-white font-bold text-lg px-16 py-4 rounded-xl shadow-[0_10px_20px_rgba(204,33,49,0.3)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Become an NFCSer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
