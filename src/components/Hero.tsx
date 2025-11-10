import heroImage from "../assets/brain.png"; // your circuit brain image

export default function Hero() {
  const brand = "#6764F8";

  return (
    <section
      className="relative text-white py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #0C0E1E 0%, #0A0A14 40%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Section */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Shaping the Future <br />
            with{" "}
            <span style={{ color: brand }}>
              AI-Driven
            </span>{" "}
            Innovation
          </h1>

          <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            SWL Solutions is your dedicated partner in crafting bespoke software
            solutions that drive growth, efficiency, and innovation. From
            concept to code, we bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Outlined Button */}
            <button
              className="px-6 py-3 rounded-md font-medium border text-white transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Our Services
            </button>

            {/* Filled Button */}
            <button
              className="px-6 py-3 rounded-md font-medium text-white transition-all duration-300"
              style={{
                background: brand,
                boxShadow: "0 0 12px rgba(103,100,248,0.4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#5a59e6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = brand)
              }
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="AI Brain"
            className="w-[80%] md:w-[90%] max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
