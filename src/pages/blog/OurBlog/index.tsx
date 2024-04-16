import { Container } from "@/components/layouts";
import styles from "./our-blog.module.scss";

export const OurBlog = () => {
  return (
    <div className={styles.container}>
      <Container as="section" className={styles["hero-container"]}>
        <div className={styles.banner}>
          <p>NUESTRO BLOG</p>
          <h2>Conoce nuestros últimos artículos y noticias</h2>
        </div>
        <div className={styles.img}>
          <img src="/assets/blog/blog1.png" alt="blog-1" />
        </div>
      </Container>
    </div>
  );
};
