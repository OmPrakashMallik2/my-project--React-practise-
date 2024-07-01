import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTaskHandler = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTaskHandler = (index) => {
    setTasks(tasks.filter((elem, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];

      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;

      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;

      setTasks(updatedTasks);
    }
  };

  return (
    <div className="w-96 m-3 p-3 bg-slate-100 text-neutral-700 font-semibold rounded">
      <h1 className="text-center text-3xl font-bold py-3">TodoList App</h1>
      <div className="flex justify-between py-3">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          id="task-input"
          placeholder="Enter your task..."
          className="p-2 rounded text-xl"
        />
        <button
          type="button"
          onClick={addTaskHandler}
          className="text-xl bg-blue-500 px-4 py-2 rounded text-white"
        >
          Add
        </button>
      </div>
      <div className="text-xl">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="bg-green-200 my-1 p-3 rounded flex justify-between">
              <p>{task}</p>
              <div className="flex gap-2">
                <button className="text-sm font-bold" type="button" onClick={() => deleteTaskHandler(index)}>
                  ❌
                </button>
                <button type="button" onClick={() => moveTaskUp(index)}>
                  ⬆️
                </button>
                <button type="button" onClick={() => moveTaskDown(index)}>
                  ⬇️
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 text-center p-3">No task available☹️</p>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
