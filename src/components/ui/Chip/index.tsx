import { CSSProperties, FC, ReactNode, ComponentProps } from "react";
import styles from "./chip.module.scss";
import { classNames } from "@/utils";

interface ChipProps extends ComponentProps<"div"> {
  children: ReactNode;
  selected?: boolean;
}

export const Chip: FC<ChipProps> = ({
  children,
  color = "#333333",
  className = "",
  ...props
}) => {
  return (
    <div
      className={classNames({
        [styles["chip-container"]]: true,
        [className]: !!className,
      })}
      style={
        {
          "--color": color,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};
