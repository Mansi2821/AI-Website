import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCode,
  FaCogs,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

import projectImg from "../assets/project.png"; // your project thumbnail image

export default function WhatDrives() {
  const features = [
    {
      title: "Idea & Analysis Gathering",
      desc: "We study your goals and find the best tech approach to bring them to life.",
      icon: <FaLightbulb className="text-brand text-2xl" />,
    },
    {
      title: "Design & Development",
      desc: "We craft scalable, high-quality solutions tailored to your business.",
      icon: <FaCode className="text-brand text-2xl" />,
    },
    {
      title: "Testing & Quality Assurance",
      desc: "We ensure every product is secure, stable, and runs smoothly.",
      icon: <FaCogs className="text-brand text-2xl" />,
    },
    {
      title: "Launch & Ongoing Support",
      desc: "We launch seamlessly and provide continuous updates and care.",
      icon: <FaRocket className="text-brand text-2xl" />,
    },
  ];

  const projects = [
    {
      title: "Smart Retail Analytics Platform",
      tags: ["React", "Node.js", "AWS", "Airflow", "Postgress"],
    },
    {
      title: "Smart Retail Analytics Platform",
      tags: ["React", "Node.js", "AWS", "Airflow", "Postgress"],
    },
    {
      title: "Smart Retail Analytics Platform",
      tags: ["React", "Node.js", "AWS", "Airflow", "Postgress"],
    },
    {
      title: "Smart Retail Analytics Platform",
      tags: ["React", "Node.js", "AWS", "Airflow", "Postgress"],
    },
  ];

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
            <p className="text-white/70 mb-6 max-w-lg text-sm sm:text-base">
              SWL Solutions was founded with a vision to deliver innovative IT
              solutions that help businesses grow and stay ahead in the digital
              era. Our team of skilled professionals combines creativity and
              technology to build reliable, high-performance software tailored
              to your goals.
            </p>
            <p className="text-white/70 max-w-lg text-sm sm:text-base">
              Reach out to us and experience how our expertise can bring your
              ideas to life with precision and impact.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1B1B2A]/80 hover:bg-gradient-to-br hover:from-[#27266C]/80 hover:to-[#1B1B2A]/80 border border-brand/20 hover:border-brand/50 rounded-xl p-5 transition-all duration-500 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_25px_rgba(103,100,248,0.4)]"
              >
                <div className="mb-3">{f.icon}</div>
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">
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

          {/* Horizontal Scroll */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 w-max">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="min-w-[280px] sm:min-w-[340px] bg-gradient-to-b from-[#27266C]/60 to-[#1B1B2A]/80 border border-brand/20 hover:border-brand/50 rounded-xl p-3 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_25px_rgba(103,100,248,0.4)] transition-all duration-500"
                >
                  <div className="overflow-hidden rounded-lg mb-3">
                    <img
                      src={projectImg}
                      alt="Project"
                      className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="font-semibold text-base mb-3">
                    {p.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-md bg-black/40 border border-white/10 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-brand text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300"
                  >
                    Learn More <FaArrowRight className="text-xs" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? "bg-brand" : "bg-white/30"
                }`}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
