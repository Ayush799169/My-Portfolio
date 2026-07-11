import { GraduationCap, BookOpen, MapPin, Mail, Phone } from "lucide-react";
import { ABOUT, PROFILE } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      data-aos="fade-right"
      className="max-w-4xl mx-auto px-6 py-24 scroll-mt-24"
    >

      <h1 className="text-4xl font-bold text-center text-white mb-10">
        About <span className="text-cyan-400">Me</span>
      </h1>

      <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-8 shadow-lg hover:border-cyan-400 transition-all duration-300 mb-16">
        <p className="text-slate-200 text-lg leading-9 mb-6">{ABOUT.intro}</p>

        <div className="space-y-5">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-400 leading-8">
              {p}
            </p>
          ))}
        </div>
      </div>

      
      <div className="flex items-center gap-3 mb-5">
        <GraduationCap className="text-cyan-400" />
        <h2 className="text-3xl font-bold text-white">Education</h2>
      </div>

      {ABOUT.education.map((edu, i) => (
        <div
          key={i}
          className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-cyan-400 transition-all duration-300 mb-10"
        >
          <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>

          <p className="text-slate-300 mt-2">{edu.institute}</p>

          <p className="text-cyan-400 mt-2">{edu.year}</p>
        </div>
      ))}

    

      <div className="flex items-center gap-3 mb-5">
        <BookOpen className="text-cyan-400" />
        <h2 className="text-3xl font-bold text-white">Currently Learning</h2>
      </div>

      <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-cyan-400 transition-all duration-300 mb-10">
        {ABOUT.education.map((edu, i) => (
          <p key={i} className="text-slate-300 leading-8">
            • {edu.learning}
          </p>
        ))}
      </div>

     
     
      <div className="flex items-center gap-3 mb-5">
        <Mail className="text-cyan-400" />
        <h2 className="text-3xl font-bold text-white">Contact</h2>
      </div>

      <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-cyan-400 transition-all duration-300 space-y-6">
        <div className="flex items-center gap-4">
          <MapPin className="text-cyan-400" size={22} />
          <div>
            <p className="text-slate-400 text-sm">Location</p>
            <p className="text-white">{PROFILE.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-cyan-400" size={22} />
          <div>
            <p className="text-slate-400 text-sm">Email</p>
            <p className="text-white">{PROFILE.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-cyan-400" size={22} />
          <div>
            <p className="text-slate-400 text-sm">Phone</p>
            <p className="text-white">{PROFILE.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
