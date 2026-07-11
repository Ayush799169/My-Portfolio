import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import Portfolio02 from "../assets/Portfolio02.png";
import VisitorPass from "../assets/VisitorPass.png";
import RealTimeQuiz from "../assets/RealTimeQuiz.png";
import Participate from "../assets/Participate.png";

const GALLERY_ITEMS = [
  {
    image: Portfolio02,
    caption: "My Portfolio Website",
    category: "personal",
  },
  {
    image: VisitorPass,
    caption: "Visitor Pass Management System",
    category: "projects",
  },
  {
    image: RealTimeQuiz,
    caption: "Real-Time Quiz Application",
    category: "projects",
  },
  {
    image: Participate,
    caption: "Internship Common Aptitude Test (ICAT) - 2025",
    category: "achievements",
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "personal", label: "Personal" },
  { key: "projects", label: "Projects" },
  { key: "achievements", label: "Achievements" },
];

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <section
      id="gallery"
      data-aos="fade-right"
      className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-2">
        Gallery
      </h1>

      <p className="text-center text-slate-400 mb-10">
        A collection of my personal moments, projects and achievements.
      </p>

     

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium ${
              active === tab.key
                ? "bg-teal-500 text-slate-950 border-teal-500 shadow-[0_0_20px_rgba(45,212,191,.5)]"
                : "border-slate-700 text-slate-300 hover:border-teal-400 hover:text-teal-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

  

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60
              transition-all duration-500 hover:-translate-y-3 hover:border-teal-400 hover:shadow-0_0_30px_rgba(45,212,191,.5) "
          >
            <div className="h-60 overflow-hidden bg-slate-950 flex items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full 
                    object-scale-down
                    transition-transform duration-700 hover:scale-110"
                />
              ) : (
                <ImageIcon size={45} className="text-slate-700" />
              )}
            </div>

            <div className="p-5">
              <p className="text-center text-slate-300 font-medium">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
