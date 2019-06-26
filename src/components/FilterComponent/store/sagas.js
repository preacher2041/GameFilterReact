import { put, take, takeEvery } from 'redux-saga/effects';

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

function* toggleFilterState(filterGroupIndex, filterButtonIndex) {
	yield put({
		type: actionTypes.TOGGLE_FILTER_BUTTON_STATE,
		filterGroupIndex,
		filterButtonIndex
	});
}

function* filterComponentSaga() {
	yield takeEvery(actionTypes.FETCH_FILTER_DATA, fetchFilterData);
	yield take(actionTypes.TOGGLE_FILTER_BUTTON_STATE, toggleFilterState);
}

export default filterComponentSaga;