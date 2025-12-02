import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Feature icons
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

// Project image
import projectImg from "../assets/project.png";

export default function WhatDrives() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const features = [
    { icon: feature1, title: "Idea & Analysis Gathering", desc: "We study your goals and find the best tech approach to bring them to life." },
    { icon: feature2, title: "Design & Development", desc: "We craft scalable, high-quality solutions tailored to your business." },
    { icon: feature3, title: "Testing & Quality Assurance", desc: "We ensure every product is secure, stable, and runs smoothly." },
    { icon: feature4, title: "Launch & Ongoing Support", desc: "We launch seamlessly and provide continuous updates and care." },
  ];

  const projects = [
    { title: "Smart Retail Analytics Platform", tags: ["React", "Node.js", "AWS", "Airflow", "PostgreSQL"] },
    { title: "AI-Powered Fitness Tracker", tags: ["Python", "TensorFlow", "Flask", "React"] },
    { title: "E-Commerce Dashboard", tags: ["Next.js", "Tailwind", "MongoDB", "Stripe"] },
    { title: "Cloud Automation System", tags: ["AWS", "Kubernetes", "Node.js", "GraphQL"] },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    setCurrentIndex(index);
  };

  /* Detect scroll position */
  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    const onScroll = () => {
      const index = Math.round(ref.scrollLeft / ref.clientWidth);
      setCurrentIndex(index);
    };

    ref.addEventListener("scroll", onScroll);
    return () => ref.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="text-white py-20 overflow-hidden">
      <motion.div
        className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 space-y-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* WHAT DRIVES SECTION */}
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* LEFT TEXT */}
          <motion.div
            className="w-full lg:w-[420px] text-center lg:text-left"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4" style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: "28px" }}>
              What Drives SWL Solutions
            </h2>

            <p className="mb-4 text-white/80" style={{ fontFamily: "Inter" }}>
              SWL Solutions was founded with a vision to deliver innovative IT solutions that help businesses grow.
            </p>

            <p className="text-white/80" style={{ fontFamily: "Inter" }}>
              Reach out to us and experience how our expertise can bring your ideas to life with precision.
            </p>
          </motion.div>

          {/* FEATURE CARDS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {features.map((f, i) => {
              const active = activeFeature === i;
              return (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 35px rgba(103,100,248,0.5)",
                  }}
                  onClick={() => setActiveFeature(active ? null : i)}
                  animate={
                    active
                      ? {
                          scale: 1.05,
                          boxShadow: "0 0 35px rgba(103,100,248,0.7)",
                          borderColor: "#6764F8",
                        }
                      : { scale: 1, boxShadow: "none" }
                  }
                  className="
                    relative rounded-xl p-4 w-full
                    bg-[linear-gradient(232.77deg,rgba(77,74,212,0.6)_2.17%,#000_84.41%)]
                    border border-[#6764F8]
                    min-h-[140px]
                    transition-all duration-300
                  "
                >
                  <div
                    className="absolute top-4 left-4 flex items-center justify-center"
                    style={{
                      width: 47,
                      height: 47,
                      background: "#6764F866",
                      borderRadius: "6px",
                      border: "0.5px solid #6764F8",
                    }}
                  >
                    <img src={f.icon} className="w-7 h-7" />
                  </div>

                  <div className="ml-[70px]">
                    <h4 className="font-semibold text-base">{f.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* SELECTED PROJECTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-3"
            style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: "28px" }}
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Selected Projects
          </motion.h2>

          <motion.p
            className="text-white/70 mb-10 text-sm sm:text-base"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Case studies with real impact.
          </motion.p>

          
          <motion.div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pt-[18px]"
            style={{
              overflowY: "hidden",
              height: "380px",
              paddingBottom: "20px",
            }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex gap-6 w-max"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {projects.map((p, i) => {
                const active = activeProject === i;
                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.03,
                      y: -6,
                      boxShadow: "0 0 40px rgba(103,100,248,0.6)",
                    }}
                    onClick={() => setActiveProject(active ? null : i)}
                    animate={
                      active
                        ? {
                            scale: 1.04,
                            boxShadow: "0 0 40px rgba(103,100,248,0.8)",
                            borderColor: "#6764F8",
                          }
                        : { scale: 1, boxShadow: "none" }
                    }
                    className="
                      w-[320px] sm:w-[360px] md:w-[393px]
                      h-[300px] rounded-[12px]
                      bg-[linear-gradient(232.77deg,#4D4AD4_2.17%,#000_84.41%)]
                      border border-[#272727] p-4 
                      flex flex-col justify-between snap-start
                      transition-all duration-300
                    "
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="overflow-hidden rounded-[12px] border border-[#272727]">
                      <img src={projectImg} className="w-full h-[160px] object-cover" />
                    </div>

                    <h4 className="font-semibold text-base mt-2">{p.title}</h4>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {p.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs rounded-full 
                            bg-[linear-gradient(90deg,rgba(103,100,248,0.4)_0%,rgba(103,100,248,0)_100%)]
                            border border-[#6764F8B2] 
                            px-3 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href="#" className="text-[#6764F8] font-bold text-[15px] mt-[6px]">
                      Learn More
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* DOTS */}
          <motion.div
            className="flex justify-center items-center gap-3 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button onClick={() => handleDotClick(Math.max(0, currentIndex - 1))} className="text-[#6764F8] text-xl">
              &lt;
            </button>

            {[...Array(projects.length)].map((_, i) => (
              <motion.div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all
                  ${currentIndex === i ? "bg-[#6764F8] scale-110" : "bg-white/40"}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              ></motion.div>
            ))}

            <button
              onClick={() => handleDotClick(Math.min(projects.length - 1, currentIndex + 1))}
              className="text-[#6764F8] text-xl"
            >
              &gt;
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}







