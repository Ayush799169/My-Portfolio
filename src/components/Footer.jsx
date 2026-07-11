import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name} — built with React & Tailwind
        </p>
        <div className="flex gap-4">
          {PROFILE.socials.github && (
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
          {PROFILE.socials.linkedin && (
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          )}
          {PROFILE.socials.instagram && (
            <a
              href={PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}