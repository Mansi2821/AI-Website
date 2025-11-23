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
      title: "Empowering\nbusiness through\ntechnology",
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
    <section
      className="text-white py-15 overflow-hidden"
      style={{ background: "linear-gradient(90deg,#0A0A0F 0%,#151527 40%,#000000 100%)" }}
    >
      <div className="max-w-[1220px] mx-auto px-6">

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

        {/* GRID */}
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
                boxShadow: "0 0 45px rgba(103,100,248,0.55)",
              }}
              style={{
                width: "393px",
                height: "282px",
                borderRadius: "12px",
                border: "1px solid #272727",
                background:
                  "linear-gradient(to bottom left, rgba(103,100,248,0.6) 25%, rgba(20,20,20,0.85) 80%)",
                marginLeft: "-5px",
              }}
              className="group overflow-hidden transition-all duration-500 cursor-pointer mx-auto relative"
            >
              {!item.isTextOnly ? (
                <>
                  {/* IMAGE */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: "377px",
                      height: "168px",
                      marginTop: "7.95px",
                      marginLeft: "8px",
                      borderRadius: "12px",
                      border: "1px solid #272727",
                    }}
                  >
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover rounded-[12px]"
                    />

                    {/* TAG */}
                    {item.tag && (
                      <span
                        style={{
                          width: "94px",
                          height: "30px",
                          borderRadius: "90px",
                          border: "1px solid #6764F8B2",
                          padding: "6px 12px",
                          top: "10px",
                          left: "10px",
                        }}
                        className="absolute text-xs font-semibold bg-black text-white flex items-center justify-center shadow-[0_0_10px_rgba(103,100,248,0.4)]"
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* TITLE + META */}
                  <div className="px-4 mt-3">
                    <h3
                      className="font-semibold text-base mb-1 leading-snug transition-all duration-300"
                      style={{
                        color: "white",
                        textShadow: "0 0 10px rgba(255,255,255,0.15)",
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
                // ⭐ **UPDATED TEXT-ONLY CARD (only typography changed)**
                <div className="p-6 flex flex-col justify-center h-full">
                  <h3
                    style={{
                      whiteSpace: "pre-line",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "32px",
                      lineHeight: "40px",
                      letterSpacing: "0%",
                      color: "white",
                    }}
                    className="leading-snug transition-all duration-300"
                  >
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


