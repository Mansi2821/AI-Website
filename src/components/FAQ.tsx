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
    <section
      className="text-white py-24 overflow-hidden"
      style={{
        background: "linear-gradient(90deg,#0A0A0F 0%,#151527 40%,#000000 100%)",
      }}
    >
      <div className="max-w-[1220px] mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

          <p className="text-white/70 text-sm sm:text-base max-w-2xl">
            Got questions? We've got answers. Here are the most common questions
            we receive from our clients.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`overflow-hidden transition-all duration-500 rounded-[10px]`}
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
                  <span
                    className={`font-medium text-sm sm:text-base ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    className="text-[#A287FF] text-xl flex-shrink-0"
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
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
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="px-6 pb-5"
                    >
                      <motion.p
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.4 }}
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



