import { ComponentProps, FC } from "react";
import styles from "./input.module.scss";
import { classNames } from "@/utils";

interface InputProps extends ComponentProps<"input"> {}

export const Input: FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={classNames({
        [styles["input"]]: true,
        [className]: !!className,
      })}
      {...props}
    />
  );
};
