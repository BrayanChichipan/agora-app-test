import { Navbar } from "@/components/common";
import { Footer } from "@/components/common/Footer";
import { OurBlog } from "./OurBlog";
import { BlogList } from "./BlogList";

export const Blog = () => {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 2 }}>
        <Navbar />
      </div>
      <OurBlog />
      <BlogList />
      <Footer />
    </div>
  );
};
