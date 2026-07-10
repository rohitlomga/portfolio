import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-2xl font-black">

          Rohit Lomga

        </h2>

        <div className="flex gap-6 mt-6 md:mt-0">

          <Github />

          <Linkedin />

        </div>

      </div>

      <p className="text-center mt-8 text-gray-400">

        © 2026 Rohit Lomga. All Rights Reserved.

      </p>

    </footer>
  );
}