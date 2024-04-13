import { Container } from "@/components/layouts";
import styles from "./impact.module.scss";

export const Impact = () => {
  return (
    <div className={styles.container}>
      <Container as="section">
        <div className={styles.content}>
          <div className={styles["main-content-container"]}>
            <div className={styles.text}>
              <h2>Impacto</h2>
              <p>
                Nos comprometemos a la transparencia con los emprendedores y el
                ecosistema emprendedor en Latinoamérica alineándonos con los
                Objetivos de Desarrollo Sostenible de las Naciones Unidas.
              </p>
            </div>
            <div className={styles["cards-container"]}>
              <div className={styles["show-more"]}>
                <a>
                  Ver más{" "}
                  <i
                    className="far fa-arrow-alt-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3>2,300</h3>
                  <p>Emprendedores atendidos</p>
                </div>
                <div className={styles.card}>
                  <h3>329</h3>
                  <p>Catalizadores capacitados</p>
                </div>
                <div className={styles.card}>
                  <h3>23</h3>
                  <p>Países que tenemos incidencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      ;
    </div>
  );
};
