import React, { Component } from "react";

class RefClass1 extends Component {
  // 클래스 형 컴포넌트 - 콜백 함수를 이용한 Ref
  handleFocus = () => {
    console.log(this); // RefClass1 컴포넌트 (myInput 포함)
    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop으로 넣어주면 ref 설정 완료 */}
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>버튼</button>
      </>
    );
  }
}

export default RefClass1;
