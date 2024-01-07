import './App.css';
import UseCallbackEx from './UseCallback';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';

function App() {
    return (
        <div className="App">
            <UseMemoEx />
            <hr />
            <UseCallbackEx></UseCallbackEx>
            <hr />
            <UseCallbackEx2 postId={9} />
        </div>
    );
}

export default App;
