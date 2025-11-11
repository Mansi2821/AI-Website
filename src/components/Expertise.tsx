import { motion } from "framer-motion";
import { useState } from "react";
import centerIcon from "../assets/code-icon.png";
import { FaCloud, FaCogs, FaRobot, FaBug, FaCode } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Expertise() {
  const brand = "#6764F8";
  const [hovered, setHovered] = useState<string | null>(null);

  // Arrow path positions for desktop
  const positions = {
    top1: 16,
    top2: 50,
    top3: 84,
  };

  const leftItems = [
    { id: "auto", title: "AI & Automation", icon: <FaRobot />, top: positions.top1 },
    { id: "ml", title: "AI & Machine Learning", icon: <GiArtificialIntelligence />, top: positions.top2 },
    { id: "qa", title: "QA & Testing", icon: <FaBug />, top: positions.top3 },
  ];

  const rightItems = [
    { id: "web", title: "Web & Mobile Development", icon: <FaCode />, top: positions.top1 },
    { id: "backend", title: "Backend & APIs", icon: <FaCogs />, top: positions.top2 },
    { id: "cloud", title: "Cloud & AWS Solutions", icon: <FaCloud />, top: positions.top3 },
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Expertise</h2>
        <p className="text-white/70 text-base max-w-2xl mx-auto">
          We offer a comprehensive suite of services to build your next big idea.
        </p>
      </div>

      {/* 🌐 DESKTOP / TABLET LAYOUT */}
      <div className="hidden md:flex relative justify-center items-center max-w-7xl mx-auto px-6 sm:px-8 md:px-12" style={{ minHeight: 520 }}>
        {/* SVG Curves */}
        <svg
          className="absolute w-full h-full left-0 right-0 pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill={brand} />
            </marker>

            <linearGradient id="glow-gradient">
              <stop offset="0%" stopColor={brand}>
                <animate attributeName="offset" values="-1; 2" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="white" stopOpacity="0.7">
                <animate attributeName="offset" values="-0.5; 2.5" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor={brand}>
                <animate attributeName="offset" values="0; 3" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          {/* Left Curves */}
          <motion.path d="M310,80 C420,200 500,200 500,250" stroke="url(#glow-gradient)" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
          <motion.path d="M310,250 C420,260 500,260 500,250" stroke="url(#glow-gradient)" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
          <motion.path d="M310,420 C420,300 500,300 500,250" stroke="url(#glow-gradient)" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />

          {/* Right Curves */}
          <motion.path d="M690,80 C580,200 500,200 500,250" stroke="url(#glow-gradient)" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
          <motion.path d="M690,250 C580,260 500,260 500,250" stroke="url(#glow-gradient)" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
          <motion.path d="M690,420 C580,300 500,300 500,250" stroke="url(#glow-gradient)" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
        </svg>

        {/* Central Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full flex items-center justify-center"
          style={{
            background: "radial-gradient(circle at center, #0A0A0F 0%, #111129 100%)",
            boxShadow: "0 0 50px rgba(103,100,248,0.4)",
            border: `2px solid ${brand}`,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-brand/20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-brand/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <img src={centerIcon} alt="Center Icon" className="w-16 sm:w-20 h-auto relative z-10" />
        </motion.div>

        {/* LEFT SIDE */}
        {leftItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.12 }}
            viewport={{ once: true }}
            className="absolute flex items-center gap-3 sm:gap-4 z-30"
            style={{ top: `${item.top}%`, left: "8%", transform: "translateY(-50%)" }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className="transition-all duration-300 text-sm sm:text-base"
              style={{
                color: hovered === item.id ? brand : "rgba(255,255,255,0.95)",
                fontWeight: hovered === item.id ? 600 : 400,
                textShadow: hovered === item.id ? `0 0 10px ${brand}` : "none",
              }}
            >
              {item.title}
            </span>

            <div
              className="transition-all duration-300 flex items-center justify-center rounded-lg"
              style={{
                width: 42,
                height: 42,
                background: "rgba(0,0,0,0.6)",
                border: `1px solid ${brand}55`,
                boxShadow: hovered === item.id ? `0 0 20px ${brand}` : `0 0 10px rgba(103,100,248,0.25)`,
                color: brand,
                transform: hovered === item.id ? "scale(1.1)" : "scale(1)",
              }}
            >
              {item.icon}
            </div>
          </motion.div>
        ))}

        {/* RIGHT SIDE */}
        {rightItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.12 }}
            viewport={{ once: true }}
            className="absolute flex items-center gap-3 sm:gap-4 flex-row-reverse z-30"
            style={{ top: `${item.top}%`, right: "8%", transform: "translateY(-50%)" }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className="transition-all duration-300 text-sm sm:text-base"
              style={{
                color: hovered === item.id ? brand : "rgba(255,255,255,0.95)",
                fontWeight: hovered === item.id ? 600 : 400,
                textShadow: hovered === item.id ? `0 0 10px ${brand}` : "none",
              }}
            >
              {item.title}
            </span>

            <div
              className="transition-all duration-300 flex items-center justify-center rounded-lg"
              style={{
                width: 42,
                height: 42,
                background: "rgba(0,0,0,0.6)",
                border: `1px solid ${brand}55`,
                boxShadow: hovered === item.id ? `0 0 20px ${brand}` : `0 0 10px rgba(103,100,248,0.25)`,
                color: brand,
                transform: hovered === item.id ? "scale(1.1)" : "scale(1)",
              }}
            >
              {item.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📱 MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col items-center gap-6 px-6 mt-10">
        {[...leftItems, ...rightItems].map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#1B1B2A]/80 border border-[#3B3473] shadow-[0_0_15px_rgba(103,100,248,0.3)]"
          >
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: 48,
                height: 48,
                background: "rgba(0,0,0,0.6)",
                border: `1px solid ${brand}55`,
                boxShadow: `0 0 10px rgba(103,100,248,0.3)`,
                color: brand,
              }}
            >
              {item.icon}
            </div>
            <span className="text-sm sm:text-base font-medium text-white">{item.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}








