import React from 'react';
import Grid from '@material-ui/core/Grid';

function gameCard(props) {

	return(
		<Grid item xs={3}>
			<div>
				<p>{props.gameName}</p>
				<p>{props.gamePlatform}</p>
				<p>{props.gamePrice}</p>
				<ul>
				{props.gameGenres.map((genre, i) => {
					return (
						<li key={i}>{genre}</li>
					)
				})}
				</ul>
			</div>
		</Grid>
	)
}

export default gameCard;