import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import BuildTogether from "../components/BuildTogether";
import ContactFormSection from "../components/ContactFormSection";
import ContactHighlights from "../components/ContactHighlights";
import Testimonials from "../components/Testimonials";


import CompanyLogos from "../components/CompanyLogos";


import GlowBG from "../assets/ellipse-glow.png";
import AboutFooter from "../components/AboutFooter";



export default function AboutUs() {

  // ⭐ Initialize AOS
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

      {/* 🔥 Zig-Zag Blue Glows (SAME AS APP.TSX) */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <img
          key={i}
          src={GlowBG}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: "1800px",
            height: "1600px",
            top: `${i === 0 ? -20 : i * 125}vh`,
            left: i % 2 === 0 ? "-28%" : "25%",
            filter: "brightness(1.5) saturate(5) hue-rotate(-20deg)",
            opacity: 1,
            animation: `driftFadeSide ${18 + i * 2}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* ✅ Navbar */}
      <Navbar />
      <ContactHero />
        <BuildTogether />
        <ContactFormSection />
        <ContactHighlights />
        <Testimonials/>
     

      {/* ✅ Footer */}
      <CompanyLogos/>
      <AboutFooter />
    </div>
  );
}
