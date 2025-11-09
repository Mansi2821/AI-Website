import brain from "../assets/brain.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20 gap-16">
      {/* Left text */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Shaping the Future <br />
          with <span className="text-brand">AI-Driven</span> Innovation
        </h1>

        <p className="text-white-80 mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
          SWL Solutions is your dedicated partner in crafting bespoke software
          solutions that drive growth, efficiency, and innovation. From concept
          to code, we bring your vision to life.
        </p>

        <div className="mt-10 flex justify-center lg:justify-start gap-4">
          <button className="border border-brand px-6 py-3 rounded-md text-sm font-medium hover:bg-brand/10 transition">
            Our Services
          </button>
          <button className="bg-brand px-6 py-3 rounded-md text-sm font-medium hover:bg-brand-80 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right graphic */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src={brain}
          alt="AI Brain Circuit"
          className="w-[350px] sm:w-[420px] lg:w-[480px] animate-fade-in"
        />
      </div>
    </section>
  );
}

