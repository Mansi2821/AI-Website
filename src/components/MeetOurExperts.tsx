import { useState, useEffect } from "react";
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

  const [hovered, setHovered] = useState<number | null>(null);

  /* AOS init */
  useEffect(() => {
    import("aos/dist/aos.css");
    import("aos").then((AOS) =>
      AOS.init({
        once: true,
        duration: 1000,
      })
    );
  }, []);

  return (
    <section className=" text-white py-24 overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-6">

        {/* HEADER with AOS flip animation */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-left mb-12"
        >
          <h2
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "28px",
              lineHeight: "40px",
            }}
            className="mb-2"
          >
            Meet Our Experts
          </h2>

          <p className="text-white/70 text-sm sm:text-base">
            The talented individuals powering your projects forward.
          </p>
        </div>

        {/* EXPERT CARDS */}
        <div
          className="
            flex md:flex-nowrap flex-row md:gap-7 gap-8 
            overflow-x-auto md:overflow-x-visible 
            scrollbar-hide scroll-smooth snap-x snap-mandatory
          "
        >
          {experts.map((expert, i) => {
            const isHovered = hovered === i;

            return (
              <div
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 250} // one by one stagger animation
                data-aos-duration="1400"
                className="snap-center"
              >
                <motion.div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onTap={() => setHovered(i)} // Mobile tap
                  animate={{
                    flex: isHovered ? 1.18 : 1,
                    scale: isHovered ? 1.03 : 1,
                  }}
                  className={`
                    relative cursor-pointer rounded-[10px] overflow-hidden 
                    flex flex-col justify-end 
                    min-w-[80%] sm:min-w-[55%] md:min-w-0 
                    transition-all duration-500
                  `}
                  style={{
                    width: isHovered ? "298px" : "195px",
                    height: "462px",
                    border: isHovered ? "1px solid #6764F8" : "1px solid #414141",
                    background: isHovered
                      ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, #6764F8 73%)"
                      : "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%)",
                  }}
                >
                  {/* IMAGE */}
                  <motion.img
                    src={expert.img}
                    alt={expert.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  />

                  {/* GRADIENT OVERLAY */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 transition-all duration-500"
                    style={{
                      background: isHovered
                        ? "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(103,100,248,0.85) 73%)"
                        : "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.90) 100%)",
                    }}
                  >
                    <motion.div
                      animate={{
                        opacity: 1,
                        y: isHovered ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {expert.name}
                      </h3>

                      <p className="text-sm font-medium text-white">
                        {expert.role}
                      </p>

                      {isHovered && (
                        <p className="text-sm text-white mt-2 leading-relaxed">
                          {expert.bio}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
