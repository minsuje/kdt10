import React, { useState } from "react";

export default function HandleEx2() {
  const [font, setFont] = useState({ color: "black", text: "검정색" });

  // obj : e.target

  const changeFont = (color, obj) => {
    setFont({ color: color, text: obj.innerText });
  };
  return (
    <div>
      <h1 style={{ color: font.color }}>{font.text}</h1>
      <button onClick={(e) => changeFont("red", e.target)}>빨간색</button>
      <button onClick={(e) => changeFont("blue", e.target)}>파란색</button>
    </div>
  );
}
