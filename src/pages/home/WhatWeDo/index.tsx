import { Container } from "@/components/layouts";
import styles from "./what-we-do.module.scss";

export const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <Container as="section">
        <div className={styles.head}>
          <div className={styles.text}>
            <h2>¿Qué hacemos?</h2>
            <p>
              Calibramos el ecosistema emprendedor de América Latina para crear
              prosperidad inclusiva para el individuo, la empresa, la comunidad
              y el medio ambiente.
            </p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <a>Conocer más sobre nuestros programas</a>
          </div>
        </div>
        <div className={styles["cards-container"]}>
          <div className={styles["card-container"]}>
            <img src="/assets/home/emprendedora.png" alt="emprendedora" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>
                Emprendimientos y pequeñas empresas en crecimiento
              </h6>
              <p className={styles["card-subtitle"]}>
                Ofrecemos formación empresarial, vinculación a mercados y acceso
                a financiamiento a emprendedores y pequeñas empresas en
                crecimiento en su camino hacia la sostenibilidad económica,
                social y ambiental.
              </p>
            </div>
          </div>
          <div className={styles["card-container"]}>
            <img src="/assets/home/planeacion.png" alt="planeacion" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>Ecosistema</h6>
              <p className={styles["card-subtitle"]}>
                Contribuimos al fortalecimiento del ecosistema de emprendedores
                y pequeñas empresas en crecimiento a través de eventos, tales
                como el programa Formando Catalizadores, y el co-liderazgo de la
                Red de Impacto, integrada por más de 100 organizaciones de la
                región.
              </p>
            </div>
          </div>
          <div className={styles["card-container"]}>
            <img src="/assets/home/empresario.png" alt="empresario" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>Proyectos inclusivos</h6>
              <p className={styles["card-subtitle"]}>
                Ejecutamos proyectos específicos junto a aliados con los que
                compartimos nuestra visión por la inclusión financiera, la
                equidad de género, la diversificación, resiliencia y
                sostenibilidad en las cadenas de valor, y la adaptación al
                cambio climático en la región.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
