import { ExternalLink, FileCode2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../data/portfolioData";

function ProjectCard({ project }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-lg
      hover:-translate-y-3 hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,.5)]  transition-all duration-500"
    >
      <div className="h-48 overflow-hidden bg-slate-950 border-b border-slate-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-scale-down transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileCode2 size={40} className="text-slate-700" />
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-slate-500">Project {project.id}</span>

          <span
            className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full ${
              project.status === "deployed"
                ? "bg-teal-900 text-teal-300"
                : "bg-yellow-900 text-yellow-300"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

        <p className="text-sm text-slate-400 leading-6 min-h-90px">
          {project.description}
        </p>

        {project.note && (
          <p className="mt-3 text-xs text-yellow-400 leading-5">
            <strong>Note:</strong> {project.note}
          </p>
        )}
        <div className="flex flex-wrap gap-2 my-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs bg-slate-800 text-teal-400 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-teal-500 py-2.5 text-sm font-semibold text-slate-950 hover:bg-teal-400 transition-all"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-slate-700 py-2.5 text-sm font-semibold text-white hover:border-teal-400 hover:text-teal-400 transition-all"
          >
            <FaGithub size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      data-aos="fade-right"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-4">
        My <span className="text-cyan-400">Projects</span>
      </h1>

      <p className="text-slate-400 text-2xl text-center mb-12">
        Things I've built and shipped.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
