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
    <section className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl">
            Got questions? We’ve got answers. Here are the most common questions
            we receive from our clients.
          </p>
        </motion.div>

        {/* FAQ List */}
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
                className={`rounded-xl overflow-hidden border 
                  bg-gradient-to-b from-[#3A2E74]/40 via-[#2C2560]/50 to-[#181632]/60 
                  transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "border-[#A287FF]/60 shadow-[0_0_25px_rgba(162,135,255,0.6)]"
                      : "border-[#3B3473]/40 hover:border-[#A287FF]/40 hover:shadow-[0_0_15px_rgba(162,135,255,0.3)]"
                  }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-all"
                >
                  <span
                    className={`font-medium text-sm sm:text-base transition-colors ${
                      isActive ? "text-white" : "text-white/80 group-hover:text-white"
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

                {/* Animated Answer */}
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
                        transition={{ duration: 0.4, ease: "easeOut" }}
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
