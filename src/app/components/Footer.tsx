import { Instagram, Facebook, Twitter } from "lucide-react";
import logoImg from "@/assets/logo.jpg";


export function Footer() {
  const footerLinks = [
    { title: "Services",  links: ["Professional Sound", "Lighting Design", "Audio Visual", "Special Effects", "Photography", "Videography"] },
    { title: "Events",    links: ["Weddings", "Corporate Events", "Concerts", "Exhibitions", "Theme Events", "Music Festivals"] },
    { title: "Company",   links: ["About Us", "Portfolio", "Our Process", "Testimonials", "Contact", "Careers"] },
  ];

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoImg}
                alt="Everyday Event Solutions Logo"
                className="w-16 h-16 object-contain rounded-full border border-[#E31C25]/20"
              />
              <span
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "Sora, sans-serif" }}
              >Everyday Event Solutions</span>
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-[220px]">
              {"India's"} premium event production company with 14+ years of excellence in weddings, corporate events, concerts, and exhibitions.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {([Instagram, Facebook, Twitter] as const).map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/20 hover:text-[#E31C25] transition-colors duration-300"
                  aria-label={["Instagram", "Facebook", "Twitter"][i]}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4
                className="text-white font-semibold text-[10px] tracking-[0.2em] uppercase mb-5"
                style={{ fontFamily: "Sora, sans-serif" }}
              >{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/30 text-xs hover:text-[#E31C25] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-[10px] tracking-wider">© 2024 Everyday Event Solutions. All rights reserved.</p>
          <p className="text-white/18 text-[10px] tracking-wider">Noida, Delhi NCR • India</p>
        </div>
      </div>
    </footer>
  );
}
