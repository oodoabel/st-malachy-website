import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--tertiary-bg)] text-[var(--text-primary)] pt-20 pb-10 border-t border-[var(--border-color)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl text-[var(--primary-red)] font-serif">✝</span>
              <div className="flex flex-col">
                <span className="font-bold tracking-wider text-lg uppercase leading-none text-[var(--text-primary)]">St. Malachy's</span>
                <span className="text-[var(--text-secondary)] text-xs tracking-[0.2em] uppercase leading-none mt-1">Chaplaincy</span>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-sm mb-8">
              Building a vibrant community of Catholic students, grounded in faith, excellence, and service to humanity.
            </p>
            <a
              href="/chaplaincy-anthem"
              className="inline-flex items-center gap-2 text-[var(--primary-red)] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
            >
              Chaplaincy Anthem <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-[var(--text-primary)] font-bold uppercase tracking-widest mb-6">Contact Us</h3>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[var(--primary-red)] shrink-0 mt-1" />
                <span>Federal University of Technology Minna,<br />Niger State, Nigeria.</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[var(--primary-red)] shrink-0" />
                <span>+234 813 558 7750</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[var(--primary-red)] shrink-0" />
                <span>futminnanfcs75@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-3">
            <h3 className="text-[var(--text-primary)] font-bold uppercase tracking-widest mb-6">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/NFCSFUTMinna/" },
                { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/nfcs_futminna/" },
                { icon: <SiTiktok className="w-5 h-5" />, href: "https://tiktok.com/@nfcs_futminna" },
                { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/2348135587750" },
                { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@nfcs_futminna" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--secondary-bg)] border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--primary-red)] hover:text-white hover:border-[var(--primary-red)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-secondary)] uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} NFCS St. Malachy's Chaplaincy.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
