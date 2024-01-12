import { useSelector } from 'react-redux';
import NewBox1 from './components/NewBox1';

function App3() {
    const isvisible = useSelector((state) => state.isvisible.boolean);
    return (
        <>
            <h1>Redux Prac Ex</h1>
            <h1>
                isVisbleReducer의 값은 {isvisible ? '"참"' : '"거짓"'} 입니다
            </h1>
            <NewBox1 />
        </>
    );
}

export default App3;
