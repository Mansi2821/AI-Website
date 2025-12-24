import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import visionImg from "../assets/vision-mission.jpg";

/* ================= FLIP VARIANTS ================= */

// Flip from bottom (for text)
const flipUp: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 90,
    transformPerspective: 1000,
  },
  visible: (delay: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

// Flip from top (for image)
const flipDown: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
    transformPerspective: 1200,
  },
  visible: (delay: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

export default function VisionMission() {
  return (
    <section className="w-full py-20 md:py-24 bg-black">
      <div className="max-w-[1441px] mx-auto px-6 md:px-12">

        {/* ================= HEADING ================= */}
        <motion.h2
          variants={flipUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="text-[28px] leading-[40px] font-semibold text-white text-center mb-3"
          style={{ fontFamily: "Montserrat" }}
        >
          Vision & Mission Statement
        </motion.h2>

        {/* ================= SUBTEXT ================= */}
        <motion.p
          variants={flipUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.2}
          className="max-w-[760px] mx-auto text-[16px] leading-[24px] text-white/75 text-center mb-10"
          style={{ fontFamily: "Inter", fontWeight: 400 }}
        >
          To drive business success by providing innovative, reliable technology
          solutions that accelerate growth and deliver measurable value for our
          clients.
        </motion.p>

        {/* ================= IMAGE ================= */}
        <motion.div
          variants={flipDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.45}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 35px rgba(103,100,248,0.45)",
          }}
          className="
            mx-auto
            w-full max-w-[1200px]
            h-[456px]
            rounded-[16px]
            p-[10px]
            transition-all duration-300
          "
          style={{
            background:
              "linear-gradient(129.92deg, #6764F8 2.11%, rgba(103, 100, 248, 0) 97.23%)",
          }}
        >
          <img
            src={visionImg}
            alt="Vision and Mission"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </motion.div>

        {/* ================= BOTTOM TEXT ================= */}
        <motion.p
          variants={flipUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.7}
          className="max-w-[820px] mx-auto mt-10 text-[16px] leading-[24px] text-white/70 text-center"
          style={{ fontFamily: "Inter", fontWeight: 400 }}
        >
          Our developer community brings together seasoned tech experts who
          embrace our core principles—balanced product orientation, practical
          learning, focused outcomes, and sustainable work-life balance.
        </motion.p>

      </div>
    </section>
  );
}














