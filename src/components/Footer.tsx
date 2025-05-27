// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <div className="bg-gray-900/90 gap-5 flex-col md:flex-row text-gray-400 w-full h-[300pt]  flex justify-center items-center md:p-70 md:items-start text-2xl font-bold md:rounded-t-[40px] rounded-t-[20px] mt-20">
//         <div className="flex flex-col border-b md:border-b-0 md:border-r md:p-5 px-10 p-2">
//           St. Malachy{" "}
//           <p className="flex gap-1 text-[1rem] font-light justify-center items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="15px"
//               height=""
//               fill="currentColor"
//               className="bi bi-c-circle"
//               viewBox="0 0 16 16"
//             >
//               <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
//             </svg>{" "}
//             2025
//           </p>
//         </div>
//         <div className="flex flex-col items-center border-b md:border-b-0 md:border-r md:pb-0 pb-5 md:px-10">
//           Days of Mass
//           <p className="flex flex-col text-[1rem] font-light justify-center items-center">
//             <p>Sun: 8am @GK & 7am@Bosso</p> <p>Tue: 6am @ GK</p>{" "}
//             <p>Thur: 6pm @GK</p>
//           </p>
//         </div>

//         <div className="flex flex-col items-center justify-center md:pt-5">
//           Follow us
//           <p className="flex flex-row gap-2 text-[1rem] font-light justify-center items-center">
//             <a href="https://web.facebook.com/NFCSFUTMinna">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 className="bi bi-facebook"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
//               </svg>
//             </a>

//             <a href="https://www.instagram.com/nfcs_futminna/">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 className="bi bi-instagram"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
//               </svg>
//             </a>

//             <a href="https://www.tiktok.com/@nfcs_futminna">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 className="bi bi-tiktok"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
//               </svg>
//             </a>

//             <a href="https://whatsapp.com/channel/0029VaEkFCt8aKvEpzZxQx0X">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 className="bi bi-whatsapp"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
//               </svg>
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Church Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">St. Malachy's Chaplaincy</h3>
            <p className="text-gray-300">One family working for christ.</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPinIcon />
                NFCS chapel, Gidan kwanu & Bosso Campus
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon />
                (215) 483-4600
              </p>
              <p className="flex items-center gap-2">
                <EnvelopeIcon />
                info@stmalachys.org
              </p>
            </div>
          </div>

          {/* Mass Times */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Mass Times</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Sunday:</span> <span>8:00 AM, 10:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Weekdays:</span> <span>7:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span> <span>5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Confessions:</span> <span>Thur 4:00-4:45 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Events", href: "/events" },
                { name: "Donate", href: "/donate" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect With Us</h3>
            <div className="flex gap-4">
              {[
                { icon: <FacebookIcon />, href: "#" },
                { icon: <TwitterIcon />, href: "#" },
                { icon: <InstagramIcon />, href: "#" },
                { icon: <YouTubeIcon />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={`Follow us on ${social.icon.type.name}`}
                  className="text-gray-300 hover:text-white transition-colors text-2xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium hover:bg-blue-700 transition-colors">
                Newsletter Signup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950 py-6 text-center text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} St. Malachy's Chaplaincy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Icons (Replace with your actual icon components or library like Lucide)
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

// Social Icons (Replace with your preferred icons)
const FacebookIcon = () => <span className="icon-[mdi--facebook] text-2xl" />;
const TwitterIcon = () => <span className="icon-[mdi--twitter] text-2xl" />;
const InstagramIcon = () => <span className="icon-[mdi--instagram] text-2xl" />;
const YouTubeIcon = () => <span className="icon-[mdi--youtube] text-2xl" />;

export default Footer;
