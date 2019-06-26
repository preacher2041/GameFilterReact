import { put, takeEvery } from 'redux-saga/effects';

import { actionTypes } from './actions';

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

function* filterComponentSaga() {
	yield takeEvery(actionTypes.FETCH_GAME_DATA, fetchGameData);
}

export default filterComponentSaga;