import React from "react";
import RevealOnScroll from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB"];

  return (
    <section
      id="about"
      className="py-20 min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {/* Frontend */}
              <div className="rounded-xl p-6 border border-white/10 transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-4">💻 Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-600/70 hover:shadow-lg transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 border border-white/10 transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-4">🛠 Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm hover:bg-purple-600/70 hover:shadow-lg transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-6">
            <div className="rounded-xl p-6 border border-white/10 transition-all hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-2">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>
                  Currently pursuing B.Tech in “CS(AI)” from{" "}
                  <span className="text-white font-semibold">
                    Poornima Institute of Engineering and Technology, Jaipur
                    (2024–2028)
                  </span>
                  .
                </li>
                <li>
                  Relevant Coursework:{" "}
                  <span className="text-white font-semibold">
                    Web Development, Data Structures, IoT
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl p-6 border border-white/10 transition-all hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-2">🏢 Work Experience</h3>
                <ul>
                  <li>
                    Fresher — but already cooking projects hotter than your GPU
                    during gaming sessions 🔥🎮
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
