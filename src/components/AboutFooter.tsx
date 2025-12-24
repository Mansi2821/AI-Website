import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook2.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

export default function AboutFooter() {
  const navigate = useNavigate();

  return (
    <footer className="text-white pt-20 pb-10 overflow-hidden bg-black">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ===================== FOOTER CONTENT ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-10 mb-10 
            text-center lg:text-left
          "
        >

          {/* ================= LEFT — LOGO + DESCRIPTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis, neque vel sodales tincidunt, lorem risus dignissim leo,
              vitae cursus nulla ante nec neque.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4 justify-center lg:justify-start">
              {[twitterIcon, facebookIcon, instagramIcon, linkedinIcon].map(
                (icon, idx) => (
                  <motion.img
                    key={idx}
                    src={icon}
                    alt="social icon"
                    className="w-[22px] h-[22px] brightness-0 invert cursor-pointer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  />
                )
              )}
            </div>
          </motion.div>

          {/* ================= CENTER — COMPANY ================= */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li
                onClick={() => navigate("/")}
                className="hover:text-white transition cursor-pointer"
              >
                Home
              </li>

              <li
                onClick={() => navigate("/about")}
                className="hover:text-white transition cursor-pointer"
              >
                About Us
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Case Studies
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </motion.div>

          {/* ================= RIGHT — CORE SERVICES ================= */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="
              flex flex-col 
              items-center 
              lg:items-end 
              text-center 
              lg:text-right
            "
          >
            <h3 className="text-lg font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Leading custom",
                "Leading custom",
                "Leading custom",
                "Leading custom",
              ].map((service, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ===================== BOTTOM LINE ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-10 pt-6
            text-center
            text-sm
            text-white
            relative
          "
        >
          {/* GRADIENT DIVIDER */}
          <div
            className="absolute left-0 top-0 w-full h-px"
            style={{
              background:
                "linear-gradient(90deg,  #343442ff, #343442ff,  #343442ff)",
            }}
          />

          © 2025 SWL Solutions. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}











