import { Container } from "@/components/layouts";
import styles from "./blog-list.module.scss";
import { BLOG_TYPES } from "./constants";
import { Button, Chip } from "@/components/ui";

export const BlogList = () => {
  return (
    <div className={styles.container}>
      <Container as="main">
        <div className={styles["blog-types"]}>
          {BLOG_TYPES.map((type) => (
            <span>{type.label}</span>
          ))}
        </div>
        <div className={styles["blog-list-container"]}>
          <div className={styles["card-container"]}>
            <Chip className={styles.chip}>CONVOCATORIA ABIERTA</Chip>
            <img src="/assets/home/Juntas-Contamos.webp" alt="emprendedora" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>Programa Juntas Contamos</h6>
              <p className={styles["card-subtitle"]}>
                Oportunidad para mujeres empresarias en México, Guatemala, El
                Salvador y Honduras. Juntas Contamos Consta de tres programas
                dirigidos a 3 perfiles diferentes de empresarias.
              </p>
            </div>
            <Button>CONOCER MÁS</Button>
          </div>
          <div className={styles["card-container"]}>
            <Chip className={styles.chip}>BLOG</Chip>
            <img
              src="/assets/home/una-historia-de-empresarialidad-femenina.webp"
              alt="planeacion"
            />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>
                La escoba y yo: una historia de empresarialidad femenina
              </h6>
              <p className={styles["card-subtitle"]}>
                Los roles de género son estructuras complejas en las que
                intervienen factores sociales, económicos, políticos y
                culturales, en los que se construyen barreras invisibles
              </p>
            </div>
            <Button>CONOCER MÁS</Button>
          </div>
          <div className={styles["card-container"]}>
            <Chip className={styles.chip}>BLOG</Chip>
            <img src="/assets/home/Francis-Castillo.webp" alt="empresario" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>
                “Alcanzar un equilibrio entre el trabajo y familia uno de los
                retos más importantes al ser empresaria”
              </h6>
              <p className={styles["card-subtitle"]}>
                Francis Castillo, fundadora de ‘The Baking Mom’es un gran
                ejemplo de cómo el ser mamá y emprendedora se puede lograr
                rompiendo paradigmas y miedos
              </p>
            </div>
            <Button>CONOCER MÁS</Button>
          </div>
          <div className={styles["card-container"]}>
            <Chip className={styles.chip}>BLOG</Chip>
            <img src="/assets/home/Francis-Castillo.webp" alt="empresario" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>
                “Alcanzar un equilibrio entre el trabajo y familia uno de los
                retos más importantes al ser empresaria”
              </h6>
              <p className={styles["card-subtitle"]}>
                Francis Castillo, fundadora de ‘The Baking Mom’es un gran
                ejemplo de cómo el ser mamá y emprendedora se puede lograr
                rompiendo paradigmas y miedos
              </p>
            </div>
            <Button>CONOCER MÁS</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
