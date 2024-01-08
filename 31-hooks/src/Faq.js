import useToggle from './hooks/useToggle';

function Faq() {
    const [isFaqOpen, setIsFaqOpen] = useToggle();
    console.log(useToggle());
    console.log(setIsFaqOpen);
    return (
        <>
            <h1>Custom hook (useToggle) Ex</h1>
            {console.log(isFaqOpen)}
            <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
                Q. 리액트에서 커스텀 훅 만들 수 있나???
            </div>
            {isFaqOpen && <div>A. 가능합니다</div>}
            {console.log(isFaqOpen)}
        </>
    );
}

export default Faq;
