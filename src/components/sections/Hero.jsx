import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import personal from "../../data/personal";
import profileImg from "../../assets/profile.png";
import { Link } from "react-scroll";
import resumeFile from "../../assets/Resume.pdf";

function Hero() {
  const hero = useRef();

  useGSAP(
    () => {
      gsap.from(".heroText", {
        y: 100,

        opacity: 0,

        duration: 1.2,

        stagger: 0.2,

        ease: "power4.out",
      });
    },
    { scope: hero },
  );

  return (
    <section
      ref={hero}
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[10px] text-[#8C6A4D]"
          >
            Hello I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl lg:text-9xl font-black leading-none"
          >
            ROHIT
            <br />
            LOMGA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-2xl"
          >
            {personal.subtitle}
          </motion.h2>

          <div className="mt-10 flex gap-6">
            <Link to="projects" smooth duration={500}>
              <button className="bg-[#4E342E] text-white px-8 py-4 rounded-full cursor-pointer">
                Projects
              </button>
            </Link>

            {/* <button className="border px-8 py-4 rounded-full cursor-pointer">Resume</button> */}
            <a
              href={resumeFile}
              download="Rohit_Lomga_Resume.pdf"
              className="border px-8 py-4 rounded-full cursor-pointer inline-block"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-[420px] h-[420px] rounded-full bg-[#d7c5b4] absolute blur-3xl" />

          <img
            src={profileImg}
            className="relative w-[420px] rounded-[40px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
