import React from 'react';

import {Chip} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {ButtonBase} from '@material-ui/core';

import {ItemCardRatingComponent} from '../ItemCardRatingComponent/ItemCardRatingComponent';

import styles from './ItemCardComponent.module.css';


export const ItemCardComponent = ({itemCardIndex, itemCardTitle, itemCardSummary, itemCardCoverUrl, itemCardRating, itemCardGenres, itemCardPlatforms}) => {
	console.log(itemCardIndex);

	return (
		<Grid item xs={4}>
			<div className={styles.root}>
				<Paper className={styles.paper}>
					<Grid container spacing={1}>
						<Grid item>
							<ButtonBase className={styles.image}>
								<img className={styles.img} alt='complex' src={itemCardCoverUrl} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction='column' spacing={1}>
								<Grid item xs>
									<Typography gutterBottom variant='subtitle1'>
										{itemCardTitle}
									</Typography>
								</Grid>
							</Grid>
							<Grid item>
								<ItemCardRatingComponent
									itemCardRating={itemCardRating}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Typography className={styles.summary}>
								{itemCardSummary}
							</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={12} className={styles.genresContainer}>
							{itemCardGenres.map((genre, i) => {
							return (
								<Chip key={i} label={genre.name} className={styles.genres}/>
							)
						})}
						</Grid>
					</Grid>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							{itemCardPlatforms.map((platform, i) => {
								if (platform.slug === 'ps4--1' || platform.slug === 'ps3' || platform.slug === 'psvita') {
									return (
										<Typography key={i} variant='subtitle2' component='p' className={styles.platform}>
											{platform.name}
										</Typography>
									)
								} else {
									return null;
								}
							})}
						</Grid>
					</Grid>
				</Paper>
			</div>
		</Grid>
	)
};