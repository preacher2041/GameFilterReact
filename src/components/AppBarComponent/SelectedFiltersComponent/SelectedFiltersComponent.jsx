import React from 'react';
import {connect} from 'react-redux';

import SelectedFiltersChip from '../SelectedFilterChipComponent/SelectedFilterChipComponent';

const SelectedFilters = ({selectedFilterData}) => {
	return (
		<React.Fragment>
			{selectedFilterData ? (
				selectedFilterData.map((filter, i) => {
					return (
						<SelectedFiltersChip
							key={i}
							filterIndex={i}
							filterLabel={filter.filterLabel}
							filterGroupIndex={filter.filterGroupIndex}
							SelectedFiltersChipIndex={filter.filterButtonIndex}
						/>
					)}
				)
			) : (
				<div></div>
			)}
		</React.Fragment>
	)
};

const mapStateToProps = state => ({
	selectedFilterData: state.SelectedFiltersComponent.selectedFilterData
});

export default connect(mapStateToProps)(SelectedFilters);