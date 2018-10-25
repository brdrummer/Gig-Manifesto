import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';


function* gigFormSaga(){
    yield takeEvery('ADD_GIG', addGig)
}

function* addGig(action) {
    try {
        yield call(axios.post, 'api/gigs', action.payload)
        yield put({type:'FETCH_GIGS', payload: ''})
    } catch (error) {
        console.log('error fetching gigs', error);
    };
};

export default gigFormSaga;
