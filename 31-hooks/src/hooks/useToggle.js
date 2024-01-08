// 로직을 만들어보자
import { useState } from 'react';

// useToggle 이라는 함수
function useToggle(initValue = false) {
    // value: 토글의 상태
    // setValue : 토글 상태를 변화시키는 setter
    const [value, setValue] = useState(initValue);
    const toggleValue = () => {
        setValue(!value);
    };

    return [value, toggleValue];
}

export default useToggle;
