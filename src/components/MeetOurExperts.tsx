import { useState } from "react";
import { motion } from "framer-motion";

import expert1 from "../assets/expert1.png";
import expert2 from "../assets/expert2.png";
import expert3 from "../assets/expert3.png";
import expert4 from "../assets/expert4.png";
import expert5 from "../assets/expert5.png";

export default function MeetOurExperts() {
  const experts = [
    {
      name: "Eleanor Vance",
      role: "Lead Frontend Developer",
      bio: "Eleanor is a UI/UX enthusiast with a passion for creating pixel-perfect, user-friendly interfaces in React and Vue.",
      img: expert1,
    },
    {
      name: "Sophie Turner",
      role: "Project Manager",
      bio: "Sophie specializes in agile methodologies and ensures seamless collaboration across global development teams.",
      img: expert2,
    },
    {
      name: "Liam Brown",
      role: "Full Stack Developer",
      bio: "Liam brings expertise in scalable architecture and backend integration for enterprise-grade applications.",
      img: expert3,
    },
    {
      name: "Noah Carter",
      role: "DevOps Engineer",
      bio: "Noah ensures continuous integration and delivery pipelines are smooth, secure, and highly efficient.",
      img: expert4,
    },
    {
      name: "Amelia Davis",
      role: "Business Analyst",
      bio: "Amelia bridges the gap between technology and business needs with strategic insights and process optimization.",
      img: expert5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Meet Our Experts
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            The talented individuals powering your projects forward.
          </p>
        </motion.div>

        {/* Experts Container */}
        <div
          className="flex md:flex-nowrap flex-row md:gap-4 gap-6 
          overflow-x-auto md:overflow-x-visible scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {experts.map((expert, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                animate={{
                  flex: isActive ? 1.2 : 1,
                  scale: isActive ? 1.02 : 1,
                }}
                whileHover={{
                  scale: isActive ? 1.02 : 1.04,
                }}
                className={`relative cursor-pointer rounded-2xl overflow-hidden flex flex-col justify-end 
                  transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                  snap-center min-w-[80%] sm:min-w-[45%] md:min-w-0
                  ${
                    isActive
                      ? "shadow-[0_0_40px_rgba(162,135,255,0.6)] border-2 border-[#A287FF]"
                      : "border border-transparent opacity-85 hover:opacity-100"
                  }`}
              >
                {/* Expert Image */}
                <motion.img
                  src={expert.img}
                  alt={expert.name}
                  className={`w-full h-[400px] md:h-[450px] object-cover transition-all duration-700 ${
                    isActive ? "brightness-100" : "brightness-75"
                  }`}
                />

                {/* Overlay Gradient + Text */}
                <motion.div
                  className={`absolute inset-0 flex flex-col justify-end p-5 sm:p-6 transition-all duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-[#A287FF]/90 via-[#27266C]/70 to-transparent"
                      : "bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0.9,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <h3
                      className={`text-lg font-semibold ${
                        isActive ? "text-white" : "text-white/90"
                      }`}
                    >
                      {expert.name}
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "text-[#A287FF]" : "text-white/70"
                      }`}
                    >
                      {expert.role}
                    </p>
                    {isActive && (
                      <p className="text-sm text-white/80 mt-2 leading-relaxed">
                        {expert.bio}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
