export const plus = () => ({ type: 'counter/plus' });
export const minus = () => ({ type: 'counter/minus' });
export const reset = () => ({ type: 'counter/reset' });

const init = {
    number: 0,
};

const counterReducer2 = (state = init, action) => {
    switch (action.type) {
        case 'counter/plus':
            return { number: state.number + 1 };
        case 'counter/minus':
            return { number: state.number - 1 };
        case 'counter/reset':
            return { number: 0 };
        default:
            return state;
    }
};

export default counterReducer2;
