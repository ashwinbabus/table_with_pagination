import Actions from "./action.types";

export const fetchDataStart = () => ({
    type : Actions.FETCH_DATA_START
})

export const fetchDataFailure = (error) => ({
    type : Actions.FETCH_DATA_FAILURE,
    error
})

export const fetchDataSuccess = (data) => ({
    type : Actions.FETCH_DATA_SUCCESS,
    users : data
})

export const deleteRow = (id) => ({
    type : Actions.DELETE_ROW,
    id 
})
