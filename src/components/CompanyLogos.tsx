import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CompanyLogos() {
  const brands = [
    "UTOSIA",
    "FOX HUB",
    "RADIYAL",
    "GOLDLINE",
    "AMARA",
    "ZENCO",
  ];

  const duplicated = [...brands, ...brands];
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 60, // slow scroll
        ease: "linear",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () =>
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    });

  return (
    <section
      className="relative overflow-hidden py-4 md:py-6" // reduced top padding
      style={{
        background:
          "linear-gradient(90deg, #0C0E1E 0%, #0A0A14 35%, #000000 100%)",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10"> {/* more space below heading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg sm:text-xl md:text-3xl font-semibold"
        >
          Trusted by{" "}
          <span className="text-white font-bold">
            67+ startups and agencies
          </span>
        </motion.p>
      </div>

      {/* Auto-scroll logo list */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="overflow-hidden w-full"
      >
        <motion.div
          animate={controls}
          className="flex items-center gap-10 sm:gap-16 px-6"
        >
          {duplicated.map((name, idx) => (
            <motion.div
              key={`${name}-${idx}`}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              viewport={{ once: true }}
            >
              {/* Text logo badge */}
              <div
                className="px-6 py-3 rounded-md text-white/90 font-semibold tracking-wide text-lg sm:text-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  minWidth: 140,
                  textAlign: "center",
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "scale(1)";
                }}
              >
                {name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0C0E1E] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
}



