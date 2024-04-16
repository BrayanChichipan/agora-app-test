import { FC } from "react";
import { classNames } from "@/utils";
import styles from "./navlink.module.scss";
import { Link } from "react-router-dom";

interface NavLinkProps {
  name: string;
  url: string;
  active?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({ name, url, active }) => {
  return (
    <Link
      to={url}
      className={classNames({
        [styles["nav-link"]]: true,
        [styles["nav-link--active"]]: active,
      })}
    >
      {name}
    </Link>
  ); // TODO: CHANGE FOR LINK ROUTER
};
