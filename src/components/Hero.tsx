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
          "bg-gradient-to-r from-[#0A0A0F] to-[#151527]",
      }}
    >
      <div className="w-[1240px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center items-start">

          
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
            style={{
              fontFamily: "Montserrat",
              fontWeight: 800,     
              fontSize: "44px",
              lineHeight: "52px",
              letterSpacing: "0",
              width: "544px",
            }}
            className="text-white mb-6"
          >
            Shaping the Future <br />
            with{" "}
            <span style={{ color: brand, textShadow: `0 0 10px ${brand}` }}>
              AI-Driven
            </span>{" "}
            <br />
            Innovation
          </motion.h1>

          {/* PARAGRAPH TEXT — EXACT GREY + EXACT FONT */}
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0.3}
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: "0",
              color: "#D3D3D3",
              width: "544px",
            }}
            className="mb-8"
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
            className="flex flex-col sm:flex-row gap-[10px]"
          >
            {/* OUR SERVICES BUTTON (BLUE BORDER) */}
            <motion.button
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "169px",
                height: "44px",
                padding: "14px 24px",
                borderRadius: "8px",
                border: `1px solid ${brand}`,
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "16px",
              }}
              className="text-white bg-transparent"
            >
              Our Services
            </motion.button>

            {/* CONTACT US BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(103,100,248,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "169px",
                height: "44px",
                padding: "14px 24px",
                borderRadius: "8px",
                background: brand,
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "16px",
                color: "#fff",
              }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT SECTION — BRAIN IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <img
            src={heroImage}
            alt="AI Brain"
            style={{
              width: "496px",
              height: "512px",
            }}
            className="object-contain drop-shadow-[0_0_40px_rgba(103,100,248,0.3)]"
          />
        </motion.div>
      </div>

      {/* MOBILE GRADIENT OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:hidden bg-gradient-to-t from-[#0A0A14] to-transparent" />
    </section>
  );
}
