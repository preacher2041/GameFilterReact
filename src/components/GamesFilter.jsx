import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';

import SelectedFilters from './SelectedFiltersComponent/SelectedFiltersComponent';
import FilterGroup from './FilterComponent/FilterGroup/FilterGroup';
import GameCard from './GamesListComponent/GameCard/GameCardComponent';

function gamesFilter() {
	const root = document.getElementById('app');
	const appFilterData = JSON.parse(root.dataset.filters);
	const appGameData = JSON.parse(root.dataset.games);

	const [filterData] = useState(appFilterData);
	const [gameData] = useState(appGameData);
	const [selectedFilters, setSelectedFilters] = useState([]);

	console.log('App Filter Data: ', appFilterData);

	const handleClick = (event) => {
		const targetElement = event.target;
		const filterLabel = targetElement.dataset.filterlabel;
		const filterLabelArray = Array.apply([], selectedFilters);

		if (!filterLabelArray.includes(filterLabel)) {
			filterLabelArray.push(filterLabel);
		} else {
			const index = filterLabelArray.indexOf(filterLabel);
			filterLabelArray.splice(index, 1);
		}

		setSelectedFilters(filterLabelArray);
	};

	const handleClickSelectedFilter = (event) => {
		const clickedElement = event.target;
		const clickedElementFilter = clickedElement.dataset.label;
		const filterLabelArray = Array.apply([], selectedFilters);

		const index = filterLabelArray.indexOf(clickedElementFilter);
		filterLabelArray.splice(index, 1);

		setSelectedFilters(filterLabelArray);
	};


	return (
		<div>
			<Grid container spacing={8}>
				<Grid item xs={12}>
					<SelectedFilters
						selectedFilters={selectedFilters}
						handleClick={handleClickSelectedFilter}
					/>
				</Grid>
				<Grid item xs={3}>
					{filterData.filterGroups.map((obj, i) => {
						return(

							<FilterGroup key={i}
										 filterGroupName={obj.filterGroupName}
										 filterGroupType={obj.filterGroupType}
										 filterLabels={obj.filterLabels}
										 clickHandler={handleClick}
							/>
						)
					})}
				</Grid>
				<Grid item xs={9}>
					<Grid container spacing={8} >
						{gameData.gamesList.map((obj, i) => {
							return(
								<GameCard
									key={i}
									gameName={obj.gameName}
									gamePlatform={obj.gamePlatform}
									gameGenres={obj.gameGenres}
									gamePrice={obj.gamePrice}
								/>
							)
						})}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default gamesFilter;