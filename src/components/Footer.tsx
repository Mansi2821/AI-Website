import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#27266C]/80 to-[#151537]/90 rounded-2xl p-10 mb-16 overflow-hidden flex flex-col md:flex-row items-center justify-between"
        >
          {/* Left Text */}
          <div className="z-10 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-white/70 text-sm sm:text-base max-w-md">
              Get the latest insights, project updates, and industry trends delivered to your inbox.
            </p>
          </div>

          {/* Subscribe Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-3 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 text-white text-sm px-4 py-3 rounded-lg outline-none w-full md:w-64 border border-white/20 focus:border-brand/60 transition-all"
            />
            <button
              type="submit"
              className="bg-brand hover:bg-brand/80 text-white text-sm font-medium px-5 py-3 rounded-lg transition-all duration-300"
            >
              Subscribe
            </button>
          </motion.form>

          {/* Animated Background Effect */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(103,100,248,0.4)_0%,transparent_70%)] blur-2xl opacity-40 animate-pulse" />
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left mb-10">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Logo</h2>
            <p className="text-white/70 text-sm mb-4 leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis, neque vel sodales tincidunt, lorem risus dignissim leo.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-white/70">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 p-2 rounded-lg hover:bg-brand transition-all duration-300"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition-all duration-200 cursor-pointer">Home</li>
              <li className="hover:text-white transition-all duration-200 cursor-pointer">About Us</li>
              <li className="hover:text-white transition-all duration-200 cursor-pointer">Case Studies</li>
              <li className="hover:text-white transition-all duration-200 cursor-pointer">Contact Us</li>
            </ul>
          </motion.div>

          {/* Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Leading custom</li>
              <li>Leading custom</li>
              <li>Leading custom</li>
              <li>Leading custom</li>
              <li>Leading custom</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6 text-center text-xs text-white/50"
        >
          © 2025 SWL Solutions. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
