import React from "react";
import MyToggleButton from "./UI/MyToggleButton/MyToggleButton";
import MyDeleteButton from "./UI/MyDeleteButton/MyDeleteButton";

const TodoItem = React.memo(({ task, handleRemoveTask, handleDoneTask }) => {
  console.log("item");
  return (
    <div className="todo__list-item">
      <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>
        {task.title}
      </span>
      <div>
        <MyToggleButton onClick={() => handleDoneTask(task.id)} />
        <MyDeleteButton onClick={() => handleRemoveTask(task.id)} />
      </div>
    </div>
  );
});

export default TodoItem;
