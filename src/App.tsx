import { useState } from "react";
import { TaskStateModel } from "./models/TaskStateModel";
import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext";

const initialState: TaskStateModel = {
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

export function App() {
  const [state, setState] = useState(initialState);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
