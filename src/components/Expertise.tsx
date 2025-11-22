import { motion } from "framer-motion";
import { useState } from "react";

import { FaRobot, FaBug, FaCode, FaCogs, FaCloud } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

import centerGraphic from "../assets/Group 24.png";

export default function Expertise() {
  const brand = "#6764F8";
  const [hovered, setHovered] = useState<string | null>(null);

  // Perfect vertical alignment from screenshot
  const itemsLeft = [
    { id: "auto", title: "AI & Automation", icon: <FaRobot />, pos: "top-[4%]" },
    { id: "ml", title: "AI & Machine Learning", icon: <GiArtificialIntelligence />, pos: "top-[45%]" },
    { id: "qa", title: "QA & Testing", icon: <FaBug />, pos: "top-[88%]" },
  ];

  const itemsRight = [
    { id: "web", title: "Web & Mobile Development", icon: <FaCode />, pos: "top-[4%]" },
    { id: "backend", title: "Backend & APIs", icon: <FaCogs />, pos: "top-[45%]" },
    { id: "cloud", title: "Cloud & AWS Solutions", icon: <FaCloud />, pos: "top-[88%]" },
  ];

  return (
    <section className="relative w-full py-24 text-white bg-gradient-to-r from-[#0A0A0F] to-[#151527] overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16 px-4">
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
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex relative max-w-[1200px] mx-auto justify-center items-center">

        {/* CENTER GRAPHIC */}
        <img
          src={centerGraphic}
          alt="Expertise Center Graphic"
          style={{ width: "605px", height: "460px" }}
          className="object-contain z-[5]"
        />

        {/* LEFT SIDE */}
        {itemsLeft.map((item, idx) => (
          <motion.div
            key={item.id}
            className={`absolute left-0 ${item.pos} flex items-center gap-4`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transform: "translateY(-50%) translateX(80px)", // ← moved towards center
            }}
          >
            {/* TEXT */}
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                color: hovered === item.id ? brand : "#ffffff",
                transition: "0.25s",
              }}
            >
              {item.title}
            </span>

            {/* ICON BOX */}
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "8px",
                border: `1px solid ${brand}`,
                color: brand,
                background: hovered === item.id ? `${brand}22` : "transparent",
                boxShadow:
                  hovered === item.id
                    ? `0 0 14px ${brand}`
                    : "0 0 8px rgba(103,100,248,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: hovered === item.id ? "scale(1.15)" : "scale(1)",
                transition: "0.3s",
              }}
            >
              {item.icon}
            </div>
          </motion.div>
        ))}

        {/* RIGHT SIDE */}
        {itemsRight.map((item, idx) => (
          <motion.div
            key={item.id}
            className={`absolute right-0 ${item.pos} flex items-center gap-4 justify-end`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transform: "translateY(-50%) translateX(-80px)", // ← moved towards center
            }}
          >
            {/* ICON BOX */}
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "8px",
                border: `1px solid ${brand}`,
                color: brand,
                background: hovered === item.id ? `${brand}22` : "transparent",
                boxShadow:
                  hovered === item.id
                    ? `0 0 14px ${brand}`
                    : "0 0 8px rgba(103,100,248,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: hovered === item.id ? "scale(1.15)" : "scale(1)",
                transition: "0.3s",
              }}
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                color: hovered === item.id ? brand : "#ffffff",
                transition: "0.25s",
              }}
            >
              {item.title}
            </span>
          </motion.div>
        ))}

      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col items-center gap-6 px-6 mt-10">
        {[...itemsLeft, ...itemsRight].map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-[#1B1B2A]/80 border border-[#3B3473]"
          >
            <div
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
            </div>

            <span
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}


