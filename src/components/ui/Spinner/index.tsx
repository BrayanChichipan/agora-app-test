import classes from "./styles.module.scss";

export interface SpinnerProps {
  color?: string;
  height?: string | number;
  width?: string | number;
}

export const Spinner = ({
  color = "#C1285D",
  height = 24,
  width = 24,
}: SpinnerProps) => {
  return (
    <div
      className={classes.loader}
      style={{
        borderBottomColor: `${color}`,
        borderTopColor: `${color}`,
        borderLeftColor: `${color}`,
        borderRightColor: "transparent",
        height,
        width,
      }}
    />
  );
};
