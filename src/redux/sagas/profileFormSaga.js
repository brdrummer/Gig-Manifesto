import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';


function* profileFormSaga(){
    yield takeEvery('ADD_PROFILE', addProfile)
}

function* addProfile(action) {
    try {
        yield call(axios.post, 'api/profile', action.payload)
        yield put({type:'FETCH_PROFILE'})
    } catch (error) {
        console.log('error fetching profiles', error);
    };
};

export default profileFormSaga;
