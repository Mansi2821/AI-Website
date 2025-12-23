import { motion } from "framer-motion";
import aboutBg from "../assets/about-hero.jpg"; // same hero image

export default function AboutHero() {
  return (
    <section
      className="
        relative w-full
        h-[760px] md:h-[820px]
        flex items-center justify-center
      "
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* GRADIENT OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] px-6 text-center">
        {/* HEADING */}
        <motion.h1
          className="text-[44px] md:text-[50px] font-semibold mb-6"
          initial={{ opacity: 0, y: 30, rotateZ: -3 }}
          animate={{ opacity: 1, y: 0, rotateZ: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          About Us
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          className="text-[17px] md:text-[18px] leading-[30px] text-white/85"
          initial={{ opacity: 0, y: 30, rotateZ: -4 }}
          animate={{ opacity: 1, y: 0, rotateZ: 0 }}
          transition={{
            delay: 0.6, // ⬅ slight delay after heading
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          At SWL Solutions, we transform ideas into powerful digital products.
          As a modern IT company, we specialize in creating scalable,
          high-quality solutions that help businesses grow, innovate, and
          stay ahead in a fast-moving digital world.
        </motion.p>
      </div>
    </section>
  );
}









