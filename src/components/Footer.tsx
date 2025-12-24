import { motion } from "framer-motion";

import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook2.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import mailImage from "../assets/mail.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className=" text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* ===================== STAY UPDATED BLOCK ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative flex flex-col md:flex-row 
            items-center md:items-start justify-between 
            mb-20 overflow-hidden
            text-center md:text-left
          "
          style={{
            width: "100%",
            minHeight: "304px",
            borderRadius: "16px",
            border: "1px solid #41414199",
            background:
              "linear-gradient(98.63deg, rgba(77, 74, 212, 0.24) 1.57%, rgba(2, 1, 23, 0.6) 65%)",
            backdropFilter: "blur(2px)",
          }}
        >

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-20 w-full md:w-1/2 p-10 flex flex-col items-center md:items-start"
          >
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
            <motion.form
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="
                flex flex-col sm:flex-row 
                items-center md:items-center 
                gap-3 w-full justify-center md:justify-start
              "
            >
              <motion.input
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                type="email"
                placeholder="Enter your email"
                style={{
                  height: "44px",
                  borderRadius: "8px",
                  background: "#6764F81A",
                  border: "1px solid #D5DAE180",
                  boxShadow: "0px 1px 2px #0000000D",
                }}
                className="px-4 text-white outline-none text-sm w-full sm:w-[274px]"
              />

              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                type="submit"
                style={{
                  height: "44px",
                  borderRadius: "8px",
                  padding: "14px 24px",
                  background: "#6764F8",
                }}
                className="text-white font-semibold text-sm w-full sm:w-[169px]"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-[200px] md:h-full mt-4 md:mt-0 z-10 flex justify-center md:block"
          >
            <img
              src={mailImage}
              alt="Mail Illustration"
              className="
                absolute md:relative inset-0 
                w-full h-full object-cover object-center 
                md:rounded-r-[16px] rounded-b-[16px]
              "
            />
          </motion.div>
        </motion.div>

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

          {/* LEFT — LOGO + SOCIAL */}
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
              Empowering innovation through technology — crafting digital
              experiences that redefine what’s possible.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4 justify-center lg:justify-start">
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
          </motion.div>

          {/* CENTER — COMPANY */}

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

          {/* RIGHT — CORE SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start lg:pl-50"
          >
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
  {/* STRONG DIVIDER */}
  <div
    className="absolute left-0 top-0 w-full h-px"
    style={{
      background:
        "linear-gradient(90deg,  #343442ff,  #343442ff,  #343442ff)",
    }}
  />

  © 2025 SWL Solutions. All Rights Reserved.
</motion.div>
      </div>
    </footer>
  );
}










