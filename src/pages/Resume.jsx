import { Download, FileText } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Resume() {
  return (
    <section
      id="resume"
      data-aos="zoom-in"
      className="max-w-3xl mx-auto px-6 py-24 text-center scroll-mt-24"
    >
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 text-center hover:border-teal-500 hover:shadow-[0_0_30px_rgba(45,212,191,.25)] transition-all duration-500">
        <div className="w-20 h-20 mx-auto rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500 mb-6">
          <FileText size={40} className="text-teal-400" />
        </div>

        <h1 className="text-4xl font-bold text-center text-white mb-10">
          My <span className="text-cyan-400">Resume</span>
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto leading-7 mb-8">
          Download my latest resume to explore my skills, projects, education,
          technical expertise, and experience as a Frontend Developer and
          aspiring Software Engineer.
        </p>

        <a
          href={PROFILE.resumeFile}
          download
          className="inline-flex items-center gap-3 bg-teal-500 text-slate-950 font-semibold px-8 py-4 rounded-xl hover:bg-teal-400 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Download size={20} />
          Download Resume
        </a>

        <p className="text-slate-500 text-sm mt-6">PDF • Updated 2026</p>
      </div>
    </section>
  );
}
