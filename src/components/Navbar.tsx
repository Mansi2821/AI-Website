import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = ["Home", "About Us", "Services", "Case Studies", "Contact Us"];
  const brand = "#6764F8";

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0F1124] via-[#151527] to-[#0A0A0F] text-white shadow-lg backdrop-blur-md">
      {/* 🔹 Top Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-7xl mx-auto px-4 py-2 hidden sm:block"
      >
        <div className="flex items-center justify-between text-xs text-[#cfcfe0]">
          {/* Email + Phone */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <FaEnvelope style={{ color: brand }} />
              <span>info@swlsolutions.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt style={{ color: brand }} />
              <span>+91-XXXXXXXXXX</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map(
              (Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded-md bg-white/5 hover:bg-[#6764F820] transition-all"
                >
                  <Icon size={13} className="text-white/80" />
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-3 h-[1px]"
          style={{ background: "rgba(103,100,248,0.08)" }}
        />
      </motion.div>

      {/* 🔹 Main Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          SWL<span style={{ color: brand }}>Solutions</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:flex items-center gap-8 text-white/90 font-medium"
        >
          {menu.map((item, i) => (
            <motion.li
              key={i}
              className="group relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <span className="transition-all duration-200 group-hover:text-[#6764F8]">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6764F8] group-hover:w-full transition-all duration-300" />
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(103,100,248,0.6)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="hidden md:flex px-6 py-2.5 rounded-lg font-semibold text-sm text-white"
          style={{
            background: brand,
            boxShadow: "0 0 20px rgba(103,100,248,0.3)",
          }}
        >
          Let’s Talk
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </motion.button>
      </motion.div>

      {/* 🔹 Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden px-5 pb-6"
          >
            <div className="flex flex-col gap-3 bg-black/85 p-4 rounded-lg border border-white/10 shadow-[0_0_20px_rgba(103,100,248,0.15)]">
              {menu.map((m, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{
                    color: brand,
                    x: 6,
                    textShadow: `0 0 10px ${brand}`,
                  }}
                  whileTap={{
                    color: brand,
                    scale: 0.98,
                    textShadow: `0 0 8px ${brand}`,
                  }}
                  className="py-2 text-white/90 font-medium text-sm transition-all relative group"
                >
                  {m}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#6764F8] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              {/* CTA in mobile */}
              <div className="pt-3 border-t border-white/10">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(103,100,248,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-full py-2.5 rounded-lg font-semibold text-white text-sm"
                  style={{
                    background: brand,
                    boxShadow: "0 0 18px rgba(103,100,248,0.25)",
                  }}
                >
                  Let’s Talk
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
