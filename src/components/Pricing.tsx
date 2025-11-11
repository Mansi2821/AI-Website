import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
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
    <section className="relative w-full bg-gradient-to-b from-[#09091A] via-[#0E0D23] to-[#17153A] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-3"
        >
          Choose Your Package
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 mb-16 text-sm sm:text-base max-w-2xl mx-auto"
        >
          Transparent pricing with no hidden fees. All packages include our
          commitment to quality and your success.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-8 flex flex-col justify-between 
                bg-gradient-to-b from-[#3A2E74] via-[#2C2560] to-[#181632] 
                border border-[#3B3473] shadow-[0_0_20px_rgba(162,135,255,0.15)] 
                transition-all duration-500 hover:scale-105 
                hover:shadow-[0_0_50px_rgba(162,135,255,0.7)] 
                hover:border-[#A287FF] 
                hover:bg-gradient-to-b hover:from-[#5A4AE8] hover:via-[#4B3BD2] hover:to-[#241F60] 
                group"
            >
              {/* Card Content */}
              <div>
                <div className="text-left mb-5">
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
                  <p className="text-sm text-white/80 mb-5">
                    <strong>Revisions:</strong> {plan.revisions}
                  </p>
                </div>

                {/* Services */}
                <div className="mb-5">
                  <p className="font-semibold mb-2 text-sm">Services Included:</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-md bg-black/30 border border-white/10 group-hover:border-[#C2A5FF80] text-white/90 transition-all"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <p className="font-semibold mb-2 text-sm">Features:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-white/80"
                      >
                        <FaCheckCircle
                          className="text-[#A287FF] text-xs mt-[3px] flex-shrink-0"
                          size={12}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Section - Button + Support */}
              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-full py-3 rounded-md bg-[#A287FF] text-white font-semibold text-sm 
                    hover:shadow-[0_0_30px_rgba(162,135,255,0.8)] hover:bg-[#BCA6FF] 
                    transition-all duration-300"
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
