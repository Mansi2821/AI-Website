import { motion } from "framer-motion";

import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook2.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

import mailImage from "../assets/mail.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ===================== STAY UPDATED BLOCK ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden mb-20"
          style={{
            width: "100%",
            height: "304px",
            borderRadius: "16px",
            border: "1px solid #41414199",
            background:
              "linear-gradient(98.63deg, rgba(77, 74, 212, 0.24) 1.57%, rgba(2, 1, 23, 0.6) 65%)",
            backdropFilter: "blur(2px)",
          }}
        >

          {/* LEFT TEXT */}
          <div className="relative z-10 w-full md:w-1/2 p-10">
            <h3
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "40px",
              }}
              className="mb-3"
            >
              Stay Updated
            </h3>

            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "22px",
                lineHeight: "30px",
              }}
              className="opacity-80 mb-6 max-w-[500px]"
            >
              Get the latest insights, project updates, and industry trends straight to your inbox.
            </p>

            {/* FORM */}
            <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "274px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "#6764F81A",
                  border: "1px solid #D5DAE180",
                  boxShadow: "0px 1px 2px #0000000D",
                }}
                className="px-4 text-white outline-none text-sm w-full"
              />

              <button
                type="submit"
                style={{
                  width: "169px",
                  height: "44px",
                  borderRadius: "8px",
                  padding: "14px 24px",
                  background: "#6764F8",
                }}
                className="text-white font-semibold text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[45%]">
            <img
              src={mailImage}
              alt="Mail Illustration"
              className="w-full h-full object-cover object-right rounded-r-[16px]"
            />
          </div>
        </motion.div>

        {/* ===================== FOOTER CONTENT ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* LEFT — LOGO + SOCIAL */}
          <div>
            <h2
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "100%",
              }}
              className="mb-4"
            >
              Logo
            </h2>

            <p className="text-white/70 text-sm mb-4 max-w-sm leading-relaxed">
              Empowering innovation through technology — crafting digital
              experiences that redefine what’s possible.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4">
              {[twitterIcon, facebookIcon, instagramIcon, linkedinIcon].map(
                (icon, idx) => (
                  <motion.img
                    key={idx}
                    src={icon}
                    alt="icon"
                    className="w-[22px] h-[22px] brightness-0 invert cursor-pointer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  />
                )
              )}
            </div>
          </div>

          {/* CENTER — COMPANY (CENTER ALIGNED) */}
          <div className="text-center mx-auto">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {["Home", "About Us", "Case Studies", "Contact Us"].map(
                (link, idx) => (
                  <li key={idx} className="hover:text-white transition cursor-pointer">
                    {link}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* RIGHT — CORE SERVICES (RIGHT ALIGNED) */}
          <div className="text-right ml-auto">
            <h3 className="text-lg font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Web & App Development",
                "Cloud & DevOps",
                "AI & Machine Learning",
                "Product Design",
                "Quality Assurance",
              ].map((service, idx) => (
                <li key={idx} className="hover:text-white transition cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===================== BOTTOM LINE ===================== */}
        <div
          className="pt-6 text-center text-xs text-white/50 mt-4"
          style={{ borderTop: "1px solid #6764F8" }}
        >
          © 2025 SWL Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}




