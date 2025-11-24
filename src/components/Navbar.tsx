import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";

export default function Navbar() {
  // FIXED TYPE ERROR ✔
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const menu = ["Home", "About Us", "Services", "Case Studies", "Contact Us"];
  const brand = "#6764F8";

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 backdrop-blur-md
        overflow-x-hidden
      "
      style={{
        background:
          "linear-gradient(90deg, #1f2233ff 0%,#141437ff 5%,rgb(0,0,0) 100%)",
      }}
    >
      {/* ---------------------- TOP BAR (Desktop only) ---------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="hidden md:block w-full"
      >
        <div className="max-w-[1240px] mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs text-[#cfcfe0]">
            
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

            <div className="flex items-center gap-4">
              {[linkedinIcon, instagramIcon, facebookIcon, twitterIcon].map(
                (src, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="p-1.5 bg-white/5 rounded-md hover:bg-[#6764F820]"
                  >
                    <img src={src} className="w-[16px] h-[16px]" />
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div className="mt-2 w-full h-[1px]" style={{ background: brand }} />
        </div>
      </motion.div>

      {/* --------------------------- MAIN NAVBAR --------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <div
          className="
            max-w-[1240px] w-full mx-auto 
            px-2 sm:px-4
            h-[70px] sm:h-[80px] md:h-[90px]
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <motion.div
            className="text-white flex-shrink"
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
          >
            <span className="text-[22px] sm:text-[26px] md:text-[32px]">
              Logo
            </span>
          </motion.div>

          {/* DESKTOP MENU */}
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-[35px]"
          >
            {menu.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer text-white/85 font-medium"
              >
                <span className="hover:text-[#6764F8] transition-all">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA DESKTOP */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(103,100,248,0.6)",
            }}
            className="
              hidden md:flex rounded-lg font-semibold text-sm text-white
              justify-center items-center
            "
            style={{ background: brand, width: "169px", height: "44px" }}
          >
            Let’s Talk
          </motion.button>

          {/* MOBILE HAMBURGER BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 ml-auto mr-0 text-white flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </motion.button>
        </div>
      </motion.div>

      {/* ------------------------ MOBILE MENU ------------------------ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full md:hidden overflow-hidden px-3 pb-4"
          >
            <div
              className="
                bg-black/95 border border-white/10 rounded-lg 
                p-5 flex flex-col gap-4 text-center
              "
            >
              {/* MOBILE LIST ITEMS — BLUE ON CLICK */}
              {menu.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`
                    py-2 font-medium text-base cursor-pointer transition-all
                    ${activeIndex === idx ? "text-[#6764F8]" : "text-white/90"}
                  `}
                >
                  {item}
                </motion.div>
              ))}

              {/* MOBILE CTA — CENTERED */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(103,100,248,0.4)",
                }}
                className="
                  w-full py-3 rounded-lg font-semibold text-white text-base
                  flex justify-center items-center
                "
                style={{ background: brand }}
              >
                Let’s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


