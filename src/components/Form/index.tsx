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
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function Form() {
  const { state, setState } = useTaskContext();
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

    const secondsRemaining = newTask.duration * 60;

    setState((prev) => {
      return {
        ...prev,
        activeTask: newTask,
        currentCycle: nextCycle,
        formattedsecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        secondsRemaining,
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState((prev) => {
      return {
        ...prev,
        activeTask: null,
        formattedsecondsRemaining: "00:00",
        secondsRemaining: 0,
        tasks: prev.tasks.map((task) => {
          if (prev.activeTask && prev.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
  }

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
        <p>O próximo intervalo é de 25 min</p>
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
