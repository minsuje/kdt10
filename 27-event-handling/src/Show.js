import React, { useState } from "react";

export default function Show() {
  const [show, setShow] = useState(true);

  const view = () => {
    // true -> false
    // false -> true
    setShow(!show);
  };

  //   display가 true일 때만 화면에 나타날 것이다.

  return (
    <div>
      <button onClick={view}>{show ? "사라져라" : "보여라"}</button>
      {show && <h1>안녕하세요</h1>}
    </div>
  );
}
