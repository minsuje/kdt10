import "./App.css";
import Button from "./Button";
import FuncComponent from "./FuncComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    <div className="App">
      <FuncComponent name={3} />
      <hr />

      <Button link="https://www.google.com">Google</Button>
      <hr />
      <ClassComponent name={3}></ClassComponent>
    </div>
  );
}

export default App;
