import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import handshake from "../assets/handshake.png"; // robot-hand image
import workspace from "../assets/workspace.png"; // desk/laptop image

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
    <section className="relative w-full bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 px-6">
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Why Choose Us
          </h2>
          <p className="text-white/70 mb-10 text-sm sm:text-base max-w-lg">
            At SWL Solutions, we combine innovation, precision, and deep
            technical expertise to deliver digital solutions that transform
            businesses. We don’t just build software — we build success stories.
          </p>

          <ul className="space-y-6">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="pt-1">
                  <FaCheckCircle className="text-brand text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {p.title}
                  </p>
                  <p className="text-white/70 text-sm">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative flex justify-center">
          {/* Background workspace */}
          <img
            src={workspace}
            alt="workspace"
            className="w-full max-w-md rounded-2xl border border-brand/30 shadow-[0_0_40px_rgba(103,100,248,0.2)]"
          />

          {/* Floating handshake */}
          <div className="absolute -top-12 -left-8 sm:-top-16 sm:-left-10 bg-black/40 border border-brand/30 rounded-xl shadow-[0_0_30px_rgba(103,100,248,0.4)] backdrop-blur-md">
            <img
              src={handshake}
              alt="Handshake"
              className="w-28 sm:w-36 rounded-xl p-2"
            />
          </div>

          {/* Floating experience badge */}
          <div className="absolute bottom-8 -right-6 sm:bottom-10 sm:-right-8 bg-gradient-to-r from-brand to-brand-80 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-medium shadow-lg flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-bold">10+</span>
            <span className="text-xs sm:text-sm">Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
