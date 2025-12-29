import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* ================= LEFT: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-[26px] font-semibold mb-8"
              style={{ fontFamily: "Montserrat", color: "#00D1D1" }}
            >
              Send Request
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[44px] px-4 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[44px] px-4 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full h-[44px] px-4 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm">
                  Tell us about your project (Optional)
                </label>
                <textarea
                  rows={5}
                  placeholder="Type here..."
                  className="w-full px-4 py-3 rounded-md bg-black border border-white/20 text-white outline-none focus:border-[#6764F8]"
                />
              </div>

              <p className="text-xs text-white/60">
                You can provide a link to any document if needed.
              </p>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  w-full h-[48px]
                  rounded-md
                  text-white font-medium
                "
                style={{ background: "#1992F0" }}
              >
                Send Request
              </motion.button>
            </form>
          </motion.div>

          {/* ================= RIGHT: LOCATIONS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              rounded-xl p-8
              bg-gradient-to-br from-[#0E3A40] to-[#0B2B30]
              border border-white/10
            "
          >
            <div className="space-y-10">
              {/* USA */}
              <div>
                <h3 className="text-lg font-semibold mb-2">United States</h3>
                <p className="text-sm text-white/80 mb-2">
                  W Barry Ave, Chicago, IL 60657, USA
                </p>
                <p className="text-sm">🇺🇸 +1 (786) 350-3783</p>
              </div>

              {/* Australia */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Australia</h3>
                <p className="text-sm text-white/80 mb-2">
                  4 Riverina Blvd, Brookfield VIC 3338, Australia
                </p>
                <p className="text-sm">🇦🇺 +61 420 296 818</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= SCHEDULE CALL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
          <h3
            className="text-[24px] font-semibold mb-6"
            style={{ fontFamily: "Montserrat", color: "#00D1D1" }}
          >
            Schedule a Call
          </h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              px-8 py-3
              rounded-md
              text-white font-medium
            "
            style={{ background: "#1992F0" }}
          >
            Schedule a Meeting
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
