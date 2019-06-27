export const actionTypes = {
	FETCH_FILTER_DATA: 'FETCH_FILTER_DATA',
	FETCH_FILTER_DATA_SUCCESS: 'FETCH_FILTER_DATA_SUCCESS',
	FETCH_FILTER_DATA_FAILED: 'FETCH_FILTER_DATA_FAILED',
	TOGGLE_FILTER_BUTTON_STATE: 'TOGGLE_FILTER_BUTTON_STATE',
	TOGGLE_FILTER_DRAWER_STATE: 'TOGGLE_FILTER_DRAWER_STATE',
};

export const fetchFilterData = () => ({
	type: actionTypes.FETCH_FILTER_DATA
});

export const fecthFilterDataSuccess = (result) => ({
	type: actionTypes.FETCH_FILTER_DATA_SUCCESS,
	result
});

export const fecthFilterDataFailed = (error) => ({
	type: actionTypes.FETCH_FILTER_DATA_FAILED,
	error
});

export const toggleFilterState = (filterGroupIndex, filterButtonIndex) => ({
	type: actionTypes.TOGGLE_FILTER_BUTTON_STATE,
	filterGroupIndex,
	filterButtonIndex
});

export const toggleFilterDrawerState = (filterDrawerState) => ({
	type: actionTypes.TOGGLE_FILTER_DRAWER_STATE,
	filterDrawerState,
});