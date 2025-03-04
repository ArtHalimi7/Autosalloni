import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <span className="text-2xl font-semibold text-red-500">Autosalloni</span>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-6 text-gray-400">
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold text-white">Resources</h3>
              <a href="#inventory" className="hover:text-red-500">Inventory</a>
              <a href="#services" className="hover:text-red-500">Services</a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold text-white">About Us</h3>
              <a href="#about" className="hover:text-red-500">Our Story</a>
              <a href="#contact" className="hover:text-red-500">Contact</a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold text-white">Legal</h3>
              <a href="#" className="hover:text-red-500">Privacy Policy</a>
              <a href="#" className="hover:text-red-500">Terms & Conditions</a>
            </div>
          </nav>

          {/* Social & Copyright */}
          <div className="flex flex-col items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-gray-400 hover:text-red-500"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </motion.a>
            <p className="text-sm text-gray-400 text-center">
              © {currentYear} <span className="text-red-500">Autosalloni™</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;