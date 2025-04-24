import React from "react";

const MyToggleButton = ({ ...props }) => {
  console.log("buttonDone");

  return <button {...props}> ✔️ </button>;
};

export default MyToggleButton;
