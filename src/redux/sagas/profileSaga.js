import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* profileSaga() {
    yield takeEvery('FETCH_PROFILE', fetchProfiles);

}


function* fetchProfiles(action) {
    console.log('fetch was hit', action);
    try {
        const profileResponse = yield call(axios.get, '/api/profile')
        yield put({ type: 'SET_PROFILE', payload: profileResponse.data });
    } catch (error) {
        console.log(error);
    }
}










export default profileSaga;
