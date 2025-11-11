import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCode,
  FaCogs,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import projectImg from "../assets/project.png"; // your image

export default function WhatDrives() {

  const features = [
    {
      title: "Idea & Analysis Gathering",
      desc: "We study your goals and find the best tech approach to bring them to life.",
      icon: <FaLightbulb className="text-[#A287FF] text-2xl" />,
    },
    {
      title: "Design & Development",
      desc: "We craft scalable, high-quality solutions tailored to your business.",
      icon: <FaCode className="text-[#A287FF] text-2xl" />,
    },
    {
      title: "Testing & Quality Assurance",
      desc: "We ensure every product is secure, stable, and runs smoothly.",
      icon: <FaCogs className="text-[#A287FF] text-2xl" />,
    },
    {
      title: "Launch & Ongoing Support",
      desc: "We launch seamlessly and provide continuous updates and care.",
      icon: <FaRocket className="text-[#A287FF] text-2xl" />,
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
      title: "Healthcare AI Engine",
      tags: ["Python", "FastAPI", "React", "Azure"],
    },
    {
      title: "Blockchain Identity App",
      tags: ["Solidity", "React", "IPFS", "Hardhat"],
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerScroll = 2;

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      const scrollWidth =
        scrollRef.current.scrollWidth /
        Math.ceil(projects.length / itemsPerScroll);
      scrollRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    const onScroll = () => {
      const index = Math.round(
        ref.scrollLeft /
          (ref.scrollWidth / Math.ceil(projects.length / itemsPerScroll))
      );
      setCurrentIndex(index);
    };

    ref.addEventListener("scroll", onScroll);
    return () => ref.removeEventListener("scroll", onScroll);
  }, [projects.length]);

  return (
    <section className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* WHAT DRIVES SECTION */}
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              What Drives SWL Solutions
            </h2>
            <p className="text-white/70 mb-6 max-w-lg text-sm sm:text-base leading-relaxed">
              SWL Solutions was founded with a vision to deliver innovative IT
              solutions that help businesses grow and stay ahead in the digital
              era. Our team of skilled professionals combines creativity and
              technology to build reliable, high-performance software tailored
              to your goals.
            </p>
            <p className="text-white/70 max-w-lg text-sm sm:text-base leading-relaxed">
              Reach out to us and experience how our expertise can bring your
              ideas to life with precision and impact.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(162,135,255,0.7)",
                }}
                className="bg-gradient-to-br from-[#4B3E9E] via-[#352A73] to-[#1A1635]
                  border border-[#4B3E9E]/50
                  rounded-xl p-4
                  shadow-[0_0_25px_rgba(162,135,255,0.25)]
                  hover:shadow-[0_0_50px_rgba(162,135,255,0.7)]
                  transition-all duration-500 ease-in-out"
              >
                <div className="mb-3">{f.icon}</div>
                <h4 className="font-semibold mb-1 text-base">{f.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SELECTED PROJECTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Selected Projects
          </h2>
          <p className="text-white/70 mb-10 text-sm sm:text-base">
            Case studies that highlight outcomes, not just outputs.
          </p>

          {/* Fixed Height Horizontal Scroll */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ height: "400px", paddingBottom: "6px" }}
          >
            <div className="flex gap-5 w-max h-full items-center">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 45px rgba(162,135,255,0.8)",
                  }}
                  className="min-w-[280px] sm:min-w-[320px] h-[350px]
                    bg-gradient-to-b from-[#4B3E9E] via-[#352A73] to-[#1A1635]
                    border border-[#4B3E9E]/50
                    rounded-xl p-4 flex flex-col justify-between
                    shadow-[0_0_25px_rgba(162,135,255,0.25)]
                    hover:shadow-[0_0_50px_rgba(162,135,255,0.8)]
                    transition-all duration-500 snap-center"
                >
                  <div>
                    <div className="overflow-hidden rounded-lg mb-2">
                      <motion.img
                        src={projectImg}
                        alt="Project"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-36 object-cover rounded-lg"
                      />
                    </div>

                    <h4 className="font-semibold text-base mb-2">{p.title}</h4>

                    <div className="flex flex-wrap gap-2 mb-3">
                      
                      {p.tags.map((t, idx) => (
  <span
    key={idx}
    className="text-xs px-3 py-1 rounded-md 
               bg-gradient-to-r from-[#3A2E74] via-[#2C2560] to-[#181632]
               border border-[#3B3473] 
               text-white/90 shadow-[0_0_8px_rgba(162,135,255,0.3)]
               hover:shadow-[0_0_15px_rgba(162,135,255,0.5)]
               transition-all duration-300"
  >
    {t}
  </span>
))}

                    </div>
                  </div>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="text-[#A287FF] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300 -mb-1"
                  >
                    Learn More <FaArrowRight className="text-xs" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(Math.ceil(projects.length / itemsPerScroll))].map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "bg-[#A287FF] scale-110"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                ></button>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


