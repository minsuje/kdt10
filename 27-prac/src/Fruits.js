import React, { useState } from "react";

export default function Fruits() {
  //   const { input } = props;
  const [change, setChange] = useState({
    backColor: "black",
    color: "white",
    write: "입력하세요",
    fruit: "apple",
    pic: "/apple.jpeg",
  });

  function newFruit(e) {
    setChange({ pic: `/${e}.jpeg`, fruit: `${e}` });
  }
  const Typing = (e) => {
    setChange({ write: e.target.value });
  };
  const newBackColor = (e) => {
    setChange({ backColor: `${e}` });
    // console.log(e);
  };
  const newColor = (e) => {
    setChange({ color: `${e}` });
  };
  return (
    <div>
      {/* 의미없는 div 태크로 감싸지 않게 <></>를 사용하여 감쌀 수 있다. */}
      <></>
      과일 :
      <select
        onChange={(e) => newFruit(e.target.value)}
        name="Fruits"
        id="Fruits"
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
      </select>
      배경색 :
      <select
        onChange={(e) => newBackColor(e.target.value)}
        name="background"
        id="background"
      >
        <option value="black">검정</option>
        <option value="red">빨깅</option>
        <option value="blue">파랑</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
      </select>
      글자색 :
      <select
        onChange={(e) => newColor(e.target.value)}
        name="color"
        id="color"
      >
        <option value="black">검정</option>
        <option value="red">빨깅</option>
        <option value="blue">파랑</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
      </select>
      <br />
      <br />
      내용: <input type="text" onChange={Typing} />
      <br />
      <img src={process.env.PUBLIC_URL + change.pic} alt={change.fruit} />
      <br />
      <div style={{ backgroundColor: change.backColor, color: change.color }}>
        {change.write}
      </div>
    </div>
  );
}

Fruits.defaultProps = {
  input: "입력하세요",
};
