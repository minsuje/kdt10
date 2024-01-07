import Post from './Ex1';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* 클래스형 컴포넌트 라이프사이클 */}
            <LifeCycleClass></LifeCycleClass>
            <hr />
            <LifeCycleFunc></LifeCycleFunc>
            <br />
            <hr />
            <Post></Post>
        </div>
    );
}

export default App;
