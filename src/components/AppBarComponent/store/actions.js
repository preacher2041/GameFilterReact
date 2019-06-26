export const actionTypes = {
	SET_SELECTED_FILTER_DATA: 'SET_SELECTED_FILTER_DATA',
	UNSET_SELECTED_FILTER_DATA: 'UNSET_SELECTED_FILTER_DATA',
	SET_SORT_VALUE: 'SET_SORT_VALUE',
};

export const toggleFilterState = (filterGroupIndex, filterButtonIndex) => ({
	type: actionTypes.TOGGLE_FILTER_BUTTON_STATE,
	filterGroupIndex,
	filterButtonIndex
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
