import centerIcon from "../assets/code-icon.png"; // center icon (the one inside the circle)
import { FaCloud, FaCogs, FaRobot, FaBug, FaCode } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Expertise() {
  const expertise = [
    {
      title: "AI & Automation",
      icon: <FaRobot className="text-brand text-2xl" />,
      pos: "top-left",
    },
    {
      title: "Web & Mobile Development",
      icon: <FaCode className="text-brand text-2xl" />,
      pos: "top-right",
    },
    {
      title: "AI & Machine Learning",
      icon: <GiArtificialIntelligence className="text-brand text-2xl" />,
      pos: "middle-left",
    },
    {
      title: "Backend & APIs",
      icon: <FaCogs className="text-brand text-2xl" />,
      pos: "middle-right",
    },
    {
      title: "QA & Testing",
      icon: <FaBug className="text-brand text-2xl" />,
      pos: "bottom-left",
    },
    {
      title: "Cloud & AWS Solutions",
      icon: <FaCloud className="text-brand text-2xl" />,
      pos: "bottom-right",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Our Expertise</h2>
        <p className="text-white/70 text-sm sm:text-base">
          We offer a comprehensive suite of services to build your next big idea.
        </p>
      </div>

      <div className="relative flex items-center justify-center max-w-6xl mx-auto px-6">
        {/* Outer Arrows + Items */}
        {expertise.map((item, idx) => (
          <div
            key={idx}
            className={`absolute flex items-center gap-3 text-white/90 text-sm ${
              item.pos === "top-left"
                ? "top-0 left-[8%]"
                : item.pos === "top-right"
                ? "top-0 right-[8%] flex-row-reverse"
                : item.pos === "middle-left"
                ? "top-1/2 -translate-y-1/2 left-[4%]"
                : item.pos === "middle-right"
                ? "top-1/2 -translate-y-1/2 right-[4%] flex-row-reverse"
                : item.pos === "bottom-left"
                ? "bottom-0 left-[8%]"
                : "bottom-0 right-[8%] flex-row-reverse"
            }`}
          >
            {/* Icon box */}
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-black/60 border border-brand/50">
              {item.icon}
            </div>

            {/* Label */}
            <span className="whitespace-nowrap">{item.title}</span>

            {/* Arrows */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-16 h-6 text-brand absolute ${
                item.pos.includes("left")
                  ? "-right-16 rotate-180"
                  : "-left-16"
              }`}
              viewBox="0 0 100 20"
            >
              <path
                d="M0,10 C30,0 70,0 100,10"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        ))}

        {/* Center Circle */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-brand flex items-center justify-center bg-gradient-to-br from-black/80 to-[#1A1A2E] shadow-[0_0_40px_rgba(103,100,248,0.3)]">
          <div className="absolute inset-0 rounded-full border border-brand/30 animate-pulse" />
          <img src={centerIcon} alt="Expertise center" className="w-20 sm:w-24 z-10" />
        </div>
      </div>
    </section>
  );
}
