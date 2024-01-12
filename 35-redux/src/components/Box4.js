import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from '../store/counterReducer';

function Box4() {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    console.log(minus());
    return (
        <div className="Box">
            <h2>Box4 : {number}</h2>
            <button onClick={() => dispatch({ type: 'counter/plus' })}>
                Plus
            </button>
            <button onClick={() => dispatch(minus())}>Minus</button>
        </div>
    );
}

export default Box4;
