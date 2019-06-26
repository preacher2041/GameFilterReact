import { combineReducers } from 'redux';
import {FiltersComponentReducer} from '../components/FilterComponent/store/reducer';
import {ItemsComponentReducer} from '../components/FilterResultsComponent/store/reducer';
import {SelectedFiltersComponentReducer} from '../components/AppBarComponent/store/reducer';

// Combine the multiple component reducers into one root reducer that returns the application state
export default combineReducers({
	FiltersComponent: FiltersComponentReducer,
	ItemsComponent: ItemsComponentReducer,
	SelectedFiltersComponent: SelectedFiltersComponentReducer
});


// Selector for the FilterResultsComponent, takes the selectedFilters, sort, and data states and returns a new filtered data array
export const filterData = (state) => {
	// Define sort methods for use in the sort function further down the method
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
	// Define sort function using methods defined above
	const sortFunction  = SORT_METHOD[state.SelectedFiltersComponent.sortValue] || SORT_METHOD.NONE; // Get sort value from state and use it to define which sort method to run

	// Create a Selected filters array.
	const selectedFilters = state.SelectedFiltersComponent.selectedFilterData.reduce((filterRules, filterItem) => {
		//Define the different filter properties
		const filterType = filterItem.filterType;
		const filterCategory = filterItem.filterCategory;
		const filterSlug = filterItem.filterSlug;


		let rule = filterRules
			.find(rule => rule.filterCategory === filterCategory); // Check to see if current filter rule exists


		if(!rule) { // if rule doesn't exist then create it
			rule = {
				filterType,
				filterCategory,
				filterSlug: []
			};

			filterRules.push(rule); // add new filter rule to filterRules array
		}

		rule.filterSlug.push(filterSlug); // create single array that contains all selected filter slugs for a particular filter category

		return filterRules; // return filterRules array
	}, []);

	return state.ItemsComponent.gameData // filter gameData
		.filter(item => {
			const itemTags = Array.apply([], item.filterTags
				.map($tag => $tag.slug)); // for each item create an array of all the tags that this item can be filtered by

			// eslint-disable-next-line
			return selectedFilters.every(filter => { // check against every item in the selected filters array
				if (filter.filterType === 'and-filter') {
					return filter.filterSlug.every(filterTag => itemTags.includes(filterTag)); // for the 'and-filter' type check return item only if all 'and-filter' slug is matched with a corresponding filter tag
				} else if (filter.filterType === 'or-filter') {
					return filter.filterSlug.some(filterTag => itemTags.includes(filterTag)); // for the 'or-filter' type check return item only if at least one 'or-filter' slug is matched with a corresponding filter tag
				}
			})
		})
		.sort(sortFunction); // Sort filtered result using sort function and methods outlined above.
};