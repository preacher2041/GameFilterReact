import React from 'react';
import {Grid} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {ButtonBase} from '@material-ui/core';

import styles from './GameCard.module.css';


function GameCard({gameCardName, gameCardCover, gameCardPlatforms, gameCardRating}) {
	return (
		<Grid item xs={4}>
			<div className={styles.root}>
				<Paper className={styles.paper}>
					<Grid container spacing={1}>
						<Grid item>
							<ButtonBase className={styles.image}>
								<img className={styles.img} alt="complex" src={gameCardCover.url} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={1}>
								<Grid item xs>
									<Typography gutterBottom variant="subtitle1">
										{gameCardName}
									</Typography>
								</Grid>
								<Grid item>
									{gameCardPlatforms.map((platform, i) => {
										if (platform.slug === 'ps4--1' || platform.slug === 'ps3' || platform.slug === 'psvita') {
											return (
												<Typography key={i} variant="body2" style={{ cursor: 'pointer' }}>
													{platform.name}
												</Typography>
											)
										} else {
											return null;
										}
									})}
								</Grid>
							</Grid>
							<Grid item>
								<Typography variant="subtitle1">
									{gameCardRating === 0 ? 'Unrated' : gameCardRating }
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
		</Grid>
	)
}

export default GameCard;