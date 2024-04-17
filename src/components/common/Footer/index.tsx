import { Container } from "@/components/layouts";
import Logo from "@/assets/brand/img/logo.png";
import styles from "./footer.module.scss";
import { MAIN_LINKS } from "@/constants";
import { Button } from "@/components/ui";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Container as={"footer"}>
        <div className={styles["footer-container"]}>
          <div className={styles["brand-column"]}>
            <img
              src={Logo}
              alt="logo"
              style={{ height: "2.875rem", width: "7rem" }}
            />
            <p className={styles.rights}>
              <strong>Agora Partnerships®</strong> All Rights Reserved.Reg. U.S.
              Pat. and TM Off <a href="/">Política de Privacidad</a>
            </p>
          </div>
          <div className={styles["links-column"]}>
            {MAIN_LINKS.map((link) => (
              <Link to={link.url} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className={styles["links-column"]}>
            <Button style={{ height: "1.5rem", width: "fit-content" }}>
              Donar
            </Button>
            <div className={styles.subscribe}>
              <a>Suscribirme al newsletter</a>
              <i
                className="far fa-arrow-alt-circle-right"
                aria-hidden="true"
              ></i>
            </div>
            <span className={styles["language-selector"]}>ES</span>
          </div>
          <div className={styles["brand-column"]}>
            <div className={styles["social-container"]}>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-spotify"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-medium"></i>
            </div>
            <p style={{ fontSize: ".875rem" }}>info@agora2030.org</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
