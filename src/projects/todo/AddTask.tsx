import { useState } from "react";

type AddTaskProps = {
  onSubmit: (taskTitle: string) => void;
};

function AddTask({ onSubmit }: AddTaskProps) {
  const [taskTitle, setTaskTitle] = useState("");

  function submitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(taskTitle);
    setTaskTitle("");
  }

  return (
    <form
      className="flex items-center gap-4 max-w-lg w-[90%] mx-auto pt-40"
      onSubmit={submitTask}>
      <label htmlFor="add-task"></label>
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        type="text"
        name=""
        id="add-task"
        alt="add task"
        placeholder="Add task"
        className="border border-green-400 rounded-lg px-2 py-2 focus:outline-blue-500"
      />
      <button
        type="submit"
        className="border border-green-500 rounded-lg px-3 py-1 text-xl font-semibold hover:bg-green-600 duration-300 hover:text-white">
        Submit
      </button>
    </form>
  );
}
export default AddTask;
