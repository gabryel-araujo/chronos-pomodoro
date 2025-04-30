import styles from "./styles.module.css";

export function Footer() {
  return (
    <p className={styles.footer}>
      Desenvolvido por{" "}
      <a href="http://github.com/gabryel-araujo" target="_blank">
        Gabryel Araújo
      </a>
    </p>
  );
}
