import { useSearchParams } from 'react-router-dom';

function MainPage() {
    console.log(useSearchParams());
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('mode')); // Dark or null
    // / => null
    // /?mode=Dark => Dark
    return (
        <div className={['Main', searchParams.get('mode')].join(' ')}>
            <h1>Main Page</h1>
            <button
                onClick={() => {
                    // {mode: 'Dark'} 설정
                    setSearchParams({ mode: 'Dark' });
                }}
            >
                Dark Mode
            </button>
            <button
                onClick={() => {
                    setSearchParams({ mode: 'White' });
                }}
            >
                normal Mode
            </button>
        </div>
    );
}

export default MainPage;
