import React, { useState } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Купить пакет", isDone: false },
    { id: 2, title: "Купить еду", isDone: false },
  ]);
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, { id: Date.now(), title: value, isDone: false }]);
    setValue("");
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDoneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> TODO LIST</h1>
      <div>
        <MyInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <MyButton onClick={handleAddTask}>Добавить задачу</MyButton>
        <TodoList
          handleDoneTask={handleDoneTask}
          handleRemoveTask={handleRemoveTask}
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default Todo;
