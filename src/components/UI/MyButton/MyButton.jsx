import React from "react";
import cl from "./MyButton.module.css";

const MyButton = React.memo(({ children, ...props }) => {
  console.log("button");
  return (
    <button className={cl.myBtn} {...props}>
      {children}
    </button>
  );
});

export default MyButton;
