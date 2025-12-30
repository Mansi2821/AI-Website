import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

/* ================= SAFE VARIANTS (STRICT TS) ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
} as const;

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
} as const;

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
} as const;

/* ================= COMPONENT ================= */

export default function BuildTogether() {
  return (
    <section className="w-full bg-black py-15">
      <div className="max-w-[1210px] mx-auto px-4">

        {/* ================= HEADING ================= */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="text-center text-[28px] md:text-[36px] font-semibold mb-6"
          style={{ fontFamily: "Montserrat", color: "#6764F8" }}
        >
          Let’s Build Something Impactful Together with SWL Solutions
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-[900px] mx-auto text-center text-white/80 text-[16px] leading-[26px] mb-20"
          style={{ fontFamily: "Inter" }}
        >
          At SWL Solutions, we help businesses of all sizes turn ideas into
          scalable, high-performing digital products. Our expertise spans
          custom software development, web and mobile applications, cloud
          solutions, and modern UI/UX design.
        </motion.p>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT ================= */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="text-[22px] md:text-[26px] font-semibold mb-4"
              style={{ fontFamily: "Montserrat", color: "#6764F8" }}
            >
              Estimate Your Project
            </motion.h3>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white/80 text-[16px] leading-[26px] mb-8"
              style={{ fontFamily: "Inter" }}
            >
              Share your project requirements with us and get a clear,
              transparent estimate tailored to your goals. Our experts ensure
              timely delivery and quality execution.
            </motion.p>

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(103,100,248,0.6)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg text-white font-medium"
              style={{ background: "#6764F8", fontFamily: "Inter" }}
            >
              Estimate Your Project
            </motion.button>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="
              rounded-xl p-8
              border border-white/10
              bg-gradient-to-br from-[#6764F820] to-black
            "
          >
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="text-[26px] font-semibold mb-6"
              style={{ fontFamily: "Montserrat" }}
            >
              Our Achievements
            </motion.h3>

            <ul className="space-y-4 mb-8">
              {[
                "7+ Years of Industry Experience",
                "Skilled In-House Development Team",
                "Trusted by Growing Businesses",
                "Transparent Engagement Models",
                "Proven Delivery Track Record",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + idx * 0.15 }}
                  className="flex items-center gap-3 text-white/85"
                  style={{ fontFamily: "Inter" }}
                >
                  <FiCheckCircle size={20} color="#6764F8" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-4"
            >
              <div className="text-[28px] font-semibold">5.0</div>
              <div className="text-[#FFB400] text-lg">★★★★★</div>
              <span className="text-white/60 text-sm">
                Based on client reviews
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}