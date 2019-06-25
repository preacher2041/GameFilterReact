import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import {Grid} from '@material-ui/core';

import { fetchFilterData } from './store/actions';
import FilterGroup from './FilterGroupComponent/FilterGroupComponent';

import styles from './FilterComponent.module.css';

const FilterComponent = ({fetchFilterData, filterDataIsLoading, filterData}) => {

	useEffect(() => {
		fetchFilterData();
		// eslint-disable-next-line
	}, []);

	if (filterDataIsLoading === false) {

		return (
			<Grid item xs={3} className={styles.root}>
				{filterData.map((group, i) => {
					return (
						<FilterGroup
							key={i}
							filterGroupLabel={group.filterGroupLabel}
							filterGroupSlug={group.filterGroupSlug}
							filterGroupType={group.filterGroupType}
							filterLabels={group.filterLabels}
							filterSlugs={group.filterSlugs}
							filterGroupKey={i}
						/>
					)
				})}
			</Grid>
		)
	} else {
		return (
			<div>Loading...</div>
		)
	}
};

const mapStateToProps = state => ({
	filterData: state.FiltersComponent.filterData,
	filterDataIsLoading: state.FiltersComponent.filterDataIsLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchFilterData: () => dispatch(fetchFilterData())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);