import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import commaIcon from "../assets/comma.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO of TechStartup Inc",
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      image: avatar,
    },
    {
      name: "Michael Smith",
      title: "CTO of InnovateX",
      text: "Their team delivered exceptional results. The professionalism, communication, and high-quality code exceeded our expectations.",
      image: avatar,
    },
    {
      name: "Priya Sharma",
      title: "Founder of Cloudify",
      text: "We partnered with SWL Solutions to scale our cloud infrastructure. Their AI expertise and agile approach made the project seamless.",
      image: avatar,
    },
    {
      name: "David Lee",
      title: "COO of FinTech Hub",
      text: "Working with SWL Solutions was transformative. Reliable delivery, innovative thinking, and consistent communication throughout.",
      image: avatar,
    },
    {
      name: "Aisha Khan",
      title: "VP of Product, DataFlow",
      text: "Their focus on detail and customer satisfaction is unmatched. The end product was delivered ahead of schedule and exceeded expectations.",
      image: avatar,
    },
    {
      name: "James Carter",
      title: "Managing Director, Nova Systems",
      text: "From the initial concept to deployment, SWL Solutions demonstrated technical excellence and dedication. A true tech partner.",
      image: avatar,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detect which card is centered
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      const cards = container.querySelectorAll(".testimonial-card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to a card when clicking a dot
  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(`[data-index="${index}"]`);
    if (card instanceof HTMLElement) {
      container.scrollTo({
        left:
          card.offsetLeft -
          container.offsetWidth / 2 +
          card.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const sectionGradient =
    "linear-gradient(90deg, #0A0A0F 0%, #151527 40%, #000000 100%)";

  return (
    <section
      className="text-white py-24 overflow-hidden"
      style={{ background: sectionGradient }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
          What Our Clients Say
        </h2>
        <p className="text-white/70 mb-14 text-sm sm:text-base">
          Don’t just take our word for it. Here’s what our clients have to say
          about working with us.
        </p>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth justify-start px-2 sm:px-0"
          style={{ height: "430px" }}
        >
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={i}
                data-index={i}
                className={`testimonial-card flex-shrink-0 mx-4 snap-center transition-all duration-700 flex flex-col justify-center ${
                  isActive
                    ? "scale-105 z-20"
                    : "scale-90 opacity-60 blur-[1px]"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Gradient border (from top-left to bottom-right) */}
                <div
                  className="w-[300px] sm:w-[380px] lg:w-[440px] h-[360px] sm:h-[390px] lg:h-[410px] rounded-[20px] p-[8px]"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(103,100,248,0.9), #000000)",
                  }}
                >
                  {/* Card background gradient (from bottom-right to top-left) */}
                  <div
                    className="w-full h-full rounded-[18px] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(to top left, rgba(22,18,46,0.98), #05040F)",
                    }}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-10">
                      {/* Comma icon at top-left */}
                      <img
                        src={commaIcon}
                        alt="quote mark"
                        className="absolute top-6 left-8 w-8 h-6 object-contain"
                      />

                      {/* Text */}
                      <p
                        className="mx-auto mb-6"
                        style={{
                          maxWidth: "471px",
                          fontFamily: "Inter, system-ui, -apple-system",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "25.81px",
                          letterSpacing: "0.03em",
                          textAlign: "center",
                        }}
                      >
                        {t.text}
                      </p>

                      {/* Avatar */}
                      <div className="flex flex-col items-center gap-2 mt-2">
                        <div className="w-[75px] h-[79px] rounded-full overflow-hidden border-[2.04px] border-[#6764F8] shadow-[0_0_20px_rgba(103,100,248,0.6)]">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Name + Title */}
                        <div className="flex flex-col items-center gap-[2px] mt-1">
                          <span className="font-semibold text-sm sm:text-base">
                            {t.name}
                          </span>
                          <span className="text-xs sm:text-sm text-white/70">
                            {t.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-[#6764F8] scale-125 shadow-[0_0_12px_rgba(103,100,248,0.7)]"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


