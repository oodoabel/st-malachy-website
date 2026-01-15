"use client";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Heart,
  ExternalLink,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Societies", href: "/societies" },
    { label: "Forums", href: "/forums" },
    { label: "Events", href: "/events" },
    { label: "Executives", href: "/executives" },
    { label: "Gallery", href: "/gallery" },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/NFCSFUTMinna/",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/nfcs_futminna/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: <SiTiktok className="w-5 h-5" />,
      href: "https://tiktok.com/@nfcs_futminna",
      label: "TikTok",
      color: "hover:bg-black",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/2348135587750",
      label: "WhatsApp",
      color: "hover:bg-green-600",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/@nfcs_futminna",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-gray-300 pt-20 pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary-red)]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-red)] to-red-700 flex items-center justify-center shadow-lg">
                  <span className="text-2xl text-white font-serif">✝</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-wider text-xl uppercase leading-none text-white">
                    St. Malachy's
                  </span>
                  <span className="text-gray-400 text-xs tracking-[0.2em] uppercase leading-none mt-1">
                    Chaplaincy
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Building a vibrant community of Catholic students, grounded in
                faith, excellence, and service to humanity.
              </p>

              <Link
                href="/chaplaincy-anthem"
                className="group inline-flex items-center gap-2 text-[var(--primary-red)] hover:text-red-400 font-semibold text-sm transition-all duration-300"
              >
                <span>Listen to Our Anthem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[var(--primary-red)] transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[var(--primary-red)] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-[var(--primary-red)] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    Federal University of Technology Minna,
                    <br />
                    Niger State, Nigeria
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-[var(--primary-red)] shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href="tel:+2348135587750"
                    className="text-gray-400 hover:text-[var(--primary-red)] transition-colors text-sm"
                  >
                    +234 813 558 7750
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-[var(--primary-red)] shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href="mailto:futminnanfcs75@gmail.com"
                    className="text-gray-400 hover:text-[var(--primary-red)] transition-colors text-sm"
                  >
                    futminnanfcs75@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:text-white transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup (Optional) */}
              <div className="mt-6">
                <p className="text-gray-400 text-sm mb-3">
                  Stay updated with our latest news
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary-red)] transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-[var(--primary-red)] to-red-700 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Join
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className="text-gray-400 flex items-center gap-2">
            © {new Date().getFullYear()} NFCS St. Malachy's Chaplaincy. All
            Rights Reserved.
          </p>

          <p className="text-gray-400 flex items-center gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 text-[var(--primary-red)] fill-current animate-pulse" />{" "}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
