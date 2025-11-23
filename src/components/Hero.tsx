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
          "linear-gradient(90deg, #0b0d17ff 0%, #121232ff 5%, rgba(0,0,0,1) 100%)",
      }}
    >
      {/* WRAPPER — Desktop fixed width, Mobile full width */}
      <div className="
        w-[1240px] mx-auto px-4 
        grid grid-cols-1 md:grid-cols-2 
        items-center gap-12
        lg:w-[1240px]
        md:w-[90%]
        sm:w-full sm:px-6
      ">

        {/* ------------------------------------------------------------------
            LEFT SECTION (TEXT)
        ------------------------------------------------------------------ */}
        <div
          className="
            flex flex-col justify-center items-start
            sm:items-center sm:text-center sm:w-full
          "
        >
          {/* MAIN HEADING */}
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
              width: "544px",
            }}
            className="
              text-white mb-6
              sm:text-[32px] sm:leading-[40px] sm:w-full
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
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "28px",
              color: "#D3D3D3",
              width: "544px",
            }}
            className="
              mb-8
              sm:w-full sm:text-center sm:text-[16px] sm:leading-[24px]
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
              flex flex-col sm:flex-col sm:items-center sm:w-full sm:gap-4
              gap-[10px]
            "
          >
            {/* OUR SERVICES */}
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
              className="text-white bg-transparent sm:mx-auto"
            >
              Our Services
            </motion.button>

            {/* CONTACT US */}
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
              className="sm:mx-auto"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------------
            RIGHT SECTION — IMAGE
        ------------------------------------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="
            relative flex justify-center md:justify-end
            sm:justify-center sm:mt-6
          "
        >
          <img
            src={heroImage}
            alt="AI Brain"
            style={{
              width: "496px",
              height: "512px",
            }}
            className="
              object-contain 
              drop-shadow-[0_0_40px_rgba(103,100,248,0.3)]
              sm:w-[80%] sm:h-auto
            "
          />
        </motion.div>
      </div>

      {/* MOBILE GRADIENT OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:hidden bg-gradient-to-t from-[#0A0A14] to-transparent" />
    </section>
  );
}











