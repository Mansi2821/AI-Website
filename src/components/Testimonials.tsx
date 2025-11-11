import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import avatar from "../assets/avatar.png"; // Replace with your client image

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
    handleScroll(); // run once
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to a card when clicking a dot
  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(`[data-index="${index}"]`);
    if (card instanceof HTMLElement) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-24 overflow-hidden">
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
          style={{
            height: "430px", // ✅ Fixed height for consistent layout
          }}
        >
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                data-index={i}
                className={`testimonial-card flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] mx-4 snap-center rounded-2xl border transition-all duration-700 flex flex-col justify-center
                  ${
                    isActive
                      ? "scale-105 border-[#A287FF] shadow-[0_0_40px_rgba(162,135,255,0.6)] z-20"
                      : "scale-90 opacity-60 border-[#3B3473] blur-[1px]"
                  }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(58,46,116,0.9) 0%, rgba(28,24,56,0.95) 100%)",
                }}
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <FaQuoteLeft className="text-[#A287FF] text-3xl mb-4" />
                  <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                    {t.text}
                  </p>
                  <div className="w-16 h-16 rounded-full border-2 border-[#A287FF] overflow-hidden mb-3 shadow-[0_0_20px_rgba(162,135,255,0.5)]">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-base">{t.name}</h4>
                  <p className="text-white/60 text-sm">{t.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-[#A287FF] scale-125 shadow-[0_0_12px_rgba(162,135,255,0.7)]"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
