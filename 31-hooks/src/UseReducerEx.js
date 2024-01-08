import React, { useReducer } from 'react';

const initState = { value: 0 }; // 초기 상태값
const reducer = (prevState, action) => {
    // 현재 state와 액션 값을 전달 받아서 새로운 state값을 반환하는 역할
    console.log(prevState);
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return { value: prevState.value + 1 };
        case 'DECREMENT':
            return { value: prevState.value - 1 };
        case 'RESET':
            return { value: 0 };
        default:
            return { value: prevState.value };
    }
};

export default function UseReducerEx() {
    // reducer : state를 업데이트 하는 함수
    // dispatch : 액션 (state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
    // state : 현재 상태
    // useReducer는 [state, dispatch]를 리턴함
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const reset = () => dispatch({ type: 'RESET' });

    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <>
            <h1>useReducer Ex</h1>
            <h2>{state.value}</h2>
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}
