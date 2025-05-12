import { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionModel, TaskActionTypes } from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;
      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        formattedsecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        secondsRemaining,
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        formattedsecondsRemaining: "00:00",
        secondsRemaining: 0,
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_STATE: {
      localStorage.removeItem("data");
      return {
        ...state,
        tasks: [],
        secondsRemaining: 0,
        formattedsecondsRemaining: "00:00",
        activeTask: null,
        currentCycle: 0,
      };
    }
    case TaskActionTypes.COUNTDOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedsecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining
        ),
      };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        formattedsecondsRemaining: "00:00",
        secondsRemaining: 0,
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.CHANGE_SETTINGS: {
      return {
        ...state,
        config: { ...action.payload },
      };
    }
  }
}
