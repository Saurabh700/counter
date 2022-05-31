import React from "react";
import Item from "./Item";

const Output = ({ arrOfTask }) => {
  return (
    <div>
      {arrOfTask.map((task) => (
        <Item key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Output;
