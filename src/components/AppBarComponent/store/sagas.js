import { put, take } from 'redux-saga/effects';

import { actionTypes } from './actions';

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
	yield take(actionTypes.SET_SELECTED_FILTER_DATA, setSelectedFilterData);
	yield take(actionTypes.UNSET_SELECTED_FILTER_DATA, unsetSelectedFilterData);
	yield take(actionTypes.SET_SORT_VALUE, setSortValue);
}

export default filterComponentSaga;