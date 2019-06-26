import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Grid} from '@material-ui/core';

import {ItemCardComponent} from './ItemCardComponent/ItemCardComponent';
import {ItemCardPlaceholderComponent} from './ItemCardPlaceholderComponent/ItemCardPlaceholderComponent';
import {fetchGameData} from './store/actions';
import {filterData} from '../../config/rootReducer';

import styles from './FilterResultsComponent.module.css';

const FilterResultsComponent = ({fetchGameData, gameData, gameDataIsLoading}) => {
	useEffect(() => {
		fetchGameData();
		// eslint-disable-next-line
	}, []);

	console.log(gameData);

	if (gameDataIsLoading === false) {
		return (
			<Grid item xs={9} className={styles.root}>
				<Grid container spacing={16}>
					{gameData.map((item, i) => {
						return (
							<ItemCardComponent
								key={i}
								itemCardIndex={i}
								itemCardTitle={item.name}
								itemCardSummary={item.summary}
								itemCardCoverUrl={item.cover.url}
								itemCardRating={item.total_rating}
								itemCardGenres={item.genres}
								itemCardPlatforms={item.platforms}
							/>
						)
					})}
				</Grid>
			</Grid>
		)
	} else {
		return(
			<ItemCardPlaceholderComponent />
		)
	}
};

const mapStateToProps = state => ({
	gameData: filterData(state),
	gameDataIsLoading: state.ItemsComponent.gameDataIsLoading
});

const mapDispatchToProps = dispatch => ({
	fetchGameData: () => dispatch(fetchGameData())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterResultsComponent);