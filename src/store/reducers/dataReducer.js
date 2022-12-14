import { ADD_NEW } from "../actions/AddDataActions";


const initialState = {
    Income: [],
    Expenditure: [],
}

function dataReducer(state = initialState, action) {
    debugger
    switch (action.type) {
        case ADD_NEW:
            const data = state[action.data.from];
            data.push(action.data)
            return {
                ...state,
                data
            };
        default:
            return state;
    }
}

export default dataReducer