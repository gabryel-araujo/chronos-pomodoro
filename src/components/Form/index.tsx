import { DefaultInput } from "../DefaultInput";
import styles from "./styles.module.css";

export function Form() {
  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput id="inputTask" labelText="Task" type="text" />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <p>Ciclos</p>
        <p>0 0 0 0 0 0</p>
      </div>

      <div className={styles.formRow}>
        <button>Enviar</button>
      </div>
    </form>
  );
}
