import { Navbar } from "@/components/common";
import { Footer } from "@/components/common/Footer";
import { WhatWeDo } from "./WhatWeDo";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <WhatWeDo />
      <Footer />
    </div>
  );
};
