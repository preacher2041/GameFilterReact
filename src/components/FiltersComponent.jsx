import React from 'react';
import Grid from '@material-ui/core/Grid';

import FilterComponent from './FilterComponent/FilterComponent';
import {AppBarComponent} from './AppBarComponent/AppBarComponent';
import GameCardsContainer from './FilterResultsComponent/FilterResultsComponent';

const FiltersComponent = () => {
	return (
		<div>
			<AppBarComponent color='primary' />
			<Grid container spacing={8}>
					<FilterComponent/>
					<GameCardsContainer/>
			</Grid>
		</div>
	)
};

export default FiltersComponent;