import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Grid} from '@material-ui/core';

import {ItemCardComponent} from './ItemCardComponent/ItemCardComponent';
import {ItemCardPlaceholderComponent} from './ItemCardPlaceholderComponent/ItemCardPlaceholderComponent';
import {fetchGameData} from './store/actions';
import {filterData} from '../../config/rootReducer';

import styles from './FilterResultsComponent.module.css';

const FilterResultsComponent = ({fetchGameData, gameData, gameDataIsLoading, filterDrawerState}) => {
	useEffect(() => {
		fetchGameData();
		// eslint-disable-next-line
	}, []);

	if (gameDataIsLoading === false) {
		return (
			<Grid item xs={12} className={filterDrawerState ? styles.contentShift : styles.content}>
				<Grid container spacing={2}>
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
		return (
			<Grid item xs={12} className={styles.root}>
				<Grid container spacing={2}>
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
					<ItemCardPlaceholderComponent />
				</Grid>
			</Grid>
		)
	}
};

const mapStateToProps = state => ({
	gameData: filterData(state),
	gameDataIsLoading: state.ItemsComponent.gameDataIsLoading,
	filterDrawerState: state.FiltersComponent.filterDrawerState
});

const mapDispatchToProps = dispatch => ({
	fetchGameData: () => dispatch(fetchGameData())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterResultsComponent);