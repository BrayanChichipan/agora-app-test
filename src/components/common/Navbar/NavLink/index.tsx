import { FC } from "react";
import { classNames } from "@/utils";
import styles from "./navlink.module.scss";

interface NavLinkProps {
  name: string;
  url: string;
  active?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({ name, url, active }) => {
  return (
    <a
      href={url}
      className={classNames({
        [styles["nav-link"]]: true,
        [styles["nav-link--active"]]: active,
      })}
    >
      {name}
    </a>
  ); // TODO: CHANGE FOR LINK ROUTER
};
