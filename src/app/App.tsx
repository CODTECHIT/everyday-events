import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "@/app/components/Layout";
import { Home } from "@/app/pages/Home";
import { AboutPage } from "@/app/pages/AboutPage";
import { PortfolioPage } from "@/app/pages/PortfolioPage";
import { ProcessPage } from "@/app/pages/ProcessPage";
import { ContactPage } from "@/app/pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
