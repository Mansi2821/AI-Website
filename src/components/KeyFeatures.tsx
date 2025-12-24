import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  FiCode,
  FiGitBranch,
  FiLayers,
  FiGithub,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";
import { MdAccessibility, MdSupport } from "react-icons/md";
import { HiOutlinePuzzle } from "react-icons/hi";
import { BsPalette, BsWindow } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";

/* ================= DATA ================= */

const features = [
  { icon: FiCode, label: "Custom Software Development" },
  { icon: FiGitBranch, label: "Version Control & Backups" },
  { icon: HiOutlinePuzzle, label: "Robust Integration" },
  { icon: FiGithub, label: "Open Source Software" },
  { icon: MdAccessibility, label: "Accessibility" },
  { icon: BsWindow, label: "Browser Compatible" },
  { icon: FiShield, label: "Security" },
  { icon: MdSupport, label: "Support" },
  { icon: RiBuildingLine, label: "Strong Brand Identity" },
  { icon: FiLayers, label: "MVC Architecture" },
  { icon: BsPalette, label: "UI/UX" },
  { icon: FiRefreshCw, label: "Migration" },
];

/* ================= ANIMATIONS ================= */

// Heading & text → from RIGHT
const textVariant: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

// Cards → from BOTTOM
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function KeyFeatures() {
  return (
    <section className="w-full bg-black pt-14 pb-20">
      {/* 🔥 SAME CONTAINER AS NAVBAR */}
      <div className="max-w-[1240px] mx-auto px-4">
        {/* ================= HEADING ================= */}
        <motion.h2
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="text-[24px] sm:text-[28px] leading-[36px] sm:leading-[40px] font-semibold text-white mb-3"
          style={{ fontFamily: "Montserrat" }}
        >
          Key Features
        </motion.h2>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.2}
          className="max-w-[720px] text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-white/75 mb-10"
          style={{ fontFamily: "Inter", fontWeight: 400 }}
        >
          We deliver projects on time and within budget while maintaining
          exceptional quality. End-to-end support is provided, with a strong
          commitment to meeting all required features.
        </motion.p>

        {/* ================= FEATURE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const rowDelay = Math.floor(idx / 3) * 0.35;
            const itemDelay = rowDelay + (idx % 3) * 0.12;

            return (
              <motion.div
                key={idx}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={itemDelay}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(103,100,248,0.35)",
                }}
                className="
                  w-full
                  min-h-[72px]
                  flex items-center gap-4
                  px-4 py-3
                  rounded-lg
                  border border-[#6764F8]
                  transition-all
                "
                style={{
                  background:
                    "linear-gradient(232.77deg, rgba(77, 74, 212, 0.6) 2.17%, #000000 84.41%)",
                }}
              >
                {/* ICON BOX */}
                <div
                  className="
                    w-[40px] h-[40px]
                    flex items-center justify-center
                    rounded-md border shrink-0
                  "
                  style={{ borderColor: "#4D4AD4" }}
                >
                  <item.icon size={18} className="text-white" />
                </div>

                {/* TEXT */}
                <span
                  className="text-[15px] sm:text-[16px] text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}











