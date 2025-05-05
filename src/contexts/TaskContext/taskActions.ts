import { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNTDOWN = "COUNTDOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
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
    };
