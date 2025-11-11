import { motion } from "framer-motion";

// ✅ Local logo imports
import logo1 from "../assets/utosia.png";
import logo2 from "../assets/foxhub.png";
import logo3 from "../assets/radial.png";
import logo4 from "../assets/goldline.png";
import logo5 from "../assets/amara.png";
// import logo6 from "../assets/zenco.png";

export default function CompanyLogos() {
  const logos = [
    { name: "Utosia", src: logo1 },
    { name: "FoxHub", src: logo2 },
    { name: "Radiyal", src: logo3 },
    { name: "Goldline", src: logo4 },
    { name: "Amara", src: logo5 },
    { name: "Zenco", src: logo3 },
  ];

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 mx-4 sm:mx-8 md:mx-16 lg:mx-24 overflow-hidden rounded-2xl"
      style={{
        background:
          "linear-gradient(90deg, #0C0E1E 0%, #0A0A14 40%, #000000 100%)",
      }}
    >
      {/* ===================== Heading ===================== */}
      <div className="text-center mb-10 md:mb-14 px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/80 text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-snug"
        >
          Trusted by{" "}
          <span className="text-white font-bold">
            67+ startups and global agencies
          </span>
        </motion.p>
      </div>

      {/* ===================== Logo List ===================== */}
      <div
        className="relative flex items-center justify-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-8 md:px-12 overflow-x-auto scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            className="relative flex items-center justify-center flex-shrink-0 scroll-smooth"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{ scrollSnapAlign: "center" }}
          >
            {/* Glow Circle Behind Logo */}
            <motion.div
              className="absolute rounded-full blur-2xl"
              style={{
                background: "rgba(103,100,248,0.25)",
                width: "70px",
                height: "70px",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: idx * 0.3,
              }}
            />

            {/* Logo Image */}
            <motion.img
              src={logo.src}
              alt={logo.name}
              className="relative z-10 h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              whileHover={{
                scale: 1.12,
                y: -4,
                filter: "brightness(1.2)",
              }}
              whileTap={{
                scale: 0.98,
                filter: "brightness(1.1)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
            />
          </motion.div>
        ))}

        {/* ✨ Shimmer Sweep (Desktop only) */}
        <motion.div
          className="absolute top-0 left-[-40%] w-[40%] h-full z-20 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(103,100,248,0.25) 50%, rgba(255,255,255,0) 100%)",
          }}
          animate={{ x: ["-40%", "140%"] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
        />
      </div>

      {/* ===================== Edge Fades ===================== */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-[#0C0E1E] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
}
