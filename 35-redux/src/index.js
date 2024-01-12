import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App2';
import { Provider } from 'react-redux';
// import counterReducer2 from './store/counterReducer2';
// import isVisibleReducer from './store/isVisibleReducer';

import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
import rootReducer from './store/index';
import App3 from './App3';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(counterReducer2);
// const store = createStore(isVisibleReducer);
// const store = configureStore({ reducer: rootReducer });
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <App3 />
        </Provider>
    </React.StrictMode>
);
