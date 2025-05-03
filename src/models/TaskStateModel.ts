import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedsecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
