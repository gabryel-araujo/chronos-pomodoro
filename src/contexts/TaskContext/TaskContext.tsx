import { createContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./intialTaskState";
import { TaskActionModel } from "./taskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.ActionDispatch<[action: TaskActionModel]>;
  // dispatch: React.Dispatch<TaskActionModel>
};

const initialContextValue = { state: initialTaskState, dispatch: () => {} };

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
