import { useEffect, useState } from "react";
import AddTask from "./AddTask";

type TodosType = {
  id: number;
  task: string;
  completed: boolean;
};

const initialTodosArray = [
  { id: 1, task: "Task One", completed: false },
  { id: 2, task: "Task Two", completed: true },
  { id: 3, task: "Task Three", completed: false },
];

function Todos() {
  const [tasksArray, setTasksArray] = useState<TodosType[]>(() => {
    const savedTodos = localStorage.getItem("localStorageArray");
    return savedTodos ? JSON.parse(savedTodos) : initialTodosArray;
  });

  useEffect(() => {
    localStorage.setItem("localStorageArray", JSON.stringify(tasksArray));
  }, [tasksArray]);

  const addTask = (taskTitle: string) => {
    const newId = Date.now();
    const newTask = {
      id: newId,
      task: taskTitle,
      completed: false,
    };
    setTasksArray((prev) => {
      if (!prev) return [newTask];
      return [newTask, ...prev];
    });
  };

  const toggleCompleted = (id: number) => {
    const updatedArray = tasksArray.map((item, index) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasksArray(updatedArray);
  };

  return (
    <section className="min-h-screen">
      <AddTask onSubmit={addTask} />
      <div className="max-w-lg w-[90%] mx-auto pt-10">
        <ul>
          {tasksArray?.map(({ id, task, completed }) => {
            return (
              <li key={id} className={`${completed && "line-through"}`}>
                <input
                  type="checkbox"
                  onChange={() => toggleCompleted(id)}
                  title="completed checkbox"
                  checked={completed}
                />
                {task}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Todos;
