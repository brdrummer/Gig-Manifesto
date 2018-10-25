import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { connect } from 'react-redux';

function* gigSaga() {
    yield takeEvery('FETCH_GIGS', fetchGigs);
    // yield takeEvery('DELETE_ITEM', deleteItem);
    // yield takeEvery('UPDATE_ITEM', updateItem);
}

// function* updateItem(action) {
//     try {
//         yield call(axios.put, `/api/shelf/${action.payload.id}`, action.payload);
//         yield put({ type: 'FETCH_ITEMS' });
//     } catch (error) {
//         console.log('error updating item', error);
//     }
// }

// function* deleteItem(action) {
//     console.log('delete was hit', action);
//     try {
//         yield call(axios.delete, '/api/shelf/' + action.payload)
//         yield put({ type: 'FETCH_ITEMS' })
//     } catch (error) {
//         console.log('error posting items', error);

//     }
// }


function* fetchGigs(action) {
    console.log('fetch was hit', action);
    try {
        const gigResponse = yield call(axios.get, `/api/gigs/${action.payload}`)
        yield put({ type: 'SET_GIGS', payload: gigResponse.data });
    } catch (error) {
        console.log(error);
    }
}








// const mapStateToProps = ({user}) => ({ user });
// const mapReduxStatetoProps = (reduxState) => {
// return {reduxState}
// }
// ${this.props.reduxState.user.id}
// export default connect(mapReduxStatetoProps)(gigSaga);
// export default connect(mapStateToProps)(gigSaga);
export default gigSaga;