import { call , all , takeLatest , put } from "redux-saga/effects";
import Actions from "./action.types";
import axios from "axios";
import { fetchDataFailure, fetchDataSuccess } from "./actions";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users",{
        cancelToken : source.token
    });
    const users = await res.data;
    return users; 
}

export function* fetchUsersAsync(){
    try {
        const users = yield call(getUsers);
        yield put(fetchDataSuccess(users));
        yield window.localStorage.setItem("users",JSON.stringify(users))
    } catch (error) {
        yield put(fetchDataFailure(error));
    }
} 

export function* fetchUserStartSaga(){
    yield takeLatest(Actions.FETCH_DATA_START, fetchUsersAsync)
}

export default function* userSaga(){
    yield all([
        call(fetchUserStartSaga)
    ])
}