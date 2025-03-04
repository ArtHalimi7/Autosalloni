import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 py-8 relative text-gray-400">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950"></div>
        <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full bg-red-600/20 blur-3xl"></div>
        <div className="absolute top-0 right-20 w-64 h-64 rounded-full bg-neutral-700/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Autosalloni</h3>
            <p className="max-w-xs">
              Your premier destination for luxury and high-performance vehicles.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Links */}
              {["Facebook", "Instagram"].map((platform) => (
                <motion.a
                  key={platform}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Inventory", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p>123 Luxury Lane, Auto City</p>
            <p>(123) 456-7890</p>
            <p>info@autosalloni.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-6 pt-4 text-center text-sm">
          © {currentYear} Autosalloni. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;