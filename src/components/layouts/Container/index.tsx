import React, { ComponentProps, FC } from "react";
import classes from "./container.module.scss";
import { classNames } from "@/utils";

interface ContainerProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
  as?: React.ElementType;
}

export const Container: FC<ContainerProps> = ({
  children,
  className = "",
  as = "div",
  ...props
}) => {
  const Component = as;

  return (
    <Component
      className={classNames({
        [classes.container]: true,
        [className]: !!className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
