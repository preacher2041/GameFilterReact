import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

function filterGroup({filterGroupName, filterGroupType, filterLabels, filterGroupKey}) {

	return(
		<div>
			<p>Filter Group Name: {filterGroupName}</p>
			<p>Filter Group Type: {filterGroupType}</p>

			{filterLabels.map((label, i) => {
				return (
					<FilterButton
						key={i}
						filterLabel={label.label}
						filterState={label.isActive}
						filterGroupKey={filterGroupKey}
						filterButtonKey={i}
					/>
				)
			})}
		</div>
	)
}

export default filterGroup;