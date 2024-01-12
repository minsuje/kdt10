// const isVisible = true;

export const change = () => ({ type: 'isvisible/change' });
const init = { boolean: true };

const isVisibleReducer = (state = init, action) => {
    console.log('action >>>> ', action);
    if (action.type === 'isvisible/change') {
        return { boolean: !state.boolean };
    }
    return state;
    // return true;
};

export default isVisibleReducer;
