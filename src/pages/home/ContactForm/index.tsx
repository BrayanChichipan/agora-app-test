import { Container } from "@/components/layouts";
import styles from "./contact-form.module.scss";
import { Button, Input } from "@/components/ui";

export const ContactForm = () => {
  return (
    <div className={styles.container}>
      <Container as="section">
        <div className={styles.content}>
          <h2>Suscríbete a nuestro newsletter</h2>
          <div className={styles["field-container"]}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Input placeholder="Nombre *" />
              <Input placeholder="Apellido *" />
              <Input placeholder="Correo Electrónico *" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Input placeholder="Profecion *" />
              <Input placeholder="Empresa *" />
              <Input placeholder="País *" />
            </div>
          </div>
          <Button style={{ marginTop: "2rem" }}>Enviar</Button>
        </div>
      </Container>
      ;
    </div>
  );
};
