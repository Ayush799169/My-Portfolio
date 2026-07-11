import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "certificates", label: "Certificates" },
  { to: "gallery", label: "Gallery" },
  { to: "blog", label: "Blog" },
  { to: "resume", label: "Resume" },
  { to: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-75}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <Terminal
            size={22}
            className="text-cyan-400 group-hover:rotate-12 transition-all duration-300"
          />
          <span className="text-xl font-bold text-white">
            ayush<span className="text-cyan-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              spy={true}
              duration={600}
              offset={-75}
              activeClass="text-cyan-400"
              className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-2px after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col p-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                spy={true}
                duration={600}
                offset={-75}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
