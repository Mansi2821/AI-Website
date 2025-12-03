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
  const [activeProject, setActiveProject] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoverPause = useRef(false);

  const features = [
    {
      icon: feature1,
      title: "Idea & Analysis Gathering",
      desc: "We study your goals and find the best tech approach to bring them to life.",
    },
    {
      icon: feature2,
      title: "Design & Development",
      desc: "We craft scalable, high-quality solutions tailored to your business.",
    },
    {
      icon: feature3,
      title: "Testing & Quality Assurance",
      desc: "We ensure every product is secure, stable, and runs smoothly.",
    },
    {
      icon: feature4,
      title: "Launch & Ongoing Support",
      desc: "We launch seamlessly and provide continuous updates and care.",
    },
  ];

  const projects = [
    {
      title: "Smart Retail Analytics Platform",
      tags: ["React", "Node.js", "AWS", "Airflow", "PostgreSQL"],
    },
    {
      title: "AI-Powered Fitness Tracker",
      tags: ["Python", "TensorFlow", "Flask", "React"],
    },
    {
      title: "E-Commerce Dashboard",
      tags: ["Next.js", "Tailwind", "MongoDB", "Stripe"],
    },
    {
      title: "Cloud Automation System",
      tags: ["AWS", "Kubernetes", "Node.js", "GraphQL"],
    },
    {
      title: "FinTech Credit Scoring Engine",
      tags: ["Kafka", "Python", "Redis", "ML"],
    },
    {
      title: "Smart Agriculture IoT Platform",
      tags: ["IoT", "AWS", "ESP32", "AI Analytics"],
    },
  ];

  /* Detect centered card when scrolling */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let minDist = Infinity;

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = idx;
        }
      });

      setCurrentIndex(closestIndex);
      setActiveProject(closestIndex);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  /* Infinite Auto Scroll that PAUSES on hover/touch */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const loop = setInterval(() => {
      if (hoverPause.current) return;

      container.scrollBy({ left: 400, behavior: "smooth" });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentIndex(0);
        setActiveProject(0);
      }
    }, 3500);

    return () => clearInterval(loop);
  }, []);

  /* Dot click scroll */
  const handleDotClick = (index: number) => {
    if (!scrollRef.current || !cardRefs.current[index]) return;

    const container = scrollRef.current;
    const card = cardRefs.current[index]!;

    container.scrollTo({
      left: card.offsetLeft - container.clientWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });

    setCurrentIndex(index);
    setActiveProject(index);
  };

  return (
    <section className="text-white py-20 overflow-hidden">
      <motion.div
        className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 space-y-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* ========= WHAT DRIVES SECTION ========= */}
        <motion.div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* LEFT TEXT */}
          <motion.div
            className="w-full lg:w-[420px] text-center lg:text-left"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "28px",
              }}
            >
              What Drives SWL Solutions
            </h2>

            <p className="mb-4 text-white/80" style={{ fontFamily: "Inter" }}>
              We build digital innovation that fuels growth.
            </p>

            <p className="text-white/80" style={{ fontFamily: "Inter" }}>
              Experience how our expertise shapes impactful tech.
            </p>
          </motion.div>

          {/* FEATURE CARDS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {features.map((f, i) => {
              const active = activeFeature === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveFeature(active ? null : i)}
                  animate={active ? { scale: 1.05 } : { scale: 1 }}
                  className="relative rounded-xl p-4 w-full
                    bg-[linear-gradient(232.77deg,rgba(77,74,212,0.6)_2.17%,#000_84.41%)]
                    border border-[#6764F8]
                    min-h-[140px]
                    transition-all duration-300"
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
                    <p className="text-white/70 text-sm leading-relaxed mt-1">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ========= SELECTED PROJECTS ========= */}
        <motion.div>
          <h2
            className="mb-3"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "28px",
            }}
          >
            Selected Projects
          </h2>

          <p className="text-white/70 mb-6 text-sm sm:text-base">
            Case studies with real impact.
          </p>

          {/* HORIZONTAL PROJECT SCROLLER */}
          <motion.div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{
              height: "360px",
              overflowY: "hidden",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={() => {
              hoverPause.current = true;
            }}
            onMouseLeave={() => {
              hoverPause.current = false;
            }}
            onTouchStart={() => {
              hoverPause.current = true;
            }}
            onTouchEnd={() => {
              hoverPause.current = false;
            }}
          >
            <motion.div className="flex gap-10 w-max px-4">
              {projects.map((p, i) => {
                const active = activeProject === i;

                return (
                  <motion.div
                    key={i}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className="snap-center flex flex-col justify-between rounded-[12px]
                      border border-[#272727]
                      bg-[linear-gradient(232.77deg,#4D4AD4_2.17%,#000_84.41%)]
                      transition-all duration-300"
                    style={{
                      width: "393px",
                      height: "302px",
                      padding: "14px",
                      opacity: 1,
                      boxShadow: active
                        ? "0 0 18px rgba(103,100,248,0.45)"
                        : "none",
                      transform: active ? "scale(1.03)" : "scale(1)",
                    }}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 25px rgba(103,100,248,0.4)",
                    }}
                    onClick={() => handleDotClick(i)}
                  >
                    <div className="overflow-hidden rounded-[10px] border border-[#272727] h-[150px]">
                      <img
                        src={projectImg}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="font-semibold text-base mt-2">
                      {p.title}
                    </h4>

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

                    <button className="text-[#6764F8] font-bold text-[15px] mt-[6px] flex items-center gap-1">
                      Learn More →
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* DOT NAVIGATION */}
          <motion.div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => handleDotClick(Math.max(0, currentIndex - 1))}
              className="text-[#6764F8] text-xl font-bold"
            >
              &lt;
            </button>

            {projects.map((_, i) => (
              <motion.div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`
                  w-[12px] h-[12px] rounded-full cursor-pointer transition-all
                  ${
                    currentIndex === i
                      ? "bg-[#6764F8] scale-125 shadow-[0_0_6px_rgba(103,100,248,0.75)]"
                      : "bg-white/40"
                  }
                `}
              ></motion.div>
            ))}

            <button
              onClick={() =>
                handleDotClick(Math.min(projects.length - 1, currentIndex + 1))
              }
              className="text-[#6764F8] text-xl font-bold"
            >
              &gt;
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
