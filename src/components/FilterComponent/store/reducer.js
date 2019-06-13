import {actionTypes} from './actions';

const initialState = {
	filterData: [],
	selectedFilters: []
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_FILTER_DATA:
			return {
				...state,
				loadingData: true
			};
		case actionTypes.FETCH_FILTER_DATA_SUCCESS:
			const filterGroups = action.result.filterGroups;

			return {
				...state,
				loadingData: false,
				filterData: filterGroups
			};
		case actionTypes.FETCH_FILTER_DATA_FAILED:
			const fetchDataError = action.error.message;

			return {
				...state,
				loadingData: false,
				fetchDataError: fetchDataError
			};
		case actionTypes.TOGGLE_FILTER_STATE:
			const filterGroupIndex = parseInt(action.filterGroupIndex);
			const filterButtonIndex = parseInt(action.filterButtonIndex);

			return {
				...state,
				filterData: state.filterData.map((filterGroup, index) => {
					if (index === filterGroupIndex) {
						filterGroup.filterLabels.map((label, index) => {
							if (index === filterButtonIndex) {
								return label.isActive = !label.isActive;
							}

							return label
						});
					}

					return filterGroup;
				})
			};
		case actionTypes.SET_SELECTED_FILTER:
			const filterLabel = action.filterLabel;
			console.log('Filter Label: ', filterLabel);
			console.log('Selected Filter State', state.selectedFilters);
			return {
				...state,
			};
		default:
			return state;
	}
};

export default filterReducer;