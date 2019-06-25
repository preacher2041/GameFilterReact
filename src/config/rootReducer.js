import { combineReducers } from 'redux';
import {FiltersComponentReducer} from '../components/FilterComponent/store/reducer';
import {ItemsComponentReducer} from '../components/FilterResultsComponent/store/reducer';
import {SelectedFiltersComponentReducer} from '../components/AppBarComponent/store/reducer';

export default combineReducers({
	FiltersComponent: FiltersComponentReducer,
	ItemsComponent: ItemsComponentReducer,
	SelectedFiltersComponent: SelectedFiltersComponentReducer
});

export const filterData = (itemData, selectedFilterData, sortValue) => {
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

	return itemData
		.filter(item => {
			const itemTags = Array.apply([], item.filterTags
				.map($tag => $tag.slug));

			// eslint-disable-next-line
			return activeFilters.every(filter => {
				if (filter.filterType === FILTER_TYPES_UNSET.AND) {
					// for AND filers, all tags must be present
					return filter.filterSlug.every(filterTag => itemTags.includes(filterTag));
				} else if (filter.filterType === FILTER_TYPES_UNSET.OR) {
					// for OR filers, any one tag must be present
					return filter.filterSlug.some(filterTag => itemTags.includes(filterTag));
				}
			})
		})
		.sort(sortFunction);
};

export const getitemTitle = (gameData, i) => {
	return gameData[i.itemCardIndex].name;
};

export const getitemSummary = (gameData, i) => {
	return gameData[i.itemCardIndex].summary;
};

export const getitemCoverUrl = (gameData, i) => {
	return gameData[i.itemCardIndex].cover.url;
};

export const getitemRating = (gameData, i) => {
	return gameData[i.itemCardIndex].total_rating;
};

export const getitemGenres = (gameData, i) => {
	return gameData[i.itemCardIndex].genres;
};

export const getitemPlatforms = (gameData, i) => {
	return gameData[i.itemCardIndex].platforms;
};