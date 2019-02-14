
const initialStore = {
    counter: ''
};

const reducer = (state = initialStore, action) => {
    switch (action.type){
        case 'ADD_NUMBER': {
           return {
               ...state, counter: state.counter + action.number
           };
        }
        case 'DELETE_ONE': {
            const removedCounter = state.counter.substr(0, state.counter.length - 1);
            return {
                ...state,
                counter: removedCounter
            }
        }
        case 'DELETE_C': {
            return {
                ...state,
                error: null,
                counter: ''
            }
        }

        case 'EQUALLY': {
            try {
                const result = eval(state.counter);
                return {
                    ...state,
                    counter: result
                }
            } catch (e) {
                return {
                    ...state,
                    error: 'Wrong operation'
                }
            }

    }
        default:
            return state;
    }
};

export default reducer;