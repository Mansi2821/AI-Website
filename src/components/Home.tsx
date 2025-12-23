import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import CompanyLogos from "./CompanyLogos";
import Expertise from "./Expertise";
import WhyChooseUs from "./WhyChooseUs";
import Pricing from "./Pricing";
import WhatDrives from "./WhatDrives";
import Testimonials from "./Testimonials";
import LatestInsights from "./LatestInsights";
import MeetOurExperts from "./MeetOurExperts";
import FAQ from "./FAQ";
import Footer from "./Footer";

import GlowBG from "../assets/ellipse-glow.png";

export default function Home() {

  // ⭐ Initialize AOS animation system
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 20,
    });

    AOS.refresh();
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        bg-no-repeat
        relative
        overflow-hidden
      "
    >
      {/* 🔥 Animation Keyframes */}
      <style>{`
        @keyframes driftFadeSide {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) translateX(-30px) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>

      {/* 🔥 Zig-Zag Blue Glows */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <img
          key={i}
          src={GlowBG}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: "1800px",
            height: "1900px",
            top: `${i === 0 ? -20 : i * 125}vh`,
            left: i % 2 === 0 ? "-28%" : "25%",
            filter: "brightness(1.5) saturate(5) hue-rotate(-20deg)",
            opacity: 1,
            animation: `driftFadeSide ${18 + i * 2}s ease-in-out infinite`,
          }}
        />
      ))}

      <Navbar />
      <Hero />
      <CompanyLogos />
      <Expertise />
      <WhyChooseUs />
      <Pricing />
      <WhatDrives />
      <Testimonials />
      <LatestInsights />
      <MeetOurExperts />
      <FAQ />
      <Footer />
    </div>
  );
}








