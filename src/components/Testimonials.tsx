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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) setActiveIndex(index);
        });
      },
      {
        root: container,
        threshold: 0.6, // Card must be 60% visible to count as active
      }
    );

    const cards = container.querySelectorAll(".testimonial-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
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
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth justify-start"
        >
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                data-index={i}
                className={`testimonial-card flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[480px] mx-4 snap-center rounded-2xl border border-brand/20 bg-gradient-to-b from-[#27266C]/60 to-[#1B1B2A]/80 shadow-lg transition-all duration-700 ${
                  isActive
                    ? "scale-105 border-brand/50 shadow-[0_0_35px_rgba(103,100,248,0.5)] z-20"
                    : "opacity-50 scale-90 blur-[1px]"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <FaQuoteLeft className="text-brand text-3xl mb-4" />
                  <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                    {t.text}
                  </p>
                  <div className="w-16 h-16 rounded-full border-2 border-brand overflow-hidden mb-3">
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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-brand scale-125" : "bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
