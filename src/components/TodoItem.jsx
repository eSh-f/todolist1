import React from "react";
import MyToggleButton from "./UI/MyToggleButton/MyToggleButton";
import MyDeleteButton from "./UI/MyDeleteButton/MyDeleteButton";
import cn from "classnames";

const TodoItem = React.memo(({ task, handleRemoveTask, handleDoneTask }) => {
  console.log("item");
  const handleToggleComplete = () => {
    handleDoneTask(task.id);
  };
  const handleDeleteTask = () => {
    handleRemoveTask(task.id);
  };
  return (
    <div className="todo__list-item">
      <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>
        {task.title}
      </span>
      <div>
        <MyToggleButton onClick={handleToggleComplete} />
        <MyDeleteButton onClick={handleDeleteTask} />
      </div>
    </div>
  );
});

export default TodoItem;
