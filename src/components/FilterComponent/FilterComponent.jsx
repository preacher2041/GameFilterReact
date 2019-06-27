import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import { Drawer, IconButton } from '@material-ui/core';
import {ChevronLeft} from '@material-ui/icons';

import FilterGroup from './FilterGroupComponent/FilterGroupComponent';
import { fetchFilterData, toggleFilterDrawerState } from './store/actions';

import styles from './FilterComponent.module.css';

const FilterComponent = ({fetchFilterData, filterData, filterDrawerState, toggleFilterDrawerState}) => {
	useEffect(() => {
		fetchFilterData();
		// eslint-disable-next-line
	}, []);

	const handleDrawerClose = () => {
		toggleFilterDrawerState(filterDrawerState);
	};

	return (
		<Drawer
			variant="persistent"
			anchor="left"
			open={filterDrawerState}
			className={styles.drawer}
			classes={{
				paper: styles.drawerPaper,
			}}
		>
			<div className={styles.drawerHeader}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeft />
				</IconButton>
			</div>
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
		</Drawer>
	)
};

const mapStateToProps = state => ({
	filterData: state.FiltersComponent.filterData,
	filterDataIsLoading: state.FiltersComponent.filterDataIsLoading,
	filterDrawerState: state.FiltersComponent.filterDrawerState
});

const mapDispatchToProps = dispatch => ({
	fetchFilterData: () => dispatch(fetchFilterData()),
	toggleFilterDrawerState: (filterDrawerState) => dispatch(toggleFilterDrawerState(filterDrawerState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);