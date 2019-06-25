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
	const SORT_METHOD = {
		'titleAsc': (resultA, resultB) => {
			if (resultA.name < resultB.name) {
				return -1;
			}

			if (resultA.name > resultB.name) {
				return 1;
			}

			return 0;
		},
		'titleDesc': (resultA, resultB) => {
			if (resultA.name > resultB.name) {
				return -1;
			}

			if (resultA.name < resultB.name) {
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

	const selectedFilters = selectedFilterData.reduce((filterRules, filterItem) => {
		const filterType = filterItem.filterType;
		const filterCategory = filterItem.filterCategory;
		const filterSlug = filterItem.filterSlug;

		let rule = filterRules
			.find(rule => rule.filterCategory === filterCategory);

		if(!rule) {
			rule = {
				filterType,
				filterCategory,
				filterSlug: []
			};

			filterRules.push(rule);
		}

		rule.filterSlug.push(filterSlug);

		return filterRules;
	}, []);

	return itemData
		.filter(item => {
			const itemTags = Array.apply([], item.filterTags
				.map($tag => $tag.slug));

			// eslint-disable-next-line
			return selectedFilters.every(filter => {
				if (filter.filterType === 'and-filter') {
					return filter.filterSlug.every(filterTag => itemTags.includes(filterTag));
				} else if (filter.filterType === 'or-filter') {
					return filter.filterSlug.some(filterTag => itemTags.includes(filterTag));
				}
			})
		})
		.sort(sortFunction);
};