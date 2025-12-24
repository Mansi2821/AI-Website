import { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const menu = ["Home", "About Us", "Services", "Case Studies", "Contact Us"];
  const brand = "#6764F8";

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: string, idx?: number) => {
    if (idx !== undefined) setActiveIndex(idx);
    setIsOpen(false);

    if (item === "Home") navigate("/");
    if (item === "About Us") navigate("/about");
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "backdrop-blur-2xl bg-black/30" : "bg-transparent"}
      `}
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
        </div>

        {/* 🔹 SOLID ALIGNED DIVIDER */}
        <div className="max-w-[1240px] mx-auto px-4">
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#6764F8",
            }}
          />
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
            className="text-white cursor-pointer"
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
            onClick={() => navigate("/")}
          >
            <span className="text-[22px] sm:text-[26px] md:text-[32px]">
              Logo
            </span>
          </motion.div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-[35px]">
            {menu.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer text-white/85 font-medium hover:text-[#6764F8] transition-all"
                onClick={() => handleNavigation(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(103,100,248,0.6)",
            }}
            className="hidden md:flex rounded-lg font-semibold text-sm text-white justify-center items-center"
            style={{ background: brand, width: "169px", height: "44px" }}
          >
            Let’s Talk
          </motion.button>

          {/* MOBILE HAMBURGER */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-white"
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
            className="md:hidden px-3 pb-4"
          >
            <div className="bg-black/95 rounded-lg p-5 flex flex-col gap-4 text-center">
              {menu.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleNavigation(item, idx)}
                  className={`py-2 cursor-pointer ${
                    activeIndex === idx
                      ? "text-[#6764F8]"
                      : "text-white/90"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}








