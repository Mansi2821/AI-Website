import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import Expertise from "./components/Expertise";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import WhatDrives from "./components/WhatDrives";
import Testimonials from "./components/Testimonials";
import LatestInsights from "./components/LatestInsights";
import MeetOurExperts from "./components/MeetOurExperts";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


import GlowBG from "./assets/ellipse-glow.png";

export default function App() {
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






