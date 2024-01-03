import React, { useState } from "react";

function SayFunction() {
  console.log(useState("welcome!")); // ['welcome!', function] 입력한 초기값과 함수가 출력 됬다.
  const [message, setMessage] = useState("welcome!"); // 일반적으로 두번째 인자는 앞의 인자의 set을 붙야서 만든다.
  // message: 메세지 상태
  // setMessage(): message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage("안녕하세요~~");
  };
  const onClickLeave = () => {
    setMessage("안녕히 가세요~~");
  };
  return (
    <div>
      {/* 
      주의 사항! : 괄호 없음!!!!!
      - HTML: onclick="onclickEnter()" => 문자열 형식으로 호출문을 등록
      - JS: addEventListener("click", onclickEnter) => 괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생했을 때 함수 호출되도록
      - React: onClick = {onclickEnter} => JS와 동일
       */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default SayFunction;
