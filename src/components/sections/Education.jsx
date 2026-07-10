import education from "../../data/education";
import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="py-32 bg-[#F8F6F2]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black mb-20">

          Education

        </h2>

        <div className="relative border-l-4 border-[#4E342E] ml-6">

          {education.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity:0,x:-80 }}

              whileInView={{ opacity:1,x:0 }}

              viewport={{ once:true }}

              transition={{ delay:index*.2 }}

              className="mb-20 ml-10"

            >

              <div className="absolute -left-[14px] w-6 h-6 rounded-full bg-[#4E342E]" />

              <span className="text-sm uppercase tracking-widest text-[#8C6A4D]">

                {item.year}

              </span>

              <h3 className="text-3xl font-bold mt-3">

                {item.title}

              </h3>

              <h4 className="text-xl mt-2 text-[#4E342E]">

                {item.school}

              </h4>

              <p className="font-medium mt-2">

                {item.degree}

              </p>

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

export default Education;