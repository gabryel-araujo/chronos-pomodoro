import { TaskStateModel } from "../../models/TaskStateModel";

function loadInitialState(): TaskStateModel {
  const savedData = localStorage.getItem("data");

  if (savedData) {
    return JSON.parse(savedData);
  }

  return {
    tasks: [],
    secondsRemaining: 0,
    formattedsecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
      workTime: 25,
      shortBreakTime: 5,
      longBreakTime: 15,
    },
  };
}

export const initialTaskState: TaskStateModel = loadInitialState();
