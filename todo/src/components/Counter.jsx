import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter</div>
      <div>{count}</div>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        -
      </button>
      <button disabled={count === 10} onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
};

export default Counter;
