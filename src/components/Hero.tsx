import { motion } from "framer-motion";
import heroImage from "../assets/brain.png";

export default function Hero() {
  const brand = "#6764F8";

  return (
    <section className="relative overflow-hidden pt-[160px]">
      {/* floating animation */}
      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div
        className="
          max-w-[1240px] mx-auto px-4 
          grid grid-cols-1 md:grid-cols-2 
          items-center gap-12
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            flex flex-col justify-center 
            items-start
            text-left
            max-md:items-center
            max-md:text-center
          "
        >
          {/* HEADING */}
          <motion.h1
            style={{ fontFamily: "Montserrat", fontWeight: 800 }}
            className="
              text-white mb-6
              text-[32px] leading-[40px]
              md:text-[44px] md:leading-[52px]
              w-full md:w-[544px]
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
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
            style={{ fontFamily: "Inter" }}
            className="
              text-[#D3D3D3] mb-8
              text-[16px] leading-[24px]
              md:text-[20px] md:leading-[28px]
              w-full md:w-[544px]
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
          >
            SWL Solutions is your dedicated partner in crafting bespoke software
            solutions that drive growth, efficiency, and innovation. From
            concept to code, we bring your vision to life.
          </motion.p>

          {/* BUTTONS – LAST */}
          <div
            className="
              flex gap-4
              flex-row
              max-md:flex-col 
              max-md:w-full 
              max-md:items-center
            "
          >
            {/* Our Services */}
            <motion.button
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.05)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
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

            {/* Contact Us */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(103,100,248,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7, ease: "easeOut" }}
              style={{ background: brand, fontFamily: "Inter" }}
              className="
                text-white 
                w-[169px] h-[44px] rounded-[8px]
                text-[16px] font-medium
              "
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE – FROM EXTREME RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 320 }}   // big x so it comes from far right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
          className="
            flex justify-center 
            md:justify-end
            max-md:mt-6
          "
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <img
            src={heroImage}
            alt="AI Brain"
            className="
              object-contain
              drop-shadow-[0_0_40px_rgba(103,100,248,0.4)]
              w-[80%] md:w-[496px] h-auto
            "
          />
        </motion.div>
      </div>
    </section>
  );
}






