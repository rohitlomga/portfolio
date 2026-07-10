import { Menu } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import { Github } from "@boxicons/react";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 left-0 backdrop-blur-md bg-white/60 border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        <h1 className="text-3xl font-black tracking-wider">RL.</h1>

        <ul className="hidden md:flex gap-10 font-medium">
          <li className="cursor-pointer">
            <Link to="home" spy smooth offset={-100} duration={500}>
              Home
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link to="about" spy smooth offset={-100} duration={500}>
              About
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link to="education" spy smooth offset={-100} duration={500}>
              Education
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link to="skills" spy smooth offset={-100} duration={500}>
              Skills
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link to="projects" spy smooth offset={-100} duration={500}>
              Projects
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link to="contact" spy smooth offset={-100} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4">
          <button className="md:hidden">
            <Menu />
          </button>

          <a
            href="https://github.com/rohitlomga"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://github.com/rohitlomga"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={21} />
          </a>
        </div>
        {/* 
        <button onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
