import { motion } from "framer-motion";
import about from "../../data/about";
import CountUp from "react-countup";
import aboutImg from "../../assets/about.png";
function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            className="rounded-3xl shadow-xl"
          />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-[#F8F6F2] rounded-[40px] shadow-xl">
            <img
              src={aboutImg}
              alt="About"
              className="w-full max-w-md object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-8">{about.heading}</h2>

          <p className="text-lg leading-8 text-gray-600">{about.description}</p>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <Stat value={about.projects} title="Projects" />

            <Stat value={about.experience} title="Years Learning" />

            {/* <Stat value={about.technologies} title="Technologies" /> */}

            {/* <Stat value={about.certifications} title="Certificates" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, title }) {
  return (
    <div className="bg-[#F8F6F2] rounded-3xl p-8 text-center">
      <h3 className="text-5xl font-black text-[#4E342E]">{value}</h3>

      {/* <h3 className="text-6xl font-black">
        <CountUp end={50} duration={3} />+
      </h3> */}

      <p className="mt-3">{title}</p>
    </div>
  );
}

export default About;
