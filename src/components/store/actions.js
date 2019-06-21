export const actionTypes = {
	FETCH_FILTER_DATA: 'FETCH_FILTER_DATA',
	FETCH_FILTER_DATA_SUCCESS: 'FETCH_FILTER_DATA_SUCCESS',
	FETCH_FILTER_DATA_FAILED: 'FETCH_FILTER_DATA_FAILED',
	FETCH_GAME_DATA: 'FETCH_GAME_DATA',
	FETCH_GAME_DATA_SUCCESS: 'FETCH_GAME_DATA_SUCCESS',
	FETCH_GAME_DATA_FAILED: 'FETCH_GAME_DATA_FAILED',
	TOGGLE_FILTER_BUTTON_STATE: 'TOGGLE_FILTER_BUTTON_STATE',
	SET_SELECTED_FILTER_DATA: 'SET_SELECTED_FILTER_DATA',
	UNSET_SELECTED_FILTER_DATA: 'UNSET_SELECTED_FILTER_DATA',
	SET_SORT_VALUE: 'SET_SORT_VALUE',
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

export const fetchGameData = () => ({
	type: actionTypes.FETCH_GAME_DATA
});

export const fetchFilterDataSuccess = (result) => ({
	type: actionTypes.FETCH_GAME_DATA_SUCCESS,
	result
});

export const fetchFilterDataFailed = (error) => ({
	type: actionTypes.FETCH_GAME_DATA_FAILED,
	error
});

export const setSelectedFilterData = (filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex) => ({
	type: actionTypes.SET_SELECTED_FILTER_DATA,
	filterSlug,
	filterLabel,
	filterGroupType,
	filterGroupCategory,
	filterGroupIndex,
	filterButtonIndex
});

export const unsetSelectedFilterData = (filterIndex) => ({
	type: actionTypes.UNSET_SELECTED_FILTER_DATA,
	filterIndex
});

export const setSortValue = (sortValue) => ({
	type: actionTypes.SET_SORT_VALUE,
	sortValue
});
