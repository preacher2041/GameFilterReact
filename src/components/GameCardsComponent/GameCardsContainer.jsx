import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Grid } from '@material-ui/core';

import {fetchGameData} from '../store/actions';
import {filterData} from '../store/reducer';
import GameCard from './GameCard/GameCard';

function GameCardsContainer({fetchGameData, gameData, isLoading}) {
	useEffect(() => {
		fetchGameData();
		// eslint-disable-next-line
	}, []);

	if (isLoading === false) {
		return (
			<Grid item xs={9}>
				<Grid container spacing={2}>
					{gameData.map((item, i) => {
						return (
							<GameCard
								key={i}
								gameCardName={item.name}
								gameCardCover={item.cover}
								gameCardPlatforms={item.platforms}
								gameCardRating={item.total_rating}
								gameCardSummary={item.summary}
							/>
						)
					})}
				</Grid>
			</Grid>
		)
	} else {
		return(
			<div>Loading...</div>
		)
	}
}

const mapStateToProps = state => ({
	gameData: filterData(state.GameFiltersComponent.gameData, state.GameFiltersComponent.selectedFilterData, state.GameFiltersComponent.sortValue),
	isLoading: state.GameFiltersComponent.loadingData
});

const mapDispatchToProps = dispatch => ({
	fetchGameData: () => dispatch(fetchGameData())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameCardsContainer);