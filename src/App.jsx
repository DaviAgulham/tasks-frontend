import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskList from "./pages/TaskList";
import TaskEdit from "./pages/TaskEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskList />} />
          <Route path="tasks/:id" element={<TaskEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
