import React from "react";
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

const Hamburger: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="">
          <img
            width={28}
            height={28}
            src="https://img.icons8.com/ios-filled/50/D4AF37/menu--v1.png"
            alt="menu"
            className="transition-transform duration-200 hover:scale-110 cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="glass-card-dark text-gray-100 shadow-2xl border-[var(--primary-gold)]/20 animate-in fade-in slide-in-from-right-8">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold tracking-wide text-[var(--primary-gold)] mb-2 flex items-center gap-2">
              <span className="text-3xl">✝</span>
              St. Malachy's
            </SheetTitle>
            <SheetDescription className="text-gray-300">
              Welcome to the St. Malachy chaplaincy!
            </SheetDescription>
            {/* Navigation */}
            <nav className="w-full flex flex-col items-center gap-6 mt-4">
              <ul className="flex flex-col gap-2 w-full">
                {navItems.map(({ icon, href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center px-6 py-3 rounded-lg text-lg font-medium bg-transparent hover:bg-[var(--primary-burgundy)]/20 hover:text-[var(--primary-gold)] focus:bg-[var(--primary-burgundy)]/30 transition-colors duration-200 shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)]"
                    >
                      {icon} {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center items-center gap-6 pt-6">
                <img
                  className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                  src="/futminna-logo.png"
                  alt="FUTMinna Logo"
                />
                <img
                  className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                  src="/nfcs-logo.png"
                  alt="NFCS Logo"
                />
              </div>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hamburger;
