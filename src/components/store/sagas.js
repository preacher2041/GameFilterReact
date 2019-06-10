import { put, takeEvery } from 'redux-saga/effects';

import { actionTypes } from './actions';

function* fetchFilterData() {
	try {
		const result = yield fetch( './data/filterData.json')
			.then(response => response.json());

		yield put ({
			type: actionTypes.FETCH_FILTER_DATA_SUCCESS,
			result
		})
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.FETCH_FILTER_DATA_FAILED,
			errorMessage
		});
	}
}

function* filterSaga() {
	yield takeEvery(actionTypes.FETCH_FILTER_DATA, fetchFilterData);
}

export default filterSaga;