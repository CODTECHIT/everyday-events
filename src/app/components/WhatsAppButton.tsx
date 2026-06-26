import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-[0_6px_30px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
    >
      <MessageSquare size={22} className="text-white" fill="white" />
    </a>
  );
}
