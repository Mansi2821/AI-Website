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
        w-full py-20 
        
        text-white
      "
    >
      <div
        className="
          max-w-[1280px] mx-auto 
          flex flex-col lg:flex-row 
          items-start 
          gap-12 lg:gap-16 
          px-4 sm:px-6 md:px-10
        "
      >
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            w-full 
            lg:w-[550px] 
            flex flex-col 
          "
        >
          <h2
            className="
              mb-4 
              text-[24px] sm:text-[26px] md:text-[28px]
              font-semibold leading-tight
            "
            style={{ fontFamily: "Montserrat" }}
          >
            Why Choose Us
          </h2>

          <p
            className="
              mb-8 
              text-[14px] sm:text-[15px] md:text-[16px]
              text-[#D3D3D3] leading-relaxed
            "
            style={{ fontFamily: "Inter" }}
          >
            At SWL Solutions, we combine innovation, precision, and deep
            technical expertise to deliver digital solutions that transform
            businesses. We don’t just build software — we build success stories.
          </p>

          {/* BULLET LIST */}
          <ul className="space-y-5 sm:space-y-6">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src={pointer} alt="" className="w-4 sm:w-5 mt-1" />

                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {p.title}
                  </p>
                  <p className="text-[#D3D3D3] text-xs sm:text-sm leading-snug">
                    {p.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            flex-1 
            flex justify-center lg:justify-end 
            w-full
          "
        >
          <motion.img
            initial={{ scale: 0.94 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src={whyus}
            alt="why us"
            className="
              w-full 
              max-w-[400px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px]
              h-auto object-contain
            "
          />
        </motion.div>
      </div>
    </motion.section>
  );
}



