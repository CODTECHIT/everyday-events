import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, Check } from "lucide-react";
import { FadeUp } from "@/app/components/FadeUp";
import { SectionLabel } from "@/app/components/SectionLabel";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", event: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const message = encodeURIComponent(
    "Hi! I'm interested in your event management services. Could you please share more details?"
  );

  const contactInfo = [
    { Icon: Phone,          label: "Call Us",   value: "+91 98765 43210",          href: "tel:+919876543210" },
    { Icon: MessageSquare,  label: "WhatsApp",  value: "+91 98765 43210",          href: `https://wa.me/919876543210?text=${message}` },
    { Icon: Mail,           label: "Email",     value: "hello@everydayevent.in",   href: "mailto:hello@everydayevent.in" },
    { Icon: MapPin,         label: "Office",    value: "C-42, Sector 18, Noida, UP 201301", href: "#" },
  ];

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeUp>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2
              className="font-bold text-gray-900 leading-[1.08] mb-10"
              style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Tell Us About
              <br />
              <span className="text-[#E31C25]">Your Event</span>
            </h2>
            <div className="space-y-6">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-gray-300 group-hover:border-[#E31C25]/40 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#E31C25]/8">
                    <Icon size={15} className="text-[#E31C25] transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-gray-600 text-[9px] tracking-[0.3em] uppercase mb-1">{label}</div>
                    <div className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Right — glassmorphism form */}
          <FadeUp delay={0.18}>
            <div className="relative border border-gray-200 p-8 bg-white shadow-sm">
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#E31C25]/40 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#E31C25]/40 pointer-events-none" />

              <h3
                className="text-gray-900 font-bold text-lg mb-7"
                style={{ fontFamily: "Sora, sans-serif" }}
              >Request a Quote</h3>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 flex flex-col items-center gap-4 text-center"
                  >
                    <div className="w-14 h-14 bg-[#E31C25]/15 border border-[#E31C25]/40 flex items-center justify-center">
                      <Check size={24} className="text-[#E31C25]" />
                    </div>
                    <p className="text-gray-900 font-semibold" style={{ fontFamily: "Sora, sans-serif" }}>Enquiry Sent!</p>
                    <p className="text-gray-700 text-sm">{"We'll"} be in touch within 2 business hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-600 text-[9px] tracking-[0.3em] uppercase block mb-2">Full Name</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          required
                          placeholder="Rajesh Kumar"
                          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm px-4 py-3 focus:outline-none focus:border-[#E31C25]/40 transition-colors duration-300 placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="text-gray-600 text-[9px] tracking-[0.3em] uppercase block mb-2">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm px-4 py-3 focus:outline-none focus:border-[#E31C25]/40 transition-colors duration-300 placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-600 text-[9px] tracking-[0.3em] uppercase block mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                        placeholder="rajesh@company.com"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm px-4 py-3 focus:outline-none focus:border-[#E31C25]/40 transition-colors duration-300 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 text-[9px] tracking-[0.3em] uppercase block mb-2">Event Type</label>
                      <select
                        value={form.event}
                        onChange={e => setForm({ ...form, event: e.target.value })}
                        className="w-full bg-white border border-gray-300 text-gray-700 text-sm px-4 py-3 focus:outline-none focus:border-[#E31C25]/40 transition-colors duration-300"
                      >
                        <option value="">Select event type</option>
                        <option>Wedding</option>
                        <option>Corporate Event</option>
                        <option>Concert / Festival</option>
                        <option>Exhibition</option>
                        <option>Theme Event</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-600 text-[9px] tracking-[0.3em] uppercase block mb-2">Tell Us More</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        placeholder="Event date, venue, guest count, services needed..."
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm px-4 py-3 focus:outline-none focus:border-[#E31C25]/40 transition-colors duration-300 placeholder-gray-400 resize-none"
                      />
                    </div>
                    <button
                       type="submit"
                       className="w-full bg-[#E31C25] text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#c9141b] hover:shadow-[0_0_35px_rgba(227,28,37,0.45)] transition-all duration-300 flex items-center justify-center gap-3 group"
                     >
                       Send Enquiry
                       <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                     </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
