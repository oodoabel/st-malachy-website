import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Section 1: About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            St. Malachy's Chaplaincy
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We are a Catholic student community under the Nigeria Federation of
            Catholic Students (NFCS), building spiritual, social, and
            intellectual growth on campus with the gospel of Christ.
          </p>
        </div>

        {/* Section 2: Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Federal University of Technology Minna, Niger
              State.
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +234 813 558 7750
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> futminnanfcs75@gmail.com
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Connect With Us
          </h2>
          <ul className="flex flex-wrap gap-4 text-gray-300 text-lg">
            <li>
              <a
                href="https://www.facebook.com/NFCSFUTMinna/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/nfcs_futminna/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@nfcs_futminna"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <SiTiktok size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2348135587750"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaWhatsapp size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@nfcs_futminna"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Youtube />
              </a>
            </li>
          </ul>

          <a
            href="/chaplaincy-anthem"
            className="inline-block mt-4 text-gray-400 hover:text-white text-sm underline"
          >
            View Chaplaincy Anthem →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} NFCS St. Malachy's Chaplaincy,
        FUTMinna. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
