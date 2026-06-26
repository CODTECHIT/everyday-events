import { Outlet } from "react-router";
import { CustomCursor } from "@/app/components/CustomCursor";
import { Nav } from "@/app/components/Nav";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { Footer } from "@/app/components/Footer";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export function Layout() {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden min-h-screen flex flex-col justify-between" style={{ fontFamily: "Inter, sans-serif" }}>
      <ScrollToTop />
      <CustomCursor />
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
