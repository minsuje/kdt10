import PropTypes from "prop-types";

// export default function FuncComponent(props) {
//   const { name } = props;
//   return (
//     <div>
//       <h1>Hi!</h1>
//       <p>여기는 Function Component</p>
//       <p>
//         새로운 컴포넌트의 이름은 <b>{props.name}</b>
//       </p>
//       <p>
//         새로운 컴포넌트의 이름은 <b>{name}</b>
//       </p>
//     </div>
//   );
// }

// or

export default function FuncComponent({ name }) {
  // const { name } = props;
  return (
    <div>
      <h1>Hi!</h1>
      <p>여기는 Function Component</p>
      <p>{/* 새로운 컴포넌트의 이름은 <b>{props.name}</b> */}</p>
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

// function FuncComponent(){

// }
// export default FuncComponent

// 부모로 부터 받는 props가 없을 때 아래와 같이 정의한 기본값이 출력된다.
FuncComponent.defaultProps = {
  name: "길동",
};

FuncComponent.propTypes = {
  name: PropTypes.string,
};
