import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
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
    <section className="bg-gradient-to-b from-[#0A0A0F] to-[#151527] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
          Choose Your Package
        </h2>
        <p className="text-white/70 mb-16 text-sm sm:text-base">
          Transparent pricing with no hidden fees. All packages include our
          commitment to quality and your success.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="group relative bg-[#1B1B2A] hover:bg-gradient-to-b hover:from-[#27266C] hover:to-[#1B1B2A] border border-[#2E2E44] hover:border-brand/60 rounded-2xl p-8 transition-all duration-500 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(103,100,248,0.4)]"
            >
              <div className="mb-4 text-left">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  {i === 0
                    ? "Perfect for small projects & MVPs"
                    : i === 1
                    ? "Ideal for growing businesses and startups"
                    : "Complete solution for large-scale projects"}
                </p>

                <div className="mb-2 text-3xl font-bold text-white">
                  {plan.price}
                  <span className="text-white/70 text-sm font-normal ml-1">
                    one-time
                  </span>
                </div>

                <p className="text-sm text-white/80 mb-1">
                  <strong>Timeline:</strong> {plan.timeline}
                </p>
                <p className="text-sm text-white/80 mb-4">
                  <strong>Revisions:</strong> {plan.revisions}
                </p>

                <p className="font-semibold mb-2 text-sm">Services Included:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {plan.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-md bg-black/40 border border-white/10 group-hover:border-brand/30 transition"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <p className="font-semibold mb-2 text-sm">Features:</p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FaCheckCircle className="text-brand text-xs mt-[3px]" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full py-3 rounded-md bg-brand text-white font-semibold text-sm hover:bg-brand-80 transition">
                  Get Started
                </button>

                {/* Support info */}
                <p className="text-xs text-center text-white/70 mt-3">
                  {plan.support}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
