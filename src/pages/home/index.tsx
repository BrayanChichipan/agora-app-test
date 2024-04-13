import { Navbar } from "@/components/common";
import { Footer } from "@/components/common/Footer";
import { WhatWeDo } from "./WhatWeDo";
import { Announcement } from "./Announcement";
import { Impact } from "./Impact";
import { Vacancies } from "./Vacancies";
import { ContactForm } from "./ContactForm";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
        <Navbar />
      </div>
      <Hero />
      <WhatWeDo />
      <Announcement />
      <Impact />
      <Vacancies />
      <ContactForm />
      <Footer />
    </div>
  );
};
