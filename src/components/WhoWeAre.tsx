import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import img1 from "../assets/who-1.jpg";
import img2 from "../assets/who-2.jpg";
import img3 from "../assets/who-3.jpg";

/* ================= VARIANTS ================= */

// Images → slide from LEFT
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

// Text → slide from RIGHT
const textVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function WhoWeAre() {
  return (
    // ⬇ reduced bottom padding
    <section className="w-full pt-24 md:pt-32 pb-16 bg-black">
      <div
        className="
          max-w-[1441px]
          mx-auto
          px-6 md:px-12
          flex flex-col lg:flex-row
          items-center
          gap-16 lg:gap-24
        "
      >
        {/* ================= IMAGES ================= */}
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {[img1, img2].map((img, i) => (
              <motion.div
                key={i}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 0.45}

                /* 🔥 IMAGE HOVER EFFECT */
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(103,100,248,0.45)",
                }}

                className="
                  w-[293px] h-[307px]
                  rounded-[16px] p-[10px]
                  transition-all duration-300
                "
                style={{
                  background:
                    "linear-gradient(99.76deg, #6764F8 1.58%, rgba(103, 100, 248, 0) 100.3%)",
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </motion.div>
            ))}
          </div>

          {/* RIGHT CENTER IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.95}

            /* 🔥 IMAGE HOVER EFFECT */
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(103,100,248,0.45)",
            }}

            className="
              flex items-center
              transition-all duration-300
            "
          >
            <div
              className="w-[293px] h-[307px] rounded-[16px] p-[10px]"
              style={{
                background:
                  "linear-gradient(99.76deg, #6764F8 1.58%, rgba(103, 100, 248, 0) 100.3%)",
              }}
            >
              <img
                src={img3}
                alt=""
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= TEXT CONTENT ================= */}
        <div className="w-full max-w-[480px] flex flex-col gap-3 text-white lg:ml-[16px]">
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1.25}
            className="flex items-end gap-2 mb-4"
          >
            <span className="text-5xl font-semibold">7+</span>
            <span className="text-sm text-white/70 leading-tight">
              Years <br /> Experience
            </span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1.5}
            className="text-[28px] leading-[40px] font-semibold"
            style={{ fontFamily: "Montserrat" }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1.75}
            className="text-[16px] leading-[24px] text-white/75"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
          >
            We are a team of passionate developers, designers, and technology
            enthusiasts committed to delivering exceptional digital experiences.
            With a focus on creativity, precision, and problem-solving{" "}
            <span className="font-semibold text-white">SWL Solutions</span>{" "}
            has become a trusted partner for companies looking to modernize and
            elevate their digital presence.
          </motion.p>

          {/* 🔥 BUTTON HOVER EFFECT */}
          <motion.button
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2.0}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 0 25px rgba(103,100,248,0.6)",
            }}
            className="
              mt-6 w-[160px] h-[44px]
              rounded-lg border border-[#6764F8]
              text-sm font-medium
              transition-all duration-300
            "
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}








