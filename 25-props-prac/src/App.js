import "./App.css";
import "./Introduce.css";
import "./Books.css";
import Introduce from "./Introduce";
import Books from "./Books";

function App() {
  return (
    <div className="App">
      <Introduce food="제육"></Introduce>
      <hr />
      <Books
        title="달러구트 꿈백화점"
        author="이미예"
        price="30000원"
        type="장편소설"
      ></Books>
    </div>
  );
}

export default App;
