import { motion } from "framer-motion";
import heroImage from "../assets/brain.png"; // circuit brain image

export default function Hero() {
  const brand = "#6764F8";

  // Animation variants for staggered entrance
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <section
      className="relative text-white py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #0C0E1E 0%, #0A0A14 40%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-10">
        {/* ================= Left Section ================= */}
        <div className="text-left flex flex-col justify-center items-start">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-[1.15] mb-6"
          >
            Shaping the Future <br className="hidden sm:block" />
            with{" "}
            <span
              style={{
                color: brand,
                textShadow: `0 0 10px ${brand}`,
              }}
            >
              AI-Driven
            </span>{" "}
            Innovation
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          >
            SWL Solutions is your dedicated partner in crafting bespoke software
            solutions that drive growth, efficiency, and innovation. From
            concept to code, we bring your vision to life.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Outlined Button */}
            <motion.button
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.1)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 rounded-md font-medium border text-white transition-all duration-300 text-sm sm:text-base"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                background: "transparent",
              }}
            >
              Our Services
            </motion.button>

            {/* Filled Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(103,100,248,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 rounded-md font-medium text-white text-sm sm:text-base transition-all duration-300"
              style={{
                background: brand,
                boxShadow: "0 0 12px rgba(103,100,248,0.4)",
              }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* ================= Right Section (Brain Image) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <img
            src={heroImage}
            alt="AI Brain"
            className="w-[75%] sm:w-[70%] md:w-[85%] lg:w-[90%] max-w-[420px] object-contain 
                       drop-shadow-[0_0_40px_rgba(103,100,248,0.3)]"
          />
        </motion.div>
      </div>

      {/* Gradient Overlay (for mobile readability) */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:hidden bg-gradient-to-t from-[#0A0A14] to-transparent" />
    </section>
  );
}
