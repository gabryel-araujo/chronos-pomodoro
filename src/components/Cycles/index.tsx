import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();
  const cycles = Array.from({ length: state.currentCycle });

  const cycleDescription = {
    workTime: "foco",
    shortBreakTime: "pausa",
    longBreakTime: "pausa longa",
  };

  return (
    <span className={styles.cycles}>
      <p>Ciclos</p>

      <div className={styles.cycleDots}>
        {cycles.map((_, index) => {
          const cycleType = getNextCycleType(index + 1);

          return (
            <span
              key={index}
              className={`${styles.cycleDot} ${styles[cycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescription[cycleType]}`}
              title={`Indicador de ciclo de ${cycleDescription[cycleType]}`}
            ></span>
          );
        })}
      </div>
    </span>
  );
}
