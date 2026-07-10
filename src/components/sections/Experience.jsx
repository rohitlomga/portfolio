import { motion } from "framer-motion";
import experience from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-[#F8F6F2]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center mb-20">
          Experience
        </h2>

        <div className="space-y-8">

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <span className="text-sm uppercase tracking-widest text-[#8C6A4D]">
                {item.year}
              </span>

              <h3 className="text-3xl font-bold mt-3">
                {item.role}
              </h3>

              <h4 className="text-xl text-[#4E342E] mt-2">
                {item.company}
              </h4>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}