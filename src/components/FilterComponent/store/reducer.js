import {actionTypes} from './actions';

const initialState = {
	filterData: [],
};

export const FiltersComponentReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_FILTER_DATA:
			return {
				...state,
				filterDataIsLoading: true
			};

		case actionTypes.FETCH_FILTER_DATA_SUCCESS:
			const filterGroups = action.result.filterGroups;

			return {
				...state,
				filterDataIsLoading: false,
				filterData: filterGroups
			};

		case actionTypes.FETCH_FILTER_DATA_FAILED:
			const fetchFilterDataError = action.error.message;

			return {
				...state,
				filterDataIsLoading: false,
				fetchDataError: fetchFilterDataError
			};

		case actionTypes.TOGGLE_FILTER_BUTTON_STATE:
			const filterGroupIndex = parseInt(action.filterGroupIndex);
			const filterButtonIndex = parseInt(action.filterButtonIndex);
			const updatedFilterDataArray = state.filterData.slice();

			updatedFilterDataArray.forEach((filterGroup, index) => {
				if (index === filterGroupIndex) {
					filterGroup.filterLabels.forEach((label, index) => {
						if (index === filterButtonIndex) {
							return label.isActive = !label.isActive;
						}

						return label
					});
				}

				return filterGroup;
			});

			return {
				...state,
				filterData: updatedFilterDataArray
			};

		default:
			return state;
	}
};