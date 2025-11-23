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
      {/* Heading */}
      <div className="max-w-[1240px] mx-auto px-4 text-center mb-10 md:mb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white font-semibold text-[20px] md:text-[22px] leading-[28px]"
          style={{ fontFamily: "Inter" }}
        >
          Trusted by <span className="font-semibold">67+ startups and agencies</span>
        </motion.p>
      </div>

      {/* Logo list */}
      <div className="max-w-[1240px] mx-auto px-4">

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-center flex-wrap gap-16">
          {logos.map((logo, idx) => (
            <motion.img
              key={idx}
              src={logo.src}
              alt={logo.name}
              animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: ["easeInOut"],
              }}
              className="
                h-[32px]         /* UNIFORM HEIGHT */
                w-auto           /* AUTO WIDTH – NO CROPPING */
                object-contain   /* FULL LOGO ALWAYS VISIBLE */
                opacity-90 brightness-0 invert
                transition-all duration-300
              "
              whileHover={{
                scale: 1.12,
                opacity: 1,
                filter:
                  "brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.7))",
              }}
            />
          ))}
        </div>

        {/* MOBILE VIEW — HORIZONTAL SCROLL */}
        <div
          className="
            flex md:hidden gap-10 px-2
            overflow-x-auto scrollbar-hide
            snap-x snap-mandatory
            w-full
            py-3
          "
        >
          {logos.map((logo, idx) => (
            <motion.div key={idx} className="flex-shrink-0 snap-center">
              <motion.img
                src={logo.src}
                alt={logo.name}
                animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: ["easeInOut"],
                }}
                className="
                  h-[28px]         /* UNIFORM MOBILE HEIGHT */
                  w-auto           /* AUTO WIDTH – NO CROPPING */
                  object-contain   /* FULL LOGO ALWAYS VISIBLE */
                  opacity-90 brightness-0 invert
                  transition-all duration-300
                  
                "
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.7))",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
