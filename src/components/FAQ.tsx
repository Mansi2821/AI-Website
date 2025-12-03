import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Our Starter packages typically take 2–3 weeks, Growth packages 4–6 weeks, and Enterprise projects 8–12 weeks. We provide detailed timelines during the consultation phase.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer maintenance and support packages to ensure your solution continues to perform optimally after deployment.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely. We can integrate seamlessly with your in-house team, providing extra bandwidth or specialized expertise as needed.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in AI/ML, full-stack web development (React, Node.js), cloud solutions (AWS, Azure), and automation systems.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="text-white py-24 overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2
            className="mb-2"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "28px",
              lineHeight: "40px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/70 text-sm sm:text-base max-w-2xl"
          >
            Got questions? We've got answers. Here are the most common questions
            we receive from our clients.
          </motion.p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, i) => {
            const isActive = activeIndex === i;

            const slideFromLeft = i % 2 === 0;
            const xStart = slideFromLeft ? -200 : 200;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: xStart }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35 + i * 0.18, // noticeable stagger
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="overflow-hidden transition-all duration-500 rounded-[10px]"
                style={{
                  width: "100%",
                  maxWidth: "1242px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90.57deg, #000000 0.51%, rgba(103,100,248,0.3) 100%)",
                  border: "1px solid #6764F8",
                }}
              >
                {/* QUESTION ROW */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                  style={{ height: "74px" }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + i * 0.18,
                    }}
                    className={`font-medium text-sm sm:text-base ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {faq.question}
                  </motion.span>

                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: isActive ? 180 : 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.45 + i * 0.18,
                    }}
                    className="text-[#A287FF] text-xl flex-shrink-0"
                  >
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </motion.span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.05,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="px-6 pb-5"
                    >
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="text-sm text-white/75 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}










