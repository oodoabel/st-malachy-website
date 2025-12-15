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
        <SheetTrigger className="group p-2">
          {/* Custom Sleek Hamburger Icon */}
          <div className="flex flex-col gap-1.5 items-end">
            <span className="w-8 h-[2px] bg-[var(--text-primary)] group-hover:bg-[var(--primary-red)] transition-colors duration-300"></span>
            <span className="w-6 h-[2px] bg-[var(--text-secondary)] group-hover:bg-[var(--primary-red)] group-hover:w-8 transition-all duration-300"></span>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-white border-l border-[var(--border-color)] text-[var(--text-primary)] shadow-2xl">
          <SheetHeader className="mt-8">
            <SheetTitle className="text-2xl font-bold tracking-wide text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <span className="text-3xl text-[var(--primary-red)]">✝</span>
              St. Malachy's
            </SheetTitle>
            <SheetDescription className="text-[var(--text-secondary)]">
              One Family Working for Christ
            </SheetDescription>

            {/* Navigation */}
            <nav className="w-full flex flex-col gap-2 mt-8">
              <ul className="flex flex-col gap-1 w-full">
                {navItems.map(({ icon, href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-4 px-4 py-4 rounded-lg text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--secondary-bg)] transition-all duration-300 group"
                    >
                      <span className="text-[var(--primary-red)] group-hover:scale-110 transition-transform">
                        {icon}
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[var(--border-color)]">
                <Link href="/login" className="w-full py-3 text-center text-[var(--text-secondary)] font-bold uppercase tracking-widest text-sm hover:text-[var(--text-primary)] transition-colors">
                  Log In
                </Link>
                <Link href="/register" className="w-full py-3 bg-[var(--primary-red)] text-white rounded-xl font-bold uppercase tracking-widest text-sm text-center shadow-lg shadow-[var(--primary-red)]/20">
                  Join Us
                </Link>
              </div>

              <div className="flex justify-center items-center gap-6 pt-12 mt-auto border-t border-white/5">
                <img
                  className="h-10 w-auto opacity-50 hover:opacity-100 transition duration-300 grayscale"
                  src="/futminna-logo.png"
                  alt="FUTMinna Logo"
                />
                <img
                  className="h-10 w-auto opacity-50 hover:opacity-100 transition duration-300 grayscale"
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
