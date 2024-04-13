import { Container } from "@/components/layouts";
import styles from "./vacancies.module.scss";
import { Button, Chip } from "@/components/ui";

export const Vacancies = () => {
  return (
    <div className={styles.container}>
      <Container as="section">
        <div className={styles.head}>
          <div className={styles.text}>
            <h2>Oportunidades laborales</h2>
          </div>
        </div>
        <div className={styles["cards-container"]}>
          <div className={styles["card-container"]}>
            <Chip className={styles.chip}>OPORTUNIDAD LABORAL</Chip>
            <img
              src="/assets/home/Disenador-freelance.webp"
              alt="emprendedora"
            />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>
                Diseñador Gráfico Freelance
              </h6>
              <p className={styles["card-subtitle"]}>
                Buscamos un/a Diseñador/a Gráfico con al menos 3 años de
                experiencia en diseño de presentaciones, materiales educativos,
                brochures, y otros materiales asociados a productos educativos
                digitales.
              </p>
              <Button>CONOCER MÁS</Button>
            </div>
          </div>
          <div className={styles["card-container"]}>
            <Chip className={styles.chip}>OPORTUNIDAD LABORAL</Chip>
            <img src="/assets/home/Data-engineer.webp" alt="planeacion" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>
                Data Engineer (Ingeniero/a de Datos)
              </h6>
              <p className={styles["card-subtitle"]}>
                Buscamos un/a Data Engineer (Ingeniero de Datos) que contribuya
                al desarrollo, implementación y mantenimiento de un sistema de
                gestión de datos eficiente, eficaz y robusto
              </p>
              <Button>CONOCER MÁS</Button>
            </div>
          </div>
          <div className={styles["card-container"]}>
            <Chip className={styles.chip}>OPORTUNIDAD LABORAL</Chip>
            <img src="/assets/home/Gerente-de-Alianzas.webp" alt="empresario" />
            <div className={styles["card-body"]}>
              <h6 className={styles["card-title"]}>Gerente de Alianzas</h6>
              <p className={styles["card-subtitle"]}>
                Buscamos un/una profesional con experiencia y habilidades en la
                construcción y gestión de alianzas comerciales y estratégicas
                con múltiples tipos de organizaciones
              </p>
              <Button>CONOCER MÁS</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
