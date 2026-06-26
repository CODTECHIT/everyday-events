import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.jpg";


export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Services", href: "/#services", isHash: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "backdrop-blur-2xl bg-black/80 border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group select-none">
          <img
            src={logoImg}
            alt="Everyday Event Solutions Logo"
            className="w-20 h-20 object-contain rounded-full border border-[#E31C25]/30 group-hover:border-[#E31C25] transition-colors duration-300"
          />
          <div>
            <div className="text-white font-semibold text-sm leading-none tracking-wide" style={{ fontFamily: "Sora, sans-serif" }}>Everyday Event</div>
            <div className="text-[#E31C25] text-[9px] tracking-[0.3em] uppercase mt-0.5">Solutions</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-9">
          {links.map(({ label, href, isHash }) =>
            isHash ? (
              <a
                key={label}
                href={href}
                className="relative text-white/55 hover:text-[#E31C25] text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#E31C25] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                className="relative text-white/55 hover:text-[#E31C25] text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#E31C25] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-white/40 hover:text-white/80 text-[11px] transition-colors duration-300">
            <Phone size={11} />
            <span>+91 98765 43210</span>
          </a>
          <Link
            to="/contact"
            className="bg-[#E31C25] text-white px-6 py-2.5 text-[10px] font-bold tracking-[0.18em] uppercase hover:bg-[#FF3E47] hover:shadow-[0_0_28px_rgba(227,28,37,0.45)] transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden text-white/60 hover:text-white transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-[#0a0a0a]/97 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map(({ label, href, isHash }) =>
                isHash ? (
                  <a
                    key={label}
                    href={href}
                    className="text-white/75 text-2xl font-semibold hover:text-[#E31C25] transition-colors duration-200"
                    style={{ fontFamily: "Sora, sans-serif" }}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    to={href}
                    className="text-white/75 text-2xl font-semibold hover:text-[#E31C25] transition-colors duration-200"
                    style={{ fontFamily: "Sora, sans-serif" }}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="mt-4 bg-[#E31C25] text-white px-6 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase text-center"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
