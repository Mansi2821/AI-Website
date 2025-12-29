import aboutBg from "../assets/contact-hero.jpg";
import { motion } from "framer-motion";

export default function ContactHero() {
  const headingText = "Contact Us";

  return (
    <section
      className="
        relative w-full
        h-[760px] md:h-[820px]
        flex items-center justify-center
      "
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* GRADIENT OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] px-6 text-center">
        
        {/* ================= HEADING (BALL DROP ANIMATION) ================= */}
        <motion.h1
          className="text-[44px] md:text-[50px] font-semibold mb-6 flex justify-center gap-2 flex-wrap"
          style={{ fontFamily: "Montserrat" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {headingText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 200,
                  y: -100,
                  scale: 2,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* ================= PARAGRAPH (SECONDARY ANIMATION) ================= */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-[17px] md:text-[18px] leading-[30px] text-white/85"
          style={{ fontFamily: "Inter" }}
        >
          Let’s build something great together.
          <br />
          Reach out to us to discuss your ideas, ask questions,
          or explore how <span className="text-[#6764F8] font-medium">SWL Solutions</span> can help bring your vision to life.
        </motion.p>
      </div>
    </section>
  );
}














// import aboutBg from "../assets/contact-hero.jpg"; // same hero image
// import { motion } from "framer-motion";

// export default function ContactHero() {
//   return (
//     <section
//       className="
//         relative w-full
//         h-[760px] md:h-[820px]
//         flex items-center justify-center
//       "
//       style={{
//         backgroundImage: `url(${aboutBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* GRADIENT OVERLAY */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)",
//         }}
//       />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[900px] px-6 text-center">
//         {/* HEADING */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40, rotateX: -15 }}
//           animate={{ opacity: 1, y: 0, rotateX: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="text-[44px] md:text-[50px] font-semibold mb-6"
//           style={{ fontFamily: "Montserrat" }}
//         >
//           Contact Us
//         </motion.h1>

//         {/* PARAGRAPH */}
//         <motion.p
//           initial={{ opacity: 0, y: 40, rotateX: -10 }}
//           animate={{ opacity: 1, y: 0, rotateX: 0 }}
//           transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
//           className="text-[17px] md:text-[18px] leading-[30px] text-white/85"
//           style={{ fontFamily: "Inter" }}
//         >
//           Let’s build something great together.
//           <br />
//           Reach out to us to discuss your ideas, ask questions,
//           or explore how SWL Solutions can help bring your vision to life.
//         </motion.p>
//       </div>
//     </section>
//   );
// }
