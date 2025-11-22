import { motion } from "framer-motion";
import pointer from "../assets/pointer.png";
import whyus from "../assets/whyus.png";

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        w-full py-24 
        bg-gradient-to-r from-[#0A0916] via-[#120F25] to-[#1B1735]
        text-white
      "
    >
      {/* EXACT HERO-CONTAINER ALIGNMENT */}
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start gap-16 px-4 sm:px-6 md:px-10">

        {/* LEFT COLUMN — FIXED WIDTH (ALIGN LEFT LIKE HERO) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ width: "550px" }}   // PERFECT MATCH TO REFERENCE
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: "28px",
              lineHeight: "40px",
              fontFamily: "Montserrat",
            }}
            className="mb-6"
          >
            Why Choose Us
          </h2>

          <p
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              color: "#D3D3D3",
            }}
            className="mb-8"
          >
            At SWL Solutions, we combine innovation, precision, and deep
            technical expertise to deliver digital solutions that transform
            businesses. We don’t just build software — we build success stories.
          </p>

          {/* BULLET LIST */}
          <ul className="space-y-6">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src={pointer} alt="" className="w-5 mt-1" />

                <div>
                  <p className="font-semibold text-white text-base">{p.title}</p>
                  <p className="text-[#D3D3D3] text-sm leading-snug">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT COLUMN — FULL WIDTH IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <motion.img
            initial={{ scale: 0.94 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src={whyus}
            alt="why us"
            className="w-full max-w-[950px] h-auto object-contain"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}





