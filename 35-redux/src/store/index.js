import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';

// 여러개의 Reducer들을 combine으로 묶는다

const rootReducer = combineReducers({
    counter: counterReducer,

    isvisible: isVisibleReducer,
});

export default rootReducer;
