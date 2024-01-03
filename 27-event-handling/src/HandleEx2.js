import React, { useState } from "react";

export default function HandleEx2() {
  const [color, setColor] = useState("black");
  const red = (color) => {
    setColor(color);
  };
  const blue = (color) => {
    setColor(color);
  };

  // obj : e.target

  return (
    <div>
      <h1 style={{ color: color }}>검정색 글씨</h1>
      <button onClick={() => red("red")}>빨간색</button>
      <button onClick={() => blue("blue")}>파란색</button>
    </div>
  );
}
