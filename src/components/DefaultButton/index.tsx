import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  color = "green",
  icon,
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        {...props}
        className={`${styles.button} ${
          color === "green" ? styles.green : styles.red
        }`}
      >
        {icon}
      </button>
    </>
  );
}
