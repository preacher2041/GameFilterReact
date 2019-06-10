import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchFilterData } from '../store/actions';

import FilterGroup from './FilterGroup/FilterGroup';

const FilterComponent = (props) => {

	useEffect(() => {
		props.fetchFilterData();
		// eslint-disable-next-line
	}, []);

	if (props.loadingData === false) {

		return (
			<div>
			{props.filterData.map((group, i) => {

					return (
						<FilterGroup
							key={i}
							filterGroupName={group.filterGroupName}
							filterGroupType={group.filterGroupType}
							filterLabels={group.filterLabels}
						/>
					)
				})
			}
			</div>
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