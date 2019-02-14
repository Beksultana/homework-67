
const initialStore = {
    counter: ''
};

const reducer = (state = initialStore, action) => {
    switch (action.type){
        case 'ADD_NUMBER': {
           if (state.counter.length < 20){
               return {
                   ...state, counter: state.counter + action.number
               };
           } else {
               return state
           }
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
                counter: ''
            }
        }

        case 'EQUALLY': {
        return {
            ...state,
            counter: eval(state.counter)
        }
    }

        default:
            return state;
    }
};

export default reducer;