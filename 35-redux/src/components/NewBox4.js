import { useDispatch, useSelector } from 'react-redux';
// import { plus, minus, reset } from '../store/counterReducer2';
// import { change } from '../store/isVisibleReducer';

function NewBox4() {
    const isvisible = useSelector((state) => state.isvisible.boolean);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                isVisbleReducer의 값은 {isvisible ? '"참"' : '"거짓"'} 입니다
            </h1>
            <button onClick={() => dispatch({ type: 'isvisible/change' })}>
                change
            </button>
        </div>
    );
}

export default NewBox4;
