import React from "react";
import TodoItem from "./TodoItem";

const TodoList = React.memo(({ tasks, handleRemoveTask, handleDoneTask }) => {
  console.log("list");
  return (
    <>
      {tasks.length ? (
        <div className="todo__list">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              handleDoneTask={handleDoneTask}
              handleRemoveTask={handleRemoveTask}
              task={task}
            />
          ))}
        </div>
      ) : (
        <div className="todo__list">
          <p style={{ textAlign: "center" }}>Cписок задач пуст</p>
        </div>
      )}
    </>
  );
});

export default TodoList;
