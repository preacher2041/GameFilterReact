import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterComponent from './FilterComponent/FilterComponent';
import TopBar from './TopBarComponent/TopBar';
import GameCardsContainer from './GameCardsComponent/GameCardsContainer';

function GamesFilter() {
	return (
		<div>
			<TopBar color='primary' />
			<Grid container spacing={1}>
				<FilterComponent/>
				<GameCardsContainer/>
			</Grid>
		</div>
	)
}

export default GamesFilter;