import { motion } from "framer-motion";

import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import img4 from "../assets/blog4.png";

export default function LatestInsights() {
  const insights = [
    {
      title: "AWS Cost Optimization: 10 Strategies That Saved Our Clients $50K+",
      tag: "Cloud",
      author: "Eleanor Vance",
      date: "January 15, 2024",
      readTime: "8 min read",
      img: img1,
    },
    {
      title: "Empowering Businesses Through Technology",
      tag: "",
      author: "",
      date: "",
      readTime: "",
      img: img2,
      isTextOnly: true,
      description:
        "How innovative IT solutions drive efficiency, growth, and digital transformation.",
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
      img: img1,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Latest Insights
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl">
            Thought leadership, technical tutorials, and industry insights from
            our team.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 45px rgba(162,135,255,0.8)",
              }}
              className="group rounded-2xl overflow-hidden border border-[#3B3473]/50
                bg-gradient-to-b from-[#4B3E9E] via-[#352A73] to-[#1A1635]
                hover:border-[#A287FF]/60
                shadow-[0_0_25px_rgba(162,135,255,0.25)]
                hover:shadow-[0_0_50px_rgba(162,135,255,0.8)]
                transition-all duration-500 cursor-pointer"
            >
              {!item.isTextOnly ? (
                <>
                  {/* Image Card */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full object-cover"
                    />
                    {item.tag && (
                      <span
                        className="absolute top-3 left-3 text-xs font-semibold 
                        bg-gradient-to-r from-[#5A5DFF] to-[#0A0A0F]
                        text-white px-3 py-1 rounded-full border border-white/20 shadow-[0_0_10px_rgba(162,135,255,0.25)]"
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-base mb-2 leading-snug group-hover:text-[#A287FF] transition-all duration-300">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
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
                // Text-only Card
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 leading-snug group-hover:text-[#A287FF] transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
