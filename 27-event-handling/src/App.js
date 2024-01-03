import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import HandleEx from "./HandlerEx";
import HandleEx2 from "./HandleEx2";
import Show from "./Show";

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <hr />
      <ClassBind></ClassBind>
      <hr />
      <Counter></Counter>
      <hr />
      <HandleEx></HandleEx>
      <hr />
      <HandleEx2></HandleEx2>
      <hr />
      <Show></Show>
    </div>
  );
}

export default App;
