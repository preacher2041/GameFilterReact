import React from 'react';

import FilterButton from '../FilterButton/FilterButton';

function filterGroup(props) {

	return(
		<div>
			<p>{props.filterGroupName}</p>
			<p>{props.filterGroupType}</p>

			{props.filterLabels.map((label, i) => {
				return (
					<FilterButton
						key={i}
						filterLabel={label}
						clickHandler={props.clickHandler}
					/>
				)
			})}
		</div>
	)
}

export default filterGroup;