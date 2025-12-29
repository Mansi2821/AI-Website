import { motion } from "framer-motion";

export default function ContactHighlights() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ================= TOP CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 text-center">

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-[72px] h-[72px] mx-auto mb-6 rounded-xl border border-white/20 flex items-center justify-center">
              📞
            </div>
            <h3 className="text-xl font-semibold mb-3">Phone</h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Contact us for any queries and discuss your project right away
            </p>
            <p className="text-white text-sm">+91-XXXXXXXXXX</p>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-[72px] h-[72px] mx-auto mb-6 rounded-xl border border-white/20 flex items-center justify-center">
              ✉️
            </div>
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Reach out for your product and system to build and integrate
            </p>
            <p className="text-white text-sm">info@swlsolutions.com</p>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-[72px] h-[72px] mx-auto mb-6 rounded-xl border border-white/20 flex items-center justify-center">
              📍
            </div>
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              India & Global Delivery
              <br />
              Serving clients worldwide
            </p>
          </motion.div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white text-lg leading-[34px] max-w-[1000px] mx-auto mb-24"
        >
          As a custom software development company, <span className="text-[#3BE0E0] font-semibold">SWL Solutions</span> has
          delivered scalable B2B and B2C digital products used by businesses across industries.
          We focus on building secure, high-performance solutions designed for long-term growth.
        </motion.p>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            { value: "950K+", label: "Lines of Code" },
            { value: "70+", label: "Happy Clients" },
            { value: "7K+", label: "Hours of Development" },
            { value: "24/7", label: "Support Availability" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#3BE0E0] text-[40px] font-bold mb-2">
                {item.value}
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
