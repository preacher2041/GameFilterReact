import React from 'react';

import Grid from '@material-ui/core/Grid';
import FilterComponent from './FilterComponent/FilterComponent';


// import SelectedFilters from './SelectedFiltersComponent/SelectedFiltersComponent';
// import FilterGroup from './FilterComponent/FilterGroup/FilterGroup';
// import GameCard from './GamesListComponent/GameCard/GameCardComponent';


function GamesFilter() {

	// const handleClick = (event) => {
	// 	const targetElement = event.target;
	// 	const filterLabel = targetElement.dataset.filterlabel;
	// 	const filterLabelArray = Array.apply([], selectedFilters);
	//
	// 	if (!filterLabelArray.includes(filterLabel)) {
	// 		filterLabelArray.push(filterLabel);
	// 	} else {
	// 		const index = filterLabelArray.indexOf(filterLabel);
	// 		filterLabelArray.splice(index, 1);
	// 	}
	//
	// 	setSelectedFilters(filterLabelArray);
	// };
	//
	// const handleClickSelectedFilter = (event) => {
	// 	const clickedElement = event.target;
	// 	const clickedElementFilter = clickedElement.dataset.label;
	// 	const filterLabelArray = Array.apply([], selectedFilters);
	//
	// 	const index = filterLabelArray.indexOf(clickedElementFilter);
	// 	filterLabelArray.splice(index, 1);
	//
	// 	setSelectedFilters(filterLabelArray);
	// };

	return (
		<div>
			<Grid container spacing={8}>
				{/*<Grid item xs={12}>*/}
				{/*	<SelectedFilters*/}
				{/*		selectedFilters={selectedFilters}*/}
				{/*		handleClick={handleClickSelectedFilter}*/}
				{/*	/>*/}
				{/*</Grid>*/}

				<Grid item xs={3}>
					<FilterComponent/>
				</Grid>
				{/*<Grid item xs={9}>*/}
				{/*	<Grid container spacing={8} >*/}
				{/*		{gameData.gamesList.map((obj, i) => {*/}
				{/*			return(*/}
				{/*				<GameCard*/}
				{/*					key={i}*/}
				{/*					gameName={obj.gameName}*/}
				{/*					gamePlatform={obj.gamePlatform}*/}
				{/*					gameGenres={obj.gameGenres}*/}
				{/*					gamePrice={obj.gamePrice}*/}
				{/*				/>*/}
				{/*			)*/}
				{/*		})}*/}
				{/*	</Grid>*/}
				{/*</Grid>*/}
			</Grid>
		</div>
	)
}

export default GamesFilter;