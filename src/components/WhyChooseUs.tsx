import { motion } from "framer-motion";
import pointer from "../assets/pointer.png";
import handshake from "../assets/handshake.png";
import workspace from "../assets/workspace.png";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Proven Expertise",
      desc: "Experienced team skilled in web, mobile, and cloud technologies.",
    },
    {
      title: "Client-Centric Approach",
      desc: "We focus on your goals to create solutions that fit your vision.",
    },
    {
      title: "Quality & Reliability",
      desc: "Agile methods and rigorous testing ensure top performance.",
    },
    {
      title: "Timely Delivery",
      desc: "Efficient workflows keep every project on schedule.",
    },
    {
      title: "End-to-End Support",
      desc: "Complete service — from strategy to ongoing maintenance.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0A0916] via-[#120F25] to-[#1B1735] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-12">

        {/* ================= LEFT TEXT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose Us
          </h2>

          <p className="text-white/70 mb-10 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            At SWL Solutions, we combine innovation, precision, and deep
            technical expertise to deliver digital solutions that transform
            businesses. We don’t just build software — we build success stories.
          </p>

          <ul className="space-y-6">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="pt-1 flex-shrink-0">
                  <img
                    src={pointer}
                    alt="pointer icon"
                    className="w-4 sm:w-5 md:w-6 drop-shadow-[0_0_8px_rgba(162,135,255,0.9)]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base md:text-lg">
                    {p.title}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base leading-snug">
                    {p.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ================= RIGHT IMAGE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full relative flex justify-center items-center"
        >
          {/* Workspace Image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={workspace}
              alt="workspace"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl border border-[#A287FF40] shadow-[0_0_60px_rgba(162,135,255,0.45)]"
            />
          </motion.div>

          {/* Floating Handshake Image */}
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -top-8 -left-4 sm:-top-10 sm:-left-8 md:-top-12 md:-left-10 bg-gradient-to-br from-[#1C1632] to-[#26214A] border border-[#A287FF60] rounded-xl shadow-[0_0_35px_rgba(162,135,255,0.6)] backdrop-blur-md p-1"
          >
            <img
              src={handshake}
              alt="Handshake"
              className="w-20 sm:w-28 md:w-32 lg:w-36 rounded-lg object-cover"
            />
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1 sm:left-2 md:left-4 bg-[#A287FF40] border border-[#A287FF80] text-white px-4 sm:px-6 md:px-7 py-2 sm:py-3 md:py-4 rounded-xl font-medium shadow-[0_0_50px_rgba(162,135,255,0.55)] flex flex-col items-center justify-center text-center backdrop-blur-md"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CBB5FF] drop-shadow-[0_0_12px_rgba(162,135,255,0.9)]">
              10+
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-[#E4D9FF] opacity-95 whitespace-nowrap">
              Years of Experience
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}








