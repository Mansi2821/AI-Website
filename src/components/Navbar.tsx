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
    <header className="bg-gradient-to-r from-[#0F1124] via-[#151527] to-[#0A0A0F] text-white shadow-lg backdrop-blur-md">

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-7xl mx-auto px-12 py-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs text-[#cfcfe0]">
            <div className="flex items-center gap-2">
              <FaEnvelope style={{ color: brand }} />
              <span>info@swlsolutions.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt style={{ color: brand }} />
              <span>xxxxxxxxxx</span>
            </div>
          </div>

          {/* Social icons (desktop only) */}
          <div className="hidden sm:flex items-center gap-3">
            {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={`social-${idx}`}
                  className="p-1.5 rounded-md"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    transition: "background-color .2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(103,100,248,0.14)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.03)")
                  }
                >
                  <Icon size={13} style={{ color: "#e7e7f6" }} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="mt-3 h-[1px]" style={{ background: "rgba(103,100,248,0.08)" }} />
      </motion.div>

      {/* Main nav */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Logo</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-10 text-white/90 font-medium">
          {menu.map((item, i) => (
            <li key={i} className="group relative">
              <a
                href="#"
                className="transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.92)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = brand)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.92)")
                }
              >
                {item}
              </a>

              {/* underline that grows on hover */}
              <span
                className="absolute left-0 -bottom-1 h-[2px]"
                style={{
                  width: 0,
                  background: brand,
                  transition: "width .2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.width = "100%")}
                onMouseLeave={(e) => (e.currentTarget.style.width = "0")}
              />
            </li>
          ))}
        </ul>

        {/* CTA Button (Let's Talk only) */}
        <div className="hidden md:flex items-center">
          <button
            className="px-6 py-2.5 rounded-lg"
            style={{
              background: brand,
              color: "#ffffff",
              boxShadow: "0 8px 26px rgba(103,100,248,0.18)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.95")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Let’s Talk
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </motion.div>

      {/* Mobile dropdown (animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden px-6 pb-6"
          >
            <div
              className="flex flex-col gap-3 bg-black/85 p-4 rounded-lg border"
              style={{ borderColor: "rgba(255,255,255,0.04)" }}
            >
              {menu.map((m, i) => (
                <a
                  key={i}
                  href="#"
                  className="py-2 text-white/90"
                  style={{ transition: "color .18s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = brand)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                  }
                >
                  {m}
                </a>
              ))}

              <div className="pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {/* Only Let's Talk on mobile */}
                <button
                  className="w-full py-2.5 rounded-lg"
                  style={{ background: brand, color: "#fff" }}
                >
                  Let’s Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
