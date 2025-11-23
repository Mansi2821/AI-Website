import { motion } from "framer-motion";

// Local logo imports
import logo1 from "../assets/utosia.png";
import logo2 from "../assets/foxhub.png";
import logo3 from "../assets/radiyal.png";
import logo4 from "../assets/goldline.png";
import logo5 from "../assets/amara.png";
import logo6 from "../assets/utosia2.png";

export default function CompanyLogos() {
  const logos = [
    { name: "Utosia", src: logo1 },
    { name: "FoxHub", src: logo2 },
    { name: "Radiyal", src: logo3 },
    { name: "Goldline", src: logo4 },
    { name: "Amara", src: logo5 },
    { name: "Zenco", src: logo6 },
  ];

  return (
    <section
      className="relative py-12 sm:py-14 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #0C0E1E 0%, #0A0A14 40%, #000000 100%)",
      }}
      
    >
      {/* ===================== Heading ===================== */}
      <div className="w-[1240px] mx-auto px-4 text-center mb-10 md:mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontWeight: 600,
            fontFamily: "Inter",
            fontSize: "22px",
            lineHeight: "28px",
            letterSpacing: "0",
          }}
          className="text-white"
        >
          Trusted by <span className="font-semibold">67+ startups and agencies</span>
        </motion.p>
      </div>

      {/* ===================== LOGO LIST ===================== */}
      <div className="w-[1240px] mx-auto px-4">

        {/* DESKTOP — One Single Line (no scroll) */}
        <div
          className="hidden md:flex justify-center items-center"
          style={{
            width: "1120px",
            maxWidth: "1120px",
            gap: "80px",
            paddingTop: "5.5px",
            paddingBottom: "5.5px",
            height: "48px",
            margin: "0 auto",
          }}
        >
          {logos.map((logo, idx) => (
            <motion.img
              key={idx}
              src={logo.src}
              alt={logo.name}
              style={{
                width: "97.5px",
                height: "25px",
                filter: "brightness(0) invert(1)", // makes every logo white
              }}
              className="opacity-90 transition-all duration-300"
              whileHover={{
                scale: 1.12,
                opacity: 1,
                filter:
                  "brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.7))",
              }}
              whileTap={{ scale: 0.96 }}
            />
          ))}
        </div>

        {/* MOBILE — Horizontal Scroll List */}
        <div
          className="flex md:hidden items-center overflow-x-auto scrollbar-hide px-2"
          style={{
            gap: "40px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 scroll-smooth"
              style={{ scrollSnapAlign: "center" }}
            >
              <motion.img
                src={logo.src}
                alt={logo.name}
                style={{
                  width: "97.5px",
                  height: "25px",
                  filter: "brightness(0) invert(1)", // white logos
                }}
                className="opacity-90 transition-all duration-300"
                whileHover={{
                  scale: 1.12,
                  opacity: 1,
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.7))",
                }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
