import {actionTypes} from './actions';

const initialState = {
	selectedFilterData: []
};

export const SelectedFiltersComponentReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_SELECTED_FILTER_DATA:
			const filterObject = {
				'filterSlug': action.filterSlug,
				'filterLabel': action.filterLabel,
				'filterType': action.filterGroupType,
				'filterCategory': action.filterGroupCategory,
				'filterGroupIndex': action.filterGroupIndex,
				'filterButtonIndex': action.filterButtonIndex
			};

			let selectedFilterData = state.selectedFilterData.slice();
			selectedFilterData = selectedFilterData.some(selectedFilterObj => selectedFilterObj.filterLabel === filterObject.filterLabel) ? selectedFilterData.filter(i => i.filterLabel !== filterObject.filterLabel) : [...selectedFilterData, filterObject];

			return {
				...state,
				selectedFilterData: selectedFilterData,
			};

		case actionTypes.UNSET_SELECTED_FILTER_DATA:
			const filterIndex = parseInt(action.filterIndex);
			const updatedFiltersUnset = state.selectedFilterData.filter((element, i) => i !== filterIndex);

			return {
				...state,
				selectedFilterData: updatedFiltersUnset,
			};

		case actionTypes.SET_SORT_VALUE:
			return {
				...state,
				sortValue: action.sortValue
			};

		default:
			return state;
	}
};