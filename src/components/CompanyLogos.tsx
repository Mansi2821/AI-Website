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
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 overflow-hidden">
      {/* marquee animation */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

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
        <div className="hidden md:block overflow-hidden">
          <div
            className="flex gap-16 w-max"
            style={{
              animation: "marquee 80s linear infinite",
              height: "60px",            
              alignItems: "center",      
              paddingTop: "6px",         
              paddingBottom: "6px",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
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
                  h-[32px]
                  w-auto
                  object-contain
                  opacity-90 brightness-0 invert
                  transition-all duration-300
                "
                whileHover={{
                  scale: 1.12,
                  opacity: 1,
                  filter:
                    'brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.7))',
                }}
              />
            ))}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden overflow-hidden py-2">
          <div
            className="flex gap-10 w-max px-2"
            style={{
              animation: "marquee 30s linear infinite",
              height: "48px",          
              alignItems: "center",
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
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
                    h-[28px]
                    w-auto
                    object-contain
                    opacity-90 brightness-0 invert
                    transition-all duration-300
                  "
                  whileHover={{
                    scale: 1.1,
                    opacity: 1,
                    filter:
                      'brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.7))',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}




