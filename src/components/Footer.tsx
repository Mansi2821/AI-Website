import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import mailImage from "../assets/mail.png"; // right-side image

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-16 
            flex flex-col md:flex-row items-center justify-between
            shadow-[0_0_25px_rgba(162,135,255,0.25)]"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(90,80,200,0.9) 0%,
              rgba(70,60,160,0.85) 15%,
              rgba(25,20,45,0.95) 50%,
              rgba(0,0,0,1) 100%
            )`,
          }}
        >
          {/* Left Text and Form */}
          <div className="relative z-10 w-full md:w-1/2 p-10">
            <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed mb-6">
              Get the latest insights, project updates, and industry trends
              delivered straight to your inbox.
            </p>

            {/* Subscribe Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white text-sm px-4 py-3 rounded-lg outline-none w-full border border-white/20 focus:border-[#A287FF]/60 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#5B5CF0] to-[#8B6BFF] hover:from-[#6C6DFF] hover:to-[#9C7FFF]
                  text-white text-sm font-semibold px-5 py-3 rounded-lg 
                  transition-all duration-300 shadow-[0_0_15px_rgba(162,135,255,0.4)] hover:shadow-[0_0_25px_rgba(162,135,255,0.6)]"
              >
                Subscribe
              </button>
            </motion.form>
          </div>

          {/* Right Image — Full Fit */}
          <div className="absolute top-0 bottom-0 right-0 w-full md:w-1/2 lg:w-[45%]">
            <img
              src={mailImage}
              alt="Newsletter Illustration"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left mb-10 relative z-10">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">SWL Solutions</h2>
            <p className="text-white/70 text-sm mb-4 leading-relaxed max-w-sm">
              Empowering innovation through technology — crafting digital
              experiences that redefine what’s possible.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-white/70">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-2 rounded-lg hover:bg-[#A287FF] hover:text-white transition-all duration-300"
                  >
                    <Icon size={14} />
                  </motion.a>
                )
              )}
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
              {["Home", "About Us", "Case Studies", "Contact Us"].map(
                (link, idx) => (
                  <li
                    key={idx}
                    className="hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    {link}
                  </li>
                )
              )}
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
              {[
                "Web & App Development",
                "Cloud & DevOps",
                "AI & Machine Learning",
                "Product Design",
                "Quality Assurance",
              ].map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
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
