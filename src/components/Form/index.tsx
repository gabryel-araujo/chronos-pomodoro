import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import styles from "./styles.module.css";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Form() {
  const { state, dispatch } = useTaskContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputRef.current) return;

    const taskName = inputRef.current.value.trim();
    if (!taskName) {
      alert("A task precisa ter um nome");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  const tipsForActiveTask = {
    workTime: <p>Foque por {state.config.workTime} min</p>,
    shortBreakTime: <p>Descanse {state.config.shortBreakTime} min</p>,
    longBreakTime: <p>Descanse por {state.config.longBreakTime} min</p>,
  };

  const tipsForNoActiveTask = {
    workTime: <p>O próximo ciclo será de {state.config.workTime} min</p>,
    shortBreakTime: (
      <p>O próximo descanso será de {state.config.shortBreakTime} min</p>
    ),
    longBreakTime: (
      <p>O próximo descanso longo será de {state.config.longBreakTime} min</p>
    ),
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaultInput
          ref={inputRef}
          id="inputTask"
          labelText="Task:"
          type="text"
          placeholder="Digite algo..."
          disabled={!!state.activeTask}
        />
      </div>

      <div className={styles.formRow}>
        {state.activeTask && tipsForActiveTask[state.activeTask.type]}
        {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
      </div>

      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}

      <div className={styles.formRow}>
        {!state.activeTask && (
          <DefaultButton
            type="submit"
            icon={<PlayCircleIcon />}
            aria-label="Iniciar tarefa"
            title="Iniciar tarefa"
          />
        )}{" "}
        {!!state.activeTask && (
          <DefaultButton
            type="button"
            icon={<StopCircleIcon />}
            aria-label="Parar tarefa"
            title="Parar tarefa"
            color="red"
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
