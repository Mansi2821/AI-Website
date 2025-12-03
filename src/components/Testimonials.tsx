import { useRef, useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import avatar from "../assets/avatar.png";
import commaIcon from "../assets/comma.png";

/* ---------------- TYPES ---------------- */

interface TestimonialItem {
  name: string;
  title: string;
  text: string;
  image: string;
}

interface EmptyCard {
  empty: true;
}

type CardType = TestimonialItem | EmptyCard;

/* ---------------- ANIMATION VARIANTS (typed) ---------------- */

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const zoomItem: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: "SARAH JOHNSON",
      title: "CEO of TechStartup Inc",
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      image: avatar,
    },
    {
      name: "MICHAEL SMITH",
      title: "CTO of InnovateX",
      text: "Their team delivered exceptional results. The professionalism, communication, and high-quality code exceeded our expectations.",
      image: avatar,
    },
    {
      name: "PRIYA SHARMA",
      title: "Founder of Cloudify",
      text: "We partnered with SWL Solutions to scale our cloud infrastructure. Their AI expertise and agile approach made the project seamless.",
      image: avatar,
    },
    {
      name: "DAVID LEE",
      title: "COO of FinTech Hub",
      text: "Working with SWL Solutions was transformative. Reliable delivery, innovative thinking, and consistent communication throughout.",
      image: avatar,
    },
    {
      name: "AISHA KHAN",
      title: "VP of Product, DataFlow",
      text: "Their focus on detail and customer satisfaction is unmatched. The end product was delivered ahead of schedule and exceeded expectations.",
      image: avatar,
    },
    {
      name: "JAMES CARTER",
      title: "Managing Director, Nova Systems",
      text: "From the initial concept to deployment, SWL Solutions demonstrated technical excellence and dedication. A true tech partner.",
      image: avatar,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Add empty cards */
  const EXTENDED: CardType[] = [{ empty: true }, ...testimonials, { empty: true }];

  /* Detect centered card */
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

  /* Auto-scroll */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      container.scrollBy({
        left: 300,
        behavior: "smooth",
      });

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(`[data-index="${index}"]`) as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => scrollToCard(Math.max(activeIndex - 1, 0));
  const scrollRight = () => scrollToCard(Math.min(activeIndex + 1, EXTENDED.length - 1));

  return (
    <section className="text-white py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-left"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* HEADING */}
        <motion.h2
          variants={zoomItem}
          style={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "28px",
            lineHeight: "40px",
          }}
          className="mb-2"
        >
          What Our Clients Say
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          variants={zoomItem}
          className="text-white/70 mb-14 text-sm sm:text-base"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            lineHeight: "22px",
          }}
        >
          Don’t just take our word for it. Here’s what our clients say.
        </motion.p>

        {/* SLIDER */}
        <motion.div
          variants={fadeUpItem}
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2 sm:px-0"
          style={{
            height: "500px",
            overflowY: "hidden",
          }}
        >
          {EXTENDED.map((t, i) => {
            const isActive = i === activeIndex;

            if ("empty" in t) {
              return (
                <div
                  key={i}
                  data-index={i}
                  className="testimonial-card flex-shrink-0 mx-4 snap-center"
                  style={{
                    width: window.innerWidth < 640 ? "270px" : "420px",
                    height: window.innerWidth < 640 ? "300px" : "360px",
                    opacity: 0,
                  }}
                />
              );
            }

            return (
              <motion.div
                key={i}
                data-index={i}
                className={`testimonial-card flex-shrink-0 mx-4 snap-center transition-all duration-700 flex flex-col justify-center ${
                  isActive ? "scale-105 z-20" : "scale-90 opacity-60 blur-[1px]"
                }`}
              >
                <div
                  className="rounded-[20px] p-[8px]"
                  style={{
                    width: isActive ? (window.innerWidth < 640 ? "310px" : "500px") : (window.innerWidth < 640 ? "270px" : "420px"),
                    height: isActive ? (window.innerWidth < 640 ? "350px" : "410px") : (window.innerWidth < 640 ? "300px" : "360px"),
                    transition: "all 0.5s",
                    background: "linear-gradient(to bottom right, rgba(104,102,236,0.95) 5%, rgba(37,36,122,0.9) 70%)",
                  }}
                >
                  <div
                    className="w-full h-full rounded-[18px] flex items-center justify-center"
                    style={{
                      background: "linear-gradient(to top left, rgba(50,49,141,0.9) 5%, #05040F 70%)",
                    }}
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-10">
                      <img
                        src={commaIcon}
                        alt="quote"
                        className="absolute top-6 left-8 w-8 h-6 object-contain"
                      />

                      <p
                        className="mx-auto mb-6"
                        style={{
                          maxWidth: "471px",
                          fontFamily: "Inter",
                          fontStyle: "italic",
                          fontSize: "14px",
                          lineHeight: "25.81px",
                          letterSpacing: "0.03em",
                          textAlign: "center",
                        }}
                      >
                        {t.text}
                      </p>

                      <div className="flex flex-col items-center gap-2 mt-2">
                        <div
                          className="rounded-full overflow-hidden border-[2.04px] border-[#6764F8]"
                          style={{
                            width: "75px",
                            height: "79px",
                          }}
                        >
                          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col items-center gap-[2px] mt-1">
                          <span className="font-semibold text-sm sm:text-base">{t.name}</span>
                          <span className="text-xs sm:text-sm text-white/70">{t.title}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* DOTS */}
        <motion.div variants={fadeUpItem} className="flex justify-center items-center gap-4 mt-10">
          <button onClick={scrollLeft} className="text-[#6764F8] text-xl font-bold">
            &lt;
          </button>

          {EXTENDED.map((t, i) =>
            "empty" in t ? null : (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-[#6764F8] scale-125 shadow-[0_0_12px_rgba(103,100,248,0.7)]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              ></button>
            )
          )}

          <button onClick={scrollRight} className="text-[#6764F8] text-xl font-bold">
            &gt;
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}














