import React, { useState } from "react";

const CounterFunction = () => {
  const [number, setNumber] = useState(0);
  const onClickEnter = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickEnter}>Plus 1</button>
    </div>
  );
};

export default CounterFunction;
