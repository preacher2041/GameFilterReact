import {actionTypes} from './actions';

const initialState = {
	filterData: [],
	selectedFilterData: [],
	gameData: []
};

export const filtersComponentReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_FILTER_DATA:
			return {
				...state,
				isLoading: true
			};

		case actionTypes.FETCH_FILTER_DATA_SUCCESS:
			const filterGroups = action.result.filterGroups;

			return {
				...state,
				isLoading: false,
				filterData: filterGroups
			};

		case actionTypes.FETCH_FILTER_DATA_FAILED:
			const fetchFilterDataError = action.error.message;

			return {
				...state,
				isLoading: false,
				fetchDataError: fetchFilterDataError
			};

		case actionTypes.FETCH_GAME_DATA:
			return {
				...state,
				loadingData: true
			};
		case actionTypes.FETCH_GAME_DATA_SUCCESS:
			const gameData = action.result.slice();

			gameData.forEach(game => {
				game.filterTags = game.genres.concat(game.platforms);
				game.total_rating == null ? game.total_rating = 0 : game.total_rating = Math.round(game.total_rating);

			});

			return {
				...state,
				loadingData: false,
				gameData: gameData,
			};
		case actionTypes.FETCH_GAME_DATA_FAILED:
			const fetchDataError = action.error.message;

			return {
				...state,
				loadingData: false,
				fetchDataError: fetchDataError
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

			selectedFilterData = selectedFilterData.includes(filterObject) ? selectedFilterData.filter(i => i !== filterObject) : [...selectedFilterData, filterObject];

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

export const filterData = (gameData, selectedFilterData, sortValue) => {
	const FILTER_TYPES_UNSET = {
		AND: 'and-filter',
		OR: 'or-filter'
	};

	const SORT_METHOD = {
		'titleAsc': (resultA, resultB) => {
			let a = resultA.name;
			let b = resultB.name;

			if (a < b) {
				return -1;
			}

			if (a > b) {
				return 1;
			}

			return 0;
		},
		'titleDesc': (resultA, resultB) => {
			let a = resultA.name;
			let b = resultB.name;

			if (a > b) {
				return -1;
			}

			if (a < b) {
				return 1;
			}

			return 0;
		},
		'ratingAsc': (resultA, resultB) => {
			return parseInt(resultA.total_rating) - parseInt(resultB.total_rating)
		},
		'ratingDesc': (resultA, resultB) => {
			return parseInt(resultB.total_rating) - parseInt(resultA.total_rating);
		},
	};
	const sortFunction  = SORT_METHOD[sortValue] || SORT_METHOD.NONE;

	const activeFilters = selectedFilterData.reduce((filterInstructions, filterItem) => {
		const filterType = filterItem.filterType;
		const filterCategory = filterItem.filterCategory;
		const filterSlug = filterItem.filterSlug;

		let instruction = filterInstructions
			.find(instruction => instruction.filterCategory === filterCategory);

		if(!instruction) {
			instruction = {
				filterType,
				filterCategory,
				filterSlug: []
			};

			filterInstructions.push(instruction);
		}

		instruction.filterSlug.push(filterSlug);

		return filterInstructions;
	}, []);

	return gameData
		.filter(game => {
			const gameTags = Array.apply([], game.filterTags
				.map($tag => $tag.slug));

			// eslint-disable-next-line
			return activeFilters.every(filter => {
				if (filter.filterType === FILTER_TYPES_UNSET.AND) {
					// for AND filers, all tags must be present
					return filter.filterSlug.every(filterTag => gameTags.includes(filterTag));
				} else if (filter.filterType === FILTER_TYPES_UNSET.OR) {
					// for OR filers, any one tag must be present
					return filter.filterSlug.some(filterTag => gameTags.includes(filterTag));
				}
			})
		})
		.sort(sortFunction);
};