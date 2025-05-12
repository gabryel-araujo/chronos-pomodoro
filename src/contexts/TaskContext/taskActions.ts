import { TaskModel } from "../../models/TaskModel";
import { TaskStateModel } from "../../models/TaskStateModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNTDOWN = "COUNTDOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANGE_SETTINGS = "CHANGE_SETTINGS",
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
      payload?: TaskModel;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.COUNTDOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    }
  | {
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel["config"];
    };
