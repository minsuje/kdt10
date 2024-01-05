import { useRef } from "react";
import React, { useState } from "react";

const RefFunc2 = () => {
    const idRef = useRef(1);
    const [id, setId] = useState(10);

    const plusIdRef = () => {
        // idRef값 증가
        idRef.current += 1;
        console.log(idRef.current);
        // ref 로컬 변수 값은 바뀌지만 컴포넌트가 다시 렌더링 되진 않음
    };

    const plusIdState = () => {
        setId(id + 1);
    };
    return (
        <>
            <p>(함수형 컴포넌트) ref 로컬변수 사용 </p>
            <h2>{idRef.current}</h2>
            <button onClick={plusIdRef}>Plus +1</button>

            <h2>{id}</h2>
            <button onClick={plusIdState}>Plus +1 State</button>
        </>
    );
};
export default RefFunc2;
