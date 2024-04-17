import { FC, useState } from "react";
import { Container } from "@/components/layouts";
import Logo from "@/assets/brand/img/logo.png";
import styles from "./navbar.module.scss";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui";
import { useDimensions } from "@/hooks";
import { BREAKPOINTS, MAIN_LINKS } from "@/constants";
import { classNames } from "@/utils";
import { useLocation } from "react-router-dom";

interface NabvarProps {}

export const Navbar: FC<NabvarProps> = () => {
  const { width } = useDimensions();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(pathname);

  return (
    <div className={styles.container}>
      <Container as={"header"}>
        <div className={styles["header-container"]}>
          <img src={Logo} alt="logo" className={styles["logo-img"]} />
          {width >= BREAKPOINTS.DESKTOP && (
            <div>
              {MAIN_LINKS.map((link) => (
                <NavLink
                  {...link}
                  key={link.name}
                  active={pathname == link.url}
                />
              ))}
            </div>
          )}
          {width < BREAKPOINTS.TABLET && (
            <Button className={styles["button"]}>Donar</Button>
          )}
          <div className={styles["buttons-container"]}>
            {width < BREAKPOINTS.DESKTOP &&
              (isMenuOpen ? (
                <i
                  className="fas fa-times"
                  aria-hidden="true"
                  onClick={() => setIsMenuOpen(false)}
                ></i>
              ) : (
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  onClick={() => setIsMenuOpen(true)}
                ></i>
              ))}
            {width >= BREAKPOINTS.TABLET && (
              <Button className={styles["button"]}>Donar</Button>
            )}
            <span className={styles["language-selector"]}>ES</span>
          </div>
        </div>
      </Container>
      <div>
        <Container>
          <div
            className={classNames({
              [styles["mobile-links-container"]]: true,
              [styles["open"]]: isMenuOpen,
            })}
          >
            {width < BREAKPOINTS.DESKTOP &&
              MAIN_LINKS.map((link) => <NavLink {...link} key={link.name} />)}
          </div>
        </Container>
      </div>
    </div>
  );
};
