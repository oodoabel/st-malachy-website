"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { NavItem } from "./navBar";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

const Hamburger: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="group p-2 relative">
          {/* Modern Hamburger Icon */}
          <div className="flex flex-col gap-1.5 items-end">
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 6, width: 32 }
                  : { rotate: 0, y: 0, width: 32 }
              }
              className="h-[2.5px] bg-[var(--text-primary)] group-hover:bg-[var(--primary-red)] transition-colors duration-300 rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2.5px] bg-[var(--text-secondary)] group-hover:bg-[var(--primary-red)] group-hover:w-8 transition-all duration-300 rounded-full"
            />
            <motion.span
              animate={
                isOpen
                  ? { rotate: -45, y: -6, width: 32 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              className="h-[2.5px] bg-[var(--text-primary)] group-hover:bg-[var(--primary-red)] transition-colors duration-300 rounded-full"
            />
          </div>
        </SheetTrigger>

        <SheetContent className="bg-gradient-to-br from-white via-gray-50 to-white border-l border-[var(--border-color)] text-[var(--text-primary)] shadow-2xl w-[85vw] sm:w-[400px] p-0">
          {/* Header Section */}
          <SheetHeader className="px-6 pt-8 pb-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-red)] to-red-700 flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl text-white font-serif">✝</span>
                </motion.div>
                <div>
                  <SheetTitle className="text-xl font-bold tracking-wide text-[var(--text-primary)] leading-none">
                    St. Malachy's
                  </SheetTitle>
                  <SheetDescription className="text-xs text-[var(--text-secondary)] mt-1 uppercase tracking-wider">
                    Chaplaincy
                  </SheetDescription>
                </div>
              </div>
            </div>
          </SheetHeader>

          {/* Navigation Section */}
          <motion.nav
            className="px-4 py-6 flex-1 overflow-y-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map(({ icon, href, label }, index) => (
                <motion.li key={href} variants={itemVariants}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between px-5 py-4 rounded-xl text-sm font-semibold text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-r hover:from-[var(--primary-red)] hover:to-red-700 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <span className="text-[var(--primary-red)] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {icon}
                      </span>
                      <span className="uppercase tracking-wider">{label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-white" />

                    {/* Hover Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--primary-red)]/10 to-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="mt-8 px-2">
              <div className="bg-gradient-to-r from-[var(--primary-red)]/5 to-red-50 rounded-2xl p-5 border border-[var(--primary-red)]/10">
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wider">
                  Quick Access
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-4">
                  Explore our chaplaincy resources
                </p>
                <div className="flex gap-2">
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[var(--primary-red)] to-red-700 text-white text-xs font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Join Us
                  </Link>
                  <Link
                    href="/events"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2 bg-white border border-gray-200 text-[var(--text-primary)] text-xs font-semibold rounded-lg hover:border-[var(--primary-red)] hover:text-[var(--primary-red)] transition-all duration-300 text-center"
                  >
                    Events
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.nav>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="px-6 py-6 border-t border-gray-200 bg-white/50 backdrop-blur-sm"
          >
            <p className="text-xs text-[var(--text-secondary)] mb-4 text-center">
              In Partnership With
            </p>
            <div className="flex justify-center items-center gap-8">
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                src="/futminna-logo.png"
                alt="FUTMinna Logo"
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                src="/nfcs-logo.png"
                alt="NFCS Logo"
              />
            </div>
            <p className="text-xs text-center text-[var(--text-secondary)] mt-4">
              © {new Date().getFullYear()} St. Malachy's
            </p>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hamburger;
