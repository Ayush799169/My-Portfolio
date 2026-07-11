import { Mail, MapPin, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PROFILE } from "../data/portfolioData";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section
      id="home"
      data-aos="zoom-in"
      className="max-w-5xl mx-auto px-6 py-24 min-h-screen "
    >
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-teal-500/30 blur-3xl animate-pulse"></div>

            {PROFILE.photo ? (
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="relative w-72 h-72 rounded-full object-cover border-4 border-teal-500 shadow-[0_0_35px_rgba(45,212,191,.35)] hover:scale-105 transition-all duration-500"
              />
            ) : (
              <div className="relative w-72 h-72 rounded-full border-4 border-teal-500 bg-slate-900 flex items-center justify-center">
                <span className="text-7xl font-bold text-teal-400">
                  {PROFILE.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
            )}
          </div>
        </div>

       
        <div>
          <h1 className="text-4xl font-bold text-slate-100 mb-3">
            Hi, I'm <span className="text-teal-400">{PROFILE.name}</span>
          </h1>

          <TypeAnimation
            sequence={[
              PROFILE.role,
              2000,
              "React Developer | MERN Stack Developer",
              2000,
            ]}
            speed={50}
            wrapper="p"
            repeat={Infinity}
            className="text-slate-500 text-xl font-semibold mb-5"
          />

          <p className="text-slate-300 text-lg leading-8 mb-6">
            {PROFILE.tagline}
          </p>

          
          <div className="flex flex-wrap gap-3">
            {PROFILE.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-4 py-2 rounded-full border border-teal-500 bg-slate-900 text-slate-200 hover:bg-teal-500 hover:text-black hover:scale-105 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      

      <div className="grid sm:grid-cols-3 gap-6 mt-16">
        <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/50 hover:border-teal-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(45,212,191,.35)] transition-all duration-500">
          <div className="flex items-center gap-2 text-teal-400 text-base font-semibold mb-2">
            <MapPin size={20} />
            Location
          </div>
          <p className="text-slate-300 text-base">{PROFILE.location}</p>
        </div>

        <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/50 hover:border-teal-500 hover:-translate-y-2 hover:shadow-0_0_25px_rgba(45,212,191,.35) transition-all duration-500">
          <div className="flex items-center gap-2 text-teal-400 text-base font-semibold mb-2">
            <Briefcase size={20} />
            Expertise
          </div>
          <p className="text-slate-300 text-base">{PROFILE.expertise}</p>
        </div>

        <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/50 hover:border-teal-500 hover:-translate-y-2 hover:shadow-0_0_25px_rgba(45,212,191,.35) transition-all duration-500">
          <div className="flex items-center gap-2 text-teal-400 text-base font-semibold mb-2">
            <Mail size={20} />
            Contact
          </div>

          <p className="text-slate-300 text-base break-all">{PROFILE.email}</p>
          <p className="text-slate-300 text-base break-all">{PROFILE.phone}</p>
        </div>
      </div>

     
      <div className="text-center mt-8">
        <p className="text-2xl font-semibold text-slate-300 mb-6">
          Connect With Me
        </p>

        <div className="flex justify-center gap-5">
          {PROFILE.socials.github && (
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-teal-400 hover:text-teal-400 hover:scale-110 hover:shadow-0_0_20px_rgba(45,212,191,.6) transition-all duration-300"
            >
              <FaGithub size={22} />
            </a>
          )}

          {PROFILE.socials.linkedin && (
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-teal-400 hover:text-teal-400 hover:scale-110 hover:shadow-0_0_20px_rgba(45,212,191,.6) transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          )}

          <a
            href={`mailto:${PROFILE.email}`}
            className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-teal-400 hover:text-teal-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(45,212,191,.6)] transition-all duration-300"
          >
            <Mail size={22} />
          </a>

          {PROFILE.socials.whatsapp && (
            <a
              href={PROFILE.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-teal-400 hover:text-teal-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(45,212,191,.6)] transition-all duration-300"
            >
              <FaWhatsapp size={22} />
            </a>
          )}

          {PROFILE.socials.instagram && (
            <a
              href={PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-teal-400 hover:text-teal-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(45,212,191,.6)] transition-all duration-300"
            >
              <FaInstagram size={22} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
