import { put, delay, call, all, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { AST_FAILURE, FETCH_AST, AST_SUCCESS } from '../actions/ActionTypes';


export function* searchAsteroid(action) {
    try {
        const response= yield call(
            axios.get,
            `https://api.nasa.gov/neo/rest/v1/neo/${action.payload}?api_key=VGuBlkM1gXJWdqDzZy4fj6WjoLDMZ6OZV1Yfpi1L`
        )
        if(response==undefined){
            yield put({type:AST_FAILURE,payload:'No data present for asteroid ID'})
        }
        else{
            yield put({type:AST_SUCCESS,payload:response.data})
        }        
    }
    catch (error) {
        // console.log('inside saga error')
        yield put({type:AST_FAILURE,payload:'Error while fetching data for asteroid ID'})
    }
}

export function* watchSearch() {
    yield takeLatest(FETCH_AST, searchAsteroid)
}

export default function* rootSaga() {
    yield all([call(watchSearch)]);
}