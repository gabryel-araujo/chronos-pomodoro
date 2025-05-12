import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Config } from "./pages/Config";
import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";

export function App() {
  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
  );
}
