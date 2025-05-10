import { useContext } from "react";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { pageContext } from "./contexts/PageContext/pageContext";

export function App() {
  const { page } = useContext(pageContext);

  return (
    <TaskContextProvider>
      {page === "main" && <Home />}
      {page === "history" && <History />}
    </TaskContextProvider>
  );
}
