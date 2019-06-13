import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterComponent from './FilterComponent/FilterComponent';

function GamesFilter() {
	return (
		<div>
			<Grid container spacing={8}>
				<FilterComponent/>
			</Grid>
		</div>
	)
}

export default GamesFilter;