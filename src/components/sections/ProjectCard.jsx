import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
// TODO : Change Github Icon

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-[30px] bg-white shadow-xl"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-64 w-full object-cover transition duration-500 hover:scale-110"
      />

      <div className="p-8">
        <span className="text-sm uppercase tracking-widest text-[#8C6A4D]">
          {project.category}
        </span>

        <h3 className="text-3xl font-bold mt-3">{project.title}</h3>

        <p className="mt-5 text-gray-600 leading-7">{project.description}</p>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              // className="bg-[#4E342E] text-white px-4 py-2 rounded-full text-sm"
              className="bg-[#7a7776] text-white px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-8">
          {/* <a
            href={project.github}
            className="flex items-center gap-2"
          > */}
          {/* // TODO : Change Github Icon */}
          {/* <FolderGit2 size={18} /> 
            GitHub
          </a> */}

          {project?.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
