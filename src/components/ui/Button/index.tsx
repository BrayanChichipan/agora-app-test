import { ComponentProps, CSSProperties } from "react";
import classes from "./styles.module.scss";

export interface ButtonProps extends ComponentProps<"button"> {
  outline?: boolean;
  color?: string;
}

interface CustomCSS extends CSSProperties {
  "--color": string;
  "--color-light": string;
}

export const Button = ({
  outline = false,
  color = "#C1285D",
  className,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        ${classes.button}
        ${outline ? classes.outline : classes.primary}  
        ${className ?? ""}
      `}
      style={
        {
          "--color": color,
          "--color-light": color + "BB", // OPACICTY BB in active efect
          ...style,
        } as CustomCSS
      }
      {...props}
    >
      {children}
    </button>
  );
};
