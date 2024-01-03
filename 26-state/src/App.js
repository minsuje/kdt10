import "./App.css";
import Counter from "./Counter";
import SayFunction from "./SayFunction";
import CounterFunction from "./CounterFunc";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr />
      <SayFunction></SayFunction>
      <hr />
      <CounterFunction></CounterFunction>
    </div>
  );
}

export default App;
