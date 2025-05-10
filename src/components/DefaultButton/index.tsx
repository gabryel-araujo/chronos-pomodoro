import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
  square?: boolean;
} & React.ComponentProps<"button">;

export function DefaultButton({
  color = "green",
  icon,
  square,
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        {...props}
        className={`${styles.button} ${
          color === "green" ? styles.green : styles.red
        } ${square && styles.square}`}
      >
        {icon}
      </button>
    </>
  );
}
