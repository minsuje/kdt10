import { useSelector, useDispatch } from 'react-redux';

function App1() {
    // useSelector : store에 있는 state(여러개 일 수도 있다) 중 선택해서 넘겨줌
    const number = useSelector((state) => state.number);
    return (
        <div className="App">
            <h1>React Redux Ex</h1>
            <h2>number: {number}</h2>
            <Box1 />
        </div>
    );
}

const Box1 = () => {
    return (
        <div className="Box">
            <h2>Box1</h2>
            <Box2 />
        </div>
    );
};
const Box2 = () => {
    return (
        <div className="Box">
            <h2>Box2</h2>
            <Box3 />
        </div>
    );
};
const Box3 = () => {
    return (
        <div className="Box">
            <h2>Box3 </h2>
            <Box4 />
        </div>
    );
};
const Box4 = () => {
    const number = useSelector((state) => state.number);
    const dispatch = useDispatch();
    return (
        <div className="Box">
            <h2>Box4 : {number}</h2>
            <button onClick={() => dispatch({ type: 'plus' })}>Plus</button>
            <button onClick={() => dispatch({ type: 'minus' })}>Minus</button>
        </div>
    );
};

export default App1;
