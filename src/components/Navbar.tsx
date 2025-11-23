import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = ["Home", "About Us", "Services", "Case Studies", "Contact Us"];
  const brand = "#6764F8";

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur-md"
      style={{
        background:
          "linear-gradient(90deg, #0b0d17ff 0%, #141437ff 5%, rgba(0,0,0,1) 100%)",
      }}
    >
      {/* ---------------------- TOP BAR (Desktop Only) ---------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="hidden sm:block w-full"
      >
        <div className="max-w-[1240px] mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs text-[#cfcfe0]">

            {/* LEFT: Email + Phone */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaEnvelope style={{ color: brand }} />
                <span>info@swlsolutions.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt style={{ color: brand }} />
                <span>+91-XXXXXXXXXX</span>
              </div>
            </div>

            {/* RIGHT: Social Icons */}
            <div className="flex items-center gap-4">
              {[linkedinIcon, instagramIcon, facebookIcon, twitterIcon].map(
                (src, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-1.5 rounded-md bg-white/5 hover:bg-[#6764F820] transition-all"
                  >
                    <img src={src} className="w-[16px] h-[16px]" alt="social" />
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Blue Divider Line */}
          <div
            className="mt-2"
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: brand,
            }}
          />
        </div>
      </motion.div>

      {/* --------------------------- MAIN NAVBAR --------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="w-full"
      >
        <div className="max-w-[1240px] mx-auto px-4 h-[88px] flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            className="text-white"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "100%",
            }}
          >
            <span className="md:text-[32px] text-[28px]">Logo</span>
          </motion.div>

          {/* DESKTOP MENU */}
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden md:flex items-center justify-between gap-[35px]"
            style={{
              width: "493px",
              height: "22px",
            }}
          >
            {menu.map((item, i) => (
              <motion.li
                key={i}
                className="cursor-pointer text-white/85 font-medium"
              >
                <span className="transition-all duration-200 hover:text-[#6764F8]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA (Desktop Only) */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(103,100,248,0.6)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="hidden md:flex justify-center items-center rounded-lg font-semibold text-sm text-white"
            style={{
              background: brand,
              width: "169px",
              height: "44px",
            }}
          >
            Let’s Talk
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </motion.div>

      {/* ------------------------ MOBILE DROPDOWN ------------------------ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden w-full px-5 pb-6"
          >
            <div className="flex flex-col gap-4 bg-black/90 p-5 rounded-lg border border-white/10 mx-auto w-full">
              {menu.map((m, i) => (
                <a
                  key={i}
                  href="#"
                  className="py-2 text-center text-white/90 font-medium text-base hover:text-[#6764F8]"
                >
                  {m}
                </a>
              ))}

              <button
                className="w-full py-3 rounded-lg font-semibold text-white text-base"
                style={{ background: brand }}
              >
                Let’s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



