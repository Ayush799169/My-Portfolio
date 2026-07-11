import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { PROFILE } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);

    const body = encodeURIComponent(
      `${form.message} Name : ${form.name} Email : ${form.email}`,
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <section
      id="contact"
      data-aos="fade-right"
      className="max-w-4xl mx-auto px-6 py-24 text-center scroll-mt-24"
    >
      <h1 className="text-4xl font-bold text-center text-white">
        Contact <span className="text-cyan-400">Me</span>
      </h1>

      <p className="text-center text-slate-400 mb-12 mt-4 mx-auto ">
        Feel free to contact me for internships, jobs or collaborations.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">
      

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-teal-500 hover:shadow-[0_0_25px_rgba(45,212,191,.3)] transition-all duration-500">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-teal-400" size={22} />
              <span className="text-slate-300">{PROFILE.email}</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-teal-400" size={22} />
              <span className="text-slate-300">{PROFILE.phone}</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-teal-400" size={22} />
              <span className="text-slate-300">{PROFILE.location}</span>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-300 hover:text-teal-400 transition duration-300 hover:scale-125"
            >
              <FaGithub />
            </a>

            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-300 hover:text-blue-400 transition duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>

            <a
              href={PROFILE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-300 hover:text-pink-500 transition duration-300 hover:scale-125"
            >
              <FaInstagram />
            </a>

            <a
              href={PROFILE.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-slate-300 hover:text-green-500 transition duration-300 hover:scale-125"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-teal-500 hover:shadow-[0_0_25px_rgba(45,212,191,.3)] transition-all duration-500 space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-teal-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-teal-400"
          />

          <textarea
            rows={6}
            placeholder="Your Message..."
            required
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-teal-400"
          />

          <button className="w-full flex justify-center items-center gap-2 bg-teal-500 text-black font-semibold py-3 rounded-lg hover:bg-teal-400 hover:scale-[1.02] transition-all duration-300">
            <Send size={18} />
            Send Message
          </button>

          {sent && (
            <p className="text-center text-green-400 text-sm">
              Opening your email application...
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
