import { motion } from "framer-motion";
import { useState } from "react";

import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import img4 from "../assets/blog4.png";
import img5 from "../assets/blog5.png";

/* -------------------- TYPES -------------------- */

interface InsightItem {
  title: string;
  tag?: string;
  author?: string;
  date?: string;
  readTime?: string;
  img: string;
  isTextOnly?: boolean;
  description?: string;
}

interface InsightCardProps {
  item: InsightItem;
  index: number;
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
  mobile?: boolean;
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function LatestInsights() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const insights: InsightItem[] = [
    {
      title: "AWS Cost Optimization: 10 Strategies That Saved Our Clients $50K+",
      tag: "Cloud",
      author: "Eleanor Vance",
      date: "January 15, 2024",
      readTime: "8 min read",
      img: img1,
    },

    {
      title: "Empowering\nbusiness through\ntechnology",
      img: img2,
      isTextOnly: true,
      description: "How innovative IT solutions drive efficiency, growth, and digital transformation.",
    },

    {
      title: "Building Scalable React Applications: Best Practices for 2024",
      tag: "Engineering",
      author: "Eleanor Vance",
      date: "January 15, 2024",
      readTime: "8 min read",
      img: img3,
    },

    {
      title: "Mobile App Performance: From 2s to 200ms Load Times",
      tag: "Mobile",
      author: "Kenji Tanaka",
      date: "January 5, 2024",
      readTime: "7 min read",
      img: img4,
    },

    {
      title: "AI in Enterprise Systems: Transforming Workflows at Scale",
      tag: "AI",
      author: "Eleanor Vance",
      date: "January 20, 2024",
      readTime: "6 min read",
      img: img2,
    },

    {
      title: "Securing Cloud Infrastructure: Lessons from 2024",
      tag: "Security",
      author: "Eleanor Vance",
      date: "January 25, 2024",
      readTime: "9 min read",
      img: img5,
    },
  ];

  return (
    <section
      className="text-white py-16 overflow-hidden"
      style={{
        background: "linear-gradient(90deg,#0A0A0F 0%,#151527 40%,#000000 100%)",
      }}
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "28px",
              lineHeight: "40px",
            }}
            className="mb-2"
          >
            Latest Insights
          </h2>

          <p className="text-white/70 text-sm sm:text-base max-w-2xl">
            Thought leadership, technical tutorials, and industry insights from our team.
          </p>
        </motion.div>

        {/* DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <InsightCard
              key={i}
              item={item}
              index={i}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>

        {/* MOBILE — horizontal scroll */}
        <div className="sm:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2 pt-1">
          {insights.map((item, i) => (
            <InsightCard
              key={i}
              item={item}
              index={i}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              mobile
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CARD COMPONENT -------------------- */

function InsightCard({
  item,
  index,
  activeCard,
  setActiveCard,
  mobile,
}: InsightCardProps) {
  const isActive = activeCard === index;

  return (
    <motion.div
      onClick={() => (mobile ? setActiveCard(isActive ? null : index) : null)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={
        !mobile
          ? { scale: 1.03, boxShadow: "0 0 45px rgba(103,100,248,0.55)" }
          : {}
      }
      animate={
        mobile
          ? isActive
            ? {
                scale: 1.03,
                boxShadow: "0 0 45px rgba(103,100,248,0.55)",
              }
            : { scale: 1 }
          : {}
      }
      className="group overflow-hidden transition-all duration-500 cursor-pointer relative snap-center"
      style={{
        width: mobile ? "85vw" : "393px",
        maxWidth: "393px",
        minWidth: mobile ? "85vw" : "unset",
        height: mobile ? "auto" : "282px",
        borderRadius: "12px",
        border: "1px solid #272727",
        background:
          "linear-gradient(to bottom left, rgba(103,100,248,0.6) 25%, rgba(20,20,20,0.85) 80%)",
      }}
    >
      {!item.isTextOnly ? (
        <>
          {/* IMAGE */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              height: mobile ? "180px" : "168px",
              marginTop: "8px",
              borderRadius: "12px",
              border: "1px solid #272727",
              marginLeft: mobile ? "0px" : "8px",
              maxWidth: "377px",
            }}
          >
            <motion.img
              src={item.img}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover rounded-[12px]"
            />

            {/* TAG */}
            {item.tag && (
              <span
                className="absolute text-xs font-semibold bg-black text-white flex items-center justify-center shadow-[0_0_10px_rgba(103,100,248,0.4)]"
                style={{
                  width: "94px",
                  height: "30px",
                  borderRadius: "90px",
                  border: "1px solid #6764F8B2",
                  padding: "6px 12px",
                  top: "10px",
                  left: "10px",
                }}
              >
                {item.tag}
              </span>
            )}
          </div>

          {/* TITLE + META */}
          <div className="px-4 py-3">
            <h3
              className="font-semibold text-base leading-snug mb-1"
              style={{
                color: "white",
                textShadow: "0 0 8px rgba(255,255,255,0.12)",
              }}
            >
              {item.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
              <span>{item.author}</span>
              {item.author && (
                <>
                  <span>•</span>
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="p-6 flex flex-col justify-center h-full">
          <h3
            className="leading-snug"
            style={{
              whiteSpace: "pre-line",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: mobile ? "26px" : "32px",
              lineHeight: mobile ? "32px" : "40px",
              color: "white",
            }}
          >
            {item.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mt-3">
            {item.description}
          </p>
        </div>
      )}
    </motion.div>
  );
}

