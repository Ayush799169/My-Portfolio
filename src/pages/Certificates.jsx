import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATES } from "../data/portfolioData";

export default function Certificates() {
  return (
    <section
      id="certificates"
      data-aos="fade-right"
      className="max-w-6xl mx-auto px-6 pt-24 pb-40 scroll-mt-24"
    >
      <h1 className="text-4xl font-bold text-center text-white">
        My <span className="text-cyan-400">Certificates</span>
      </h1>

      <p className="text-slate-400 text-center mb-12  mt-4 mx-auto">
        Courses and Certifications I've Completed
      </p>

      {CERTIFICATES.length === 0 ? (
        <p className="text-center text-slate-500">No Certificates Added Yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {CERTIFICATES.map((cert, i) => (
            <div
              key={i}
              className="  w-full  md:w-500px  flex  flex-col  rounded-2xl  border   border-slate-800   bg-slate-900/60
                p-7  transition-all  duration-500  hover:-translate-y-3  hover:border-teal-400
                hover:shadow-0_0_30px_rgba(45,212,191,.5)"
            >

              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
                  <Award
                    size={30}
                    className="text-teal-400 transition-transform duration-500 hover:rotate-12"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">{cert.title}</h2>

                  <p className="text-slate-400">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800 pt-5 mt-auto">
                <span className="text-teal-400 font-semibold text-lg">
                  {cert.year}
                </span>

                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-teal-500 text-slate-950 px-5 py-2 rounded-lg font-semibold hover:bg-teal-400 transition-all"
                  >
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
