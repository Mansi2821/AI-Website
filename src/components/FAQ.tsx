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
    <section className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Got questions? We’ve got answers. Here are the most common questions
            we receive from our clients.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`border border-brand/20 rounded-xl overflow-hidden bg-gradient-to-b from-[#27266C]/50 to-[#1B1B2A]/80 transition-all duration-500 ${
                activeIndex === i
                  ? "shadow-[0_0_20px_rgba(103,100,248,0.5)] border-brand/40"
                  : "hover:border-brand/30"
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                <span
                  className={`font-medium text-sm sm:text-base transition-colors ${
                    activeIndex === i ? "text-white" : "text-white/80"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-brand text-xl">
                  {activeIndex === i ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-sm text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
