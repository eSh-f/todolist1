import React, { useCallback, useState } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Купить пакет", isDone: false },
    { id: 2, title: "Купить еду", isDone: false },
  ]);
  const [value, setValue] = useState("");

  const handleAddTask = useCallback(() => {
    console.log("ADD");
    if (value.length) {
      setTasks([...tasks, { id: Date.now(), title: value, isDone: false }]);
      setValue("");
    }
  }, [value]);

  const handleRemoveTask = useCallback(
    (id) => {
      console.log("delete");
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks],
  );
  const handleDoneTask = useCallback(
    (id) => {
      console.log("done");
      setTasks((prevState) =>
        prevState.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task,
        ),
      );
    },
    [tasks],
  );

  const handleInputChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> TODO LIST</h1>
      <div>
        <MyInput type="text" value={value} onChange={handleInputChange} />
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
