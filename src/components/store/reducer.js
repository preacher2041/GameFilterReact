import {actionTypes} from './actions';

const filterReducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.FETCH_FILTER_DATA:
			return {
				...state,
				loadingData: true
			};
		case actionTypes.FETCH_FILTER_DATA_SUCCESS:
			return Object.assign({}, state, {
				loadingData: false,
				filterData: action.result.filterGroups.map(filterGroup => {
					return filterGroup
				})
			});
		case actionTypes.FETCH_FILTER_DATA_FAILED:
			const fetchDataError = action.error.message;
			return {
				...state,
				loadingData: false,
				fetchDataError: fetchDataError
			};
		default:
			return state;
	}
};

export default filterReducer;