import "./App.css";
import "./Introduce.css";
import Introduce from "./Introduce";
import Books from "./Books";
import NewOne from "./newOne";

function App() {
  const log = function () {
    console.log("콘솔 메시지 출력");
  };
  return (
    <div className="App">
      <Introduce food="제육"></Introduce>
      <Introduce></Introduce>
      <hr />
      <Books
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      ></Books>
      <hr />
      <NewOne text="이건 기본 text props입니다." valid={log}></NewOne>
      <NewOne valid={log}></NewOne>
    </div>
  );
}

export default App;
