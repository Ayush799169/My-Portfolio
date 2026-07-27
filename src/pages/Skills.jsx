import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,FaCode} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiCplusplus,SiNetlify,SiC,SiPython} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-400" },
  { name: "C", icon: <SiC />, color: "text-white" },
  { name: "Netlify", icon: <SiNetlify />, color: "text-orange-400" },
  { name: "Data Structure & Algorithm", icon: <FaCode/>, color: "text-blue-400" },
  { name: "Python", icon: <SiPython/>, color: "text-blue-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-right"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <div>
        <h1 className="text-4xl font-bold text-center text-white">
          My <span className="text-cyan-400">Skills</span>
        </h1>

        <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
          Technologies that I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-16">
          {skills.map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full border border-cyan-500/40 bg-slate-900 flex items-center justify-center
                text-4xl transition-all duration-500 hover:scale-110 hover:-translate-y- hover:border-cyan-400
                hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]  cursor-pointer"
              >
                <span className={skill.color}>{skill.icon}</span>
              </div>

              <h3 className="mt-4 text-white font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-cyan-400 transition duration-300">
            <h2 className="text-cyan-400 text-xl font-bold mb-4">
              Programming Languages
            </h2>

            <ul className="space-y-2 text-slate-300">
              <li>• C</li>
              <li>• C++</li>
              <li>• JavaScript</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-400 transition duration-300">
            <h2 className="text-cyan-400 text-xl font-bold mb-4">Frontend</h2>

            <ul className="space-y-2 text-slate-300">
              <li>• HTML5</li>
              <li>• CSS3</li>
              <li>• JavaScript(ES6)</li>
              <li>• React.js</li>
              <li>• Tailwind CSS</li>
              <li>• Python (FastAPI) Basic</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-400 transition duration-300">
            <h2 className="text-cyan-400 text-xl font-bold mb-4">Backend</h2>

            <ul className="space-y-2 text-slate-300">
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• MongoDB</li>
              <li>• REST APIs</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-400 transition duration-300">
            <h2 className="text-cyan-400 text-xl font-bold mb-4">
              Databases & Tools
            </h2>

            <ul className="space-y-2 text-slate-300">
              <li>• MongoDB</li>
              <li>• Mongoose</li>
              <li>• Git</li>
              <li>• GitHub</li>
              <li>• VS Code</li>
              <li>• Postman</li>
              <li>• Fetch API</li>
              <li>• Netlify</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-cyan-400 transition duration-300">
            <h2 className="text-cyan-400 text-xl font-bold mb-4">
              Soft Skills
            </h2>

            <ul className="space-y-2 text-slate-300">
              <li>• Communication</li>
              <li>• Teamwork</li>
              <li>• Problem Solving</li>
              <li>• Time Management</li>
              <li>• Quick Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
