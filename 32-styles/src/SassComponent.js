import './styles/SassComponent.scss';
function SassComponent() {
    return (
        <>
            <div className="container">
                {/* class = 'box red' 와 같은 의미 */}
                <div className="box red"></div>
                <div className="box orange"></div>
                <div className="box yellow"></div>
            </div>
            <button className="btn">Button</button>
            <button className="btn-primary">Button Primary</button>
        </>
    );
}

export default SassComponent;
