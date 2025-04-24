import React from "react";

const MyDeleteButton = ({ ...props }) => {
  console.log("buttonDelete");

  return <button {...props}> 🗑️ </button>;
};

export default MyDeleteButton;
