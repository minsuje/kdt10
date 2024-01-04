import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Result from "./Result";

export default function ExAll() {
  // 상태관리
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });

  //   const [fruit, setFruit] = useState("apple");
  //   const [background, setBackground] = useState("black");
  //   const [color, setColor] = useState("black");
  //   const [content, setContent] = useState("text");
  return (
    <>
      {/* props를 넘겨줄건데 , setData 함수를 넘겨줘야 state 변경이 가능 */}
      <div>
        <Select setData={setData}></Select>
      </div>
      <div>
        <Input setData={setData}></Input>
      </div>
      <div>
        <Result data={data}></Result>
      </div>
    </>
  );
}
