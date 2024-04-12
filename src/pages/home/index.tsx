import { Navbar } from "@/components/common";
import { Footer } from "@/components/common/Footer";
import { WhatWeDo } from "./WhatWeDo";
import { Announcement } from "./Announcement";

export const Home = () => {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
        <Navbar />
      </div>
      <WhatWeDo />
      <Announcement />
      <Footer />
    </div>
  );
};
