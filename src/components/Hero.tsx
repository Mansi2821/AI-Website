import { motion } from "framer-motion";
import heroImage from "../assets/brain.png";

export default function Hero() {
  const brand = "#6764F8";

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
      className="relative overflow-hidden pt-[160px]"
      style={{
        background:
          "linear-gradient(90deg, #1f2233ff 0%, #121232ff 5%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        className="
          max-w-[1240px] mx-auto px-4 
          grid grid-cols-1 md:grid-cols-2 
          items-center gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex flex-col justify-center 
            items-start                /* desktop left */
            text-left                  /* desktop left */
            max-md:items-center        /* mobile center */
            max-md:text-center         /* mobile center */
          "
        >
          {/* HEADING */}
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
            style={{ fontFamily: "Montserrat", fontWeight: 800 }}
            className="
              text-white mb-6
              text-[32px] leading-[40px]
              md:text-[44px] md:leading-[52px]
              w-full md:w-[544px]
            "
          >
            Shaping the Future <br />
            with{" "}
            <span style={{ color: brand, textShadow: `0 0 10px ${brand}` }}>
              AI-Driven
            </span>{" "}
            <br />
            Innovation
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            style={{ fontFamily: "Inter" }}
            className="
              text-[#D3D3D3] mb-8
              text-[16px] leading-[24px]
              md:text-[20px] md:leading-[28px]
              w-full md:w-[544px]
            "
          >
            SWL Solutions is your dedicated partner in crafting bespoke software
            solutions that drive growth, efficiency, and innovation. From
            concept to code, we bring your vision to life.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="
              flex gap-4
              flex-row               /* desktop row */
              max-md:flex-col        /* mobile column */
              max-md:w-full 
              max-md:items-center
            "
          >
            <motion.button
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                border: `1px solid ${brand}`,
                fontFamily: "Inter",
              }}
              className="
                text-white bg-transparent
                w-[169px] h-[44px] rounded-[8px]
                text-[16px] font-medium
              "
            >
              Our Services
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(103,100,248,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ background: brand, fontFamily: "Inter" }}
              className="
                text-white 
                w-[169px] h-[44px] rounded-[8px]
                text-[16px] font-medium
              "
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="
            flex justify-center 
            md:justify-end
            max-md:mt-6
          "
        >
          <img
            src={heroImage}
            alt="AI Brain"
            className="
              object-contain
              drop-shadow-[0_0_40px_rgba(103,100,248,0.3)]
              w-[80%] md:w-[496px] h-auto
            "
          />
        </motion.div>
      </div>

      {/* Below fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 max-md:hidden bg-gradient-to-t from-[#0A0A14] to-transparent" />
    </section>
  );
}









