import "./App.css";
import RefClass1 from "./RefClass1";
import RefClass2 from "./RefClass2";
import RefFunc1 from "./RefFunc1";
import RefFunc2 from "./RefFunc2";

function App() {
  return (
    <div className="App">
      <RefClass1></RefClass1>
      <hr />
      <RefClass2></RefClass2>
      <hr />
      <RefFunc1></RefFunc1>
      <hr />
      <RefFunc2></RefFunc2>
    </div>
  );
}

export default App;
