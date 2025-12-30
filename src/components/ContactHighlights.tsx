import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";

/* ================= COUNT UP COMPONENT ================= */
function CountUp({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const duration = 3800;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ContactHighlights() {
  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* ================= TOP CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 text-center">

          {[
            {
              icon: FiPhone,
              title: "Phone",
              desc: "Contact us for any queries and discuss your project right away",
              value: "+91-XXXXXXXXXX",
            },
            {
              icon: FiMail,
              title: "Email",
              desc: "Reach out for your product and system to build and integrate",
              value: "info@swlsolutions.com",
            },
            {
              icon: FiMapPin,
              title: "Location",
              desc: "India & Global Delivery\nServing clients worldwide",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.5 }}
              whileHover={{
                boxShadow: "0 0 30px rgba(103,100,248,0.6)",
                scale: 1.03,
              }}
              className="
                rounded-xl
                p-6
                transition-shadow duration-150
                transition-transform duration-150
              "
            >
              <div className="w-[72px] h-[72px] mx-auto mb-6 rounded-xl border border-[#6764F8]/40 flex items-center justify-center">
                <item.icon size={28} className="text-[#6764F8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/70 mb-4 text-sm leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
              {item.value && (
                <p className="text-white text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* ================= DESCRIPTION ================= */}
       

        <motion.p
  initial={{
    opacity: 0,
    x: typeof window !== "undefined" && window.innerWidth < 640 ? 0 : 400,
    y: typeof window !== "undefined" && window.innerWidth < 640 ? 40 : 0,
  }}
  whileInView={{ opacity: 1, x: 0, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
  className="text-center text-white text-[16px] sm:text-[18px] leading-[30px] max-w-[1000px] mx-auto mb-20"
  style={{ fontFamily: "Inter" }}
>

          As a custom software development company,{" "}
          <span className="text-[#6764F8] font-semibold">SWL Solutions</span>{" "}
          has delivered scalable B2B and B2C digital products used by businesses
          across industries. We focus on building secure, high-performance
          solutions designed for long-term growth.
        </motion.p>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "950K+", label: "Lines of Code" },
            { value: "70+", label: "Happy Clients" },
            { value: "7000+", label: "Hours of Development" },
            { value: "24/7", label: "Support Availability" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 + idx * 0.15 }}
            >
              <h2 className="text-[#6764F8] text-[32px] sm:text-[40px] font-bold mb-2">
                <CountUp value={item.value} />
              </h2>
              <p className="text-white text-sm tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}