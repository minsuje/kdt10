import React, { useState } from "react";

export default function Show() {
  const [show, setShow] = useState(ture);
  const [none, setNone] = useState("none");

  const view = (show) => {
    // true -> false
    // false -> true
    setShow(!show);
  };

  //   display가 true일 때만 화면에 나타날 것이다.

  return (
    <div>
      <button style={{ display: show }} onClick={view}>
        사라져라
      </button>
      <h1 style={{ display: show }}>안녕하세요</h1>
    </div>
  );
}
