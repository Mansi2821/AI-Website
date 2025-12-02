import { motion } from "framer-motion";
import { useState } from "react";

import { FaRobot, FaBug, FaCode, FaCogs, FaCloud } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

import expertiseImage from "../assets/expertise.png";

export default function Expertise() {
  const brand = "#6764F8";

  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full py-24 text-white overflow-hidden"
    >
      {/* floating animation */}
      <style>{`
        @keyframes subtleFloat {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* HEADER */}
      <motion.div
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          style={{
            fontWeight: 600,
            fontSize: "28px",
            lineHeight: "40px",
            fontFamily: "Montserrat",
          }}
          className="mb-3"
        >
          Our Expertise
        </h2>

        <p
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "22px",
            color: "#D3D3D3",
          }}
          className="max-w-xl mx-auto"
        >
          We offer a comprehensive suite of services to build your next big idea.
        </p>
      </motion.div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex relative max-w-[1200px] mx-auto justify-center items-center">
        <motion.img
          src={expertiseImage}
          alt="Expertise Graphic"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            width: "1117px",
            height: "513px",
            opacity: 1,
            transform: "rotate(0deg)",
            animation: "subtleFloat 6s ease-in-out infinite", // ✨ floating motion
          }}
          className="object-contain drop-shadow-[0_0_40px_rgba(103,100,248,0.3)]"
        />
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center gap-6 px-6 mt-10">
        {[
          { id: "auto", title: "AI & Automation", icon: <FaRobot /> },
          { id: "ml", title: "AI & Machine Learning", icon: <GiArtificialIntelligence /> },
          { id: "qa", title: "QA & Testing", icon: <FaBug /> },
          { id: "web", title: "Web & Mobile Development", icon: <FaCode /> },
          { id: "backend", title: "Backend & APIs", icon: <FaCogs /> },
          { id: "cloud", title: "Cloud & AWS Solutions", icon: <FaCloud /> },
        ].map((item, idx) => {
          const isActive = active === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-[#1B1B2A]/80 border border-[#3B3473]"
              onClick={() => setActive(item.id)}
            >
              {/* ICON BOX */}
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  backgroundColor: isActive ? `${brand}22` : "transparent",
                  boxShadow: isActive
                    ? `0 0 14px ${brand}`
                    : "0 0 6px rgba(103,100,248,0.20)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "8px",
                  border: `1px solid ${brand}`,
                  color: brand,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </motion.div>

              {/* TEXT */}
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: isActive ? brand : "#ffffff",
                  transition: "0.3s",
                }}
              >
                {item.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}










