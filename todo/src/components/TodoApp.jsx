import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import { v4 } from "uuid";

const TodoApp = () => {
  const [arrOfTask, setArrOfTask] = useState([]);

  const TakeInput = (task) => {
    // console.log(task);
    const obj = {
      id: v4(),
      text: task,
    };
    setArrOfTask([...arrOfTask, obj]);
    console.log(arrOfTask);
  };
  return (
    <div>
      <Input TakeInput={TakeInput} />
      <Output arrOfTask={arrOfTask} />
    </div>
  );
};

export default TodoApp;
