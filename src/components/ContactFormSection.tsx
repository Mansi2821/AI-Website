import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section className="w-full bg-black sm:py-20">
      <div className="max-w-[1240px] mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50, rotateX: -25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-[24px] sm:text-[26px] font-semibold mb-8"
              style={{ fontFamily: "Montserrat", color: "#6764F8" }}
            >
              Send Request
            </motion.h2>

            <form className="space-y-6">

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <label className="block mb-2 text-sm">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[44px] px-4 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.05 }}
              >
                <label className="block mb-2 text-sm">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[44px] px-4 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <label className="block mb-2 text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full h-[44px] px-4 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.55 }}
              >
                <label className="block mb-2 text-sm">
                  Tell us about your project (Optional)
                </label>
                <textarea
                  rows={5}
                  placeholder="Type here..."
                  className="w-full px-4 py-3 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.75 }}
                className="text-xs text-white/60"
              >
                You can provide a link to any document if needed.
              </motion.p>

              {/* Submit */}
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(103,100,248,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full h-[48px] rounded-md text-white font-medium"
                style={{ background: "#6764F8" }}
              >
                Send Request
              </motion.button>
            </form>
          </motion.div>

          {/* ================= RIGHT: LOCATIONS ================= */}
          <motion.div
            initial={{ opacity: 0, rotateY: -90, x: -140 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              boxShadow: "0 0 35px rgba(118, 116, 236, 0.8)",
            }}
            className="
              rounded-xl p-8
              border border-white/10
              bg-gradient-to-b
              from-[#6764F880]
              via-[#6764F815]
              to- black
            "
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="space-y-10">

              {/* USA */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
              >
                <h3 className="text-lg font-semibold mb-2">United States</h3>
                <p className="text-sm text-white/80 mb-2">
                  W Barry Ave, Chicago, IL 60657, USA
                </p>
                <p className="text-sm">🇺🇸 +1 (786) 350-3783</p>
              </motion.div>

              {/* Australia */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.35 }}
              >
                <h3 className="text-lg font-semibold mb-2">Australia</h3>
                <p className="text-sm text-white/80 mb-2">
                  4 Riverina Blvd, Brookfield VIC 3338, Australia
                </p>
                <p className="text-sm">🇦🇺 +61 420 296 818</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ================= SCHEDULE CALL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 360 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 1.6 }}
          className="text-center mt-16"
        >
          <h3
            className="text-[22px] sm:text-[24px] font-semibold mb-6"
            style={{ fontFamily: "Montserrat", color: "#6764F8" }}
          >
            Schedule a Call
          </h3>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(103,100,248,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-md text-white font-medium"
            style={{ background: "#6764F8" }}
          >
            Schedule a Meeting
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}