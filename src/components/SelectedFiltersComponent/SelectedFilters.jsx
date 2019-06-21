import React from 'react';
import { connect } from 'react-redux';
import FilterButton from './FilterButton/FilterButton';

function SelectedFilters({selectedFilterData}) {
	return (
		<React.Fragment>
			{selectedFilterData ? (
				selectedFilterData.map((filter, i) => {
					return (
						<FilterButton
							key={i}
							filterIndex={i}
							filterLabel={filter.filterLabel}
							filterGroupIndex={filter.filterGroupIndex}
							filterButtonIndex={filter.filterButtonIndex}
						/>
					)}
				)
			) : (
				<div></div>
			)}
		</React.Fragment>
	)
}

const mapStateToProps = state => ({
	selectedFilterData: state.GameFiltersComponent.selectedFilterData
});

export default connect(mapStateToProps)(SelectedFilters);