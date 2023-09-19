import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([
    {
      id: "123",
      title: "Estudar react + typescript",
      isCompleted: true,
    },
    {
      id: "456",
      title: "Estudar react",
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
