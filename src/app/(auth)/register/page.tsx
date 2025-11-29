"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, Building2, BookOpen, Users } from "lucide-react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    department: "",
    level: "",
    forum: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In the future, this can be connected to a backend API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--accent-cream)] via-gray-100 to-gray-200 p-4 mt-5 md:mt-15">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 text-center"
        >
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-burgundy)] to-[var(--primary-gold)] rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[var(--primary-burgundy)] mb-4">
            Thank You for Your Interest!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We've received your information. Our registration system will be
            available soon.
          </p>
          <p className="text-gray-600 mb-8">
            In the meantime, feel free to explore our chaplaincy activities and
            connect with us on social media.
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-[var(--primary-burgundy)] to-[var(--primary-gold)] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Return to Homepage
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--accent-cream)] via-gray-100 to-gray-200 p-4 mt-5 md:mt-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--primary-burgundy)] mb-2">
            Join Our Community
          </h1>
          <p className="text-gray-600">
            Express your interest in becoming part of St. Malachy's Chaplaincy
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-burgundy)] focus:border-transparent transition"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-burgundy)] focus:border-transparent transition"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline w-4 h-4 mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+234 XXX XXX XXXX"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-burgundy)] focus:border-transparent transition"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Building2 className="inline w-4 h-4 mr-2" />
              Department
            </label>
            <input
              type="text"
              name="department"
              placeholder="e.g., Computer Science"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-burgundy)] focus:border-transparent transition"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="inline w-4 h-4 mr-2" />
              Level
            </label>
            <select
              name="level"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-burgundy)] focus:border-transparent transition"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="">Select your level</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
              <option value="500">500 Level</option>
              <option value="PG">Postgraduate</option>
            </select>
          </div>

          {/* Forum Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="inline w-4 h-4 mr-2" />
              Forum of Interest (Optional)
            </label>
            <select
              name="forum"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-burgundy)] focus:border-transparent transition"
              value={formData.forum}
              onChange={handleChange}
            >
              <option value="">Select a forum</option>
              <option value="bosso">Bosso Forum</option>
              <option value="gidan-kwano">Gidan Kwano Forum</option>
            </select>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-gradient-to-r from-[var(--primary-burgundy)]/10 to-[var(--primary-gold)]/10 rounded-lg border border-[var(--primary-gold)]/30">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> This is an interest form. Full registration
              with payment will be available soon. We'll contact you when the
              system is ready.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[var(--primary-burgundy)] to-[var(--primary-gold)] text-white rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Submit Interest
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already a member?{" "}
          <a
            href="/"
            className="text-[var(--primary-burgundy)] font-semibold hover:underline"
          >
            Return to Homepage
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
