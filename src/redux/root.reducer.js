import Actions from "./action.types";

const INITIAL_STATE = {
    users : [],
    loading : false,
    errors : []
}

const reducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case Actions.FETCH_DATA_START:
            return {
                ...state,
                loading : true
            }
        
        case Actions.FETCH_DATA_FAILURE:
            return {
                ...state,
                errors : action.errors,
                loading : false
            }    

        case Actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                users : action.users,
                loading : false
            }

        case Actions.DELETE_ROW:
            return {
               ...state,
               users : state.users.filter( user => user.id !== action.id) 
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;