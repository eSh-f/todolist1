import React from "react";
import cl from "./MyInput.module.css";

const MyInput = ({ ...props }) => {
  console.log("inputRender");
  return <input className={cl.myInput} {...props} />;
};

export default MyInput;
