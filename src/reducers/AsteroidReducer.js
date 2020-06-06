import { AST_FAILURE, AST_SUCCESS, FETCH_AST, AST_RESET } from '../actions/ActionTypes';


const initialState = {
    searchError: '',
    searchResult: {},
    searching: false,
    searchCompleted: false
}

const AsteroidReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AST:
            console.log('fetching asteroid data:'+action.payload)
            return {
                ...state,
                searchError: '',
                searchResult: {},
                searching: true,
                searchCompleted: false
            }
        case AST_SUCCESS:
            // console.log("data is")
            // console.log(action.payload)
            return {
                ...state,
                searchError: '',
                searchResult: action.payload,
                searching: false,
                searchCompleted: true
            }
        case AST_FAILURE:
            return {
                ...state,
                searchError: action.payload,
                searchResult: {},
                searching: false,
                searchCompleted: true
            }
        case AST_RESET:
            return {
                ...state,
                searchError: '',
                searchResult: {},
                searching: false,
                searchCompleted: false
            }
        default:
            return state
    }
}

export default AsteroidReducer;