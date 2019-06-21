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

function* fetchGameData() {
	try {
		const proxyURL = 'https://cors-anywhere.herokuapp.com/';
		const targetURL = 'https://api-v3.igdb.com/games/';
		const requestData = `
			fields name, cover.url, platforms.name, platforms.slug, genres.name, genres.slug, summary, total_rating;
			where release_dates.date > 1514764860 & release_dates.platform = 48;
			limit 50;
		`;

		const result = yield fetch(proxyURL + targetURL, {
			method: 'POST',
			headers: {
				'user-key': '6116ef51800dbdde29b0030fd7eb3254',
				'Accept': 'application/json'
			},
			body: requestData

		})
		.then(response => response.json());

		yield put ({
			type: actionTypes.FETCH_GAME_DATA_SUCCESS,
			result
		})

	} catch(e) {
		console.log(e);
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.FETCH_GAME_DATA_FAILED,
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

function* setSelectedFilterData(filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex) {
	yield put({
		type: actionTypes.SET_SELECTED_FILTER_DATA,
		filterSlug,
		filterLabel,
		filterGroupType,
		filterGroupCategory,
		filterGroupIndex,
		filterButtonIndex
	});
}

function* unsetSelectedFilterData(filterIndex) {
	yield put ({
		type: actionTypes.UNSET_SELECTED_FILTER_DATA,
		filterIndex
	});
}

function* setSortValue(sortValue) {
	yield put({
		type: actionTypes.SET_SORT_VALUE,
		sortValue
	})
}

function* filterComponentSaga() {
	yield takeEvery(actionTypes.FETCH_FILTER_DATA, fetchFilterData);
	yield takeEvery(actionTypes.FETCH_GAME_DATA, fetchGameData);
	yield take(actionTypes.TOGGLE_FILTER_BUTTON_STATE, toggleFilterState);
	yield take(actionTypes.SET_SELECTED_FILTER_DATA, setSelectedFilterData);
	yield take(actionTypes.UNSET_SELECTED_FILTER_DATA, unsetSelectedFilterData);
	yield take(actionTypes.SET_SORT_VALUE, setSortValue);
}

export default filterComponentSaga;