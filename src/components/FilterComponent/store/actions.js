export const actionTypes = {
	FETCH_FILTER_DATA: 'FETCH_FILTER_DATA',
	FETCH_FILTER_DATA_SUCCESS: 'FETCH_FILTER_DATA_SUCCESS',
	FETCH_FILTER_DATA_FAILED: 'FETCH_FILTER_DATA_FAILED',
	TOGGLE_FILTER_STATE: 'TOGGLE_FILTER_STATE',
	SET_SELECTED_FILTER: 'SET_SELECTED_FILTER'
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
	type: actionTypes.TOGGLE_FILTER_STATE,
	filterGroupIndex,
	filterButtonIndex
});

export const setSelectedFilter = (filterLabel) => ({
	type: actionTypes.SET_SELECTED_FILTER,
	filterLabel
});



