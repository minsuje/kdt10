// import { Form } from 'react-hook-form';
import './App.css';
import Faq from './Faq';
import UseCallbackEx from './UseCallback';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';
import UseReducerEx from './UseReducerEx';
import FormEx from './FormEx';
import Form from './Form';

function App() {
    return (
        <div className="App">
            <UseMemoEx />
            <hr />
            <UseCallbackEx></UseCallbackEx>
            <hr />
            <UseCallbackEx2 postId={9} />
            <hr />
            <UseReducerEx />
            <hr />
            <Faq />
            <hr />
            <Form />
            <hr />
            <FormEx />
        </div>
    );
}

export default App;
