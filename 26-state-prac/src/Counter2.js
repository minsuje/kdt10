import React, { useState } from "react";

export default function CounterFunc() {
  const [counter, setCounter] = useState(0);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 2);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}
