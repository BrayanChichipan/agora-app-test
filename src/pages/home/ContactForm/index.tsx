import { Container } from "@/components/layouts";
import styles from "./contact-form.module.scss";
import { Button, Input, Spinner } from "@/components/ui";
import { FormEvent, useRef, useState } from "react";
import { createUserContact } from "@/services";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<
    "loading" | "initial" | "sended" | "error"
  >();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, lastName, email, profession, company, country } = (
      e.target as any
    ).elements;
    setFormState("loading");
    try {
      await createUserContact({
        company: company.value,
        country: country.value,
        email: email.value,
        lastName: lastName.value,
        name: name.value,
        profession: profession.value,
      });
      setFormState("sended");
    } catch (err) {
      setFormState("error");
    }
  };

  return (
    <div className={styles.container}>
      <Container as="section">
        <div className={styles.content}>
          <h2>Suscríbete a nuestro newsletter</h2>
          <form
            className={styles["field-container"]}
            onSubmit={onSubmit}
            ref={formRef}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Input placeholder="Nombre *" name="name" required />
              <Input placeholder="Apellido *" name="lastName" required />
              <Input
                placeholder="Correo Electrónico *"
                name="email"
                required
                type="email"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Input placeholder="Profecion *" name="profession" required />
              <Input placeholder="Empresa *" name="company" required />
              <Input placeholder="País *" name="country" required />
            </div>
            <Button style={{ marginTop: "2rem", width: "12rem" }} type="submit">
              {formState == "loading" ? <Spinner color="#fff" /> : "Enviar"}
            </Button>
          </form>
          {formState == "sended" && (
            <p className={styles["success-message"]}>
              Thanks for subscribing to our newsletter
            </p>
          )}
          {formState == "error" && (
            <p className={styles["error-message"]}>
              Something went wrong, please try again later
            </p>
          )}
        </div>
      </Container>
      ;
    </div>
  );
};
