import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFilterData } from '../store/actions';
import FilterGroup from './FilterGroup/FilterGroup';
import Grid from '@material-ui/core/Grid';

const FilterComponent = ({fetchFilterData, isLoading, filterData}) => {

	useEffect(() => {
		fetchFilterData();
		// eslint-disable-next-line
	}, []);

	if (isLoading === false) {

		return (
			<Grid item xs={3}>
				{filterData.map((group, i) => {
					return (
						<FilterGroup
							key={i}
							filterGroupName={group.filterGroupName}
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
	filterData: state.GameFiltersComponent.filterData,
	isLoading: state.GameFiltersComponent.isLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchFilterData: () => dispatch(fetchFilterData())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);