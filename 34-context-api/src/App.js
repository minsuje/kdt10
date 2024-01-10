import { createContext } from 'react';
import UserProvider from './context/UserProvider';
import UserProfile from './components/UserProfile';
import Form from './components/Form';

export const ThemeContext = createContext(null);

function App() {
    const MyContext = createContext('defaultValue');
    console.log(MyContext);
    return (
        <div className="App">
            {/* UserProvider안에 UserProfile이 있기 때문에, UserProvider에서 value prop으로 넘겨준 값을 UserProfile에서
          Consumer or UseContext를 사용해서  */}
            <UserProvider>
                <UserProfile />
            </UserProvider>

            {/* react dev */}
            <ThemeContext.Provider value="dark">
                <Form />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
