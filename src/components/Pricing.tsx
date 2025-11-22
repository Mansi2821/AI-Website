import { motion } from "framer-motion";
import checkIcon from "../assets/check-tick.png";

export default function Pricing() {
  const brand = "#6764F8";

  const plans = [
    {
      name: "Starter",
      subtitle: "Perfect for small projects & MVPs",
      price: "$5,000",
      timeline: "2–3 weeks",
      revisions: "1",
      support: "Email support for 30 days",
      services: ["Web Development", "UI/UX Design"],
      features: [
        "Up to 5 pages/screens",
        "Basic responsive design",
        "1 revision round",
        "2 weeks delivery",
        "Email support",
        "Basic SEO optimization",
      ],
    },
    {
      name: "Growth",
      subtitle: "Ideal for growing businesses and startups",
      price: "$15,000",
      timeline: "4–6 weeks",
      revisions: "3",
      support: "Priority support for 90 days",
      services: [
        "Web Development",
        "UI/UX Design",
        "Mobile Development",
        "Backend & APIs",
      ],
      features: [
        "Up to 15 pages/screens",
        "Advanced responsive design",
        "3 revision rounds",
        "4 weeks delivery",
        "Priority support",
        "Advanced SEO & analytics",
        "Mobile optimization",
        "Performance optimization",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "Complete solution for large-scale projects",
      price: "$50,000",
      timeline: "8–12 weeks",
      revisions: "Unlimited",
      support: "Dedicated support for 1 year",
      services: [
        "Web Development",
        "Cloud & AWS",
        "Mobile Development",
        "Backend & APIs",
        "AI & Automation",
        "QA & Testing",
      ],
      features: [
        "Unlimited pages/screens",
        "Custom design system",
        "Unlimited revisions",
        "8 weeks delivery",
        "Dedicated project manager",
        "Full-stack development",
        "Cloud infrastructure setup",
        "Advanced security features",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#09091A] via-[#0E0D23] to-[#17153A] text-white py-12 overflow-hidden">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-left">
        {/* ======================= HEADER ======================= */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: "28px",
            lineHeight: "40px",
            letterSpacing: "0%",
          }}
          className="mb-3"
        >
          Choose Your Package
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0%",
            color: "#D3D3D3",
          }}
          className="max-w-2xl mb-14"
        >
          Transparent pricing with no hidden fees. All packages include our
          commitment to quality and your success.
        </motion.p>

        {/* ======================= PRICING CARDS ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-between p-8"
              style={{
                width: "386px",
                height: "800px",
                borderRadius: "16px",
                background:
                  "linear-gradient(161.17deg, rgba(103,100,248,0.4) 1.78%, #000000 100%)",
                border: "1px solid rgba(103,100,248,0.25)",
                transition: "all 0.4s ease",
              }}
              whileHover={{
                scale: 1.03,
                borderWidth: "1.5px",
                borderColor: brand,
                boxShadow: "0px 4px 40px #6764F8",
                background:
                  "linear-gradient(161.17deg, #6764F8 1.78%, #000000 100%)",
              }}
            >
              {/* CONTENT BLOCK */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-white/70 text-sm mb-6">{plan.subtitle}</p>

                <div className="text-3xl font-bold text-white mb-1">
                  {plan.price}
                  <span className="text-white/70 text-sm font-normal ml-1">
                    one-time
                  </span>
                </div>

                <p className="text-sm text-white/80 mb-1">
                  <strong>Timeline:</strong> {plan.timeline}
                </p>

                <p className="text-sm text-white/80 mb-6">
                  <strong>Revisions:</strong> {plan.revisions}
                </p>

                {/* SERVICES */}
                <p className="font-semibold mb-2 text-sm">Services Included:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {plan.services.map((service, idx) => (
                    <span
                      key={idx}
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(103,100,248,0.3) 0%, rgba(103,100,248,0) 100%)",
                        border: "1px solid #6764F866",
                        padding: "6px 12px",
                        borderRadius: "90px",
                      }}
                      className="text-xs text-white/90"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* FEATURES */}
                <p className="font-semibold mb-2 text-sm">Features:</p>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <img
                        src={checkIcon}
                        className="w-4 h-4 mt-1 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ========== BUTTON FIXED ABOVE SUPPORT ========== */}
              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "320px",
                    height: "44px",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    background: "#6764F8",
                  }}
                  className="text-white font-semibold text-sm mx-auto block"
                >
                  Get Started
                </motion.button>

                <p className="text-xs text-center text-white/70 mt-3">
                  {plan.support}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




