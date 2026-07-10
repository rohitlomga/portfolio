import skills from "../../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-black mb-20">Skills</h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <SkillCard title="Frontend" items={skills.frontend} />

          <SkillCard title="Backend" items={skills.backend} />

          <SkillCard title="Programming" items={skills.languages} />

          <SkillCard title="Tools" items={skills.tools} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#F8F6F2] rounded-3xl p-10 shadow"
    >
      <h3 className="text-3xl font-bold mb-8">{title}</h3>

      <div className="flex flex-wrap gap-4">
        {items.map((skill, index) => (
          <span
            key={index}
            // className="px-5 py-3 rounded-full bg-[#4E342E] text-white"
            className="px-5 py-3 rounded-full bg-[#7a7776] text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
