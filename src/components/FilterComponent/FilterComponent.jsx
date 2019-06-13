import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFilterData } from './store/actions';
import FilterGroup from './FilterGroup/FilterGroup';
import Grid from '@material-ui/core/Grid';

const FilterComponent = ({fetchFilterData, loadingData, filterData}) => {

	useEffect(() => {
		fetchFilterData();
		// eslint-disable-next-line
	}, []);

	if (loadingData === false) {

		return (
			<Grid item xs={3}>
				{filterData.map((group, i) => {
					return (
						<FilterGroup
							key={i}
							filterGroupName={group.filterGroupName}
							filterGroupType={group.filterGroupType}
							filterLabels={group.filterLabels}
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
	filterData: state.filters.filterData,
	loadingData: state.filters.loadingData,
});

const mapDispatchToProps = dispatch => ({
	fetchFilterData: () => dispatch(fetchFilterData())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);