import React, {useState} from 'react';

import FilterGroup from './FilterGroup/FilterGroup';

function newComponent() {
	const root = document.getElementById('app');
	const appData = JSON.parse(root.dataset.filters);

	const [filterData] = useState(appData);
	const [selectedFilters, setSelectedFilters] = useState([]);

	const handleClick = (event) => {
		const targetElement = event.target;
		const filterLabel = targetElement.dataset.filterlabel;
		const filterLabelArray = Array.apply([], selectedFilters);

		if (!filterLabelArray.includes(filterLabel)) {
			filterLabelArray.push(filterLabel);
		} else {
			const index = filterLabelArray.indexOf(filterLabel);
			filterLabelArray.splice(index, 1);
		}

		setSelectedFilters(filterLabelArray);
	};


	return (
		<React.Fragment>
			<ul>
				{selectedFilters.map((label, i) => {
					return(
						<li
							key={i}
						>
							{label}
						</li>
					)
				})}
			</ul>
			{filterData.filterGroups.map((obj, i) => {
				return(

					<FilterGroup key={i}
								 filterGroupName={obj.filterGroupName}
								 filterGroupType={obj.filterGroupType}
								 filterLabels={obj.filterLabels}
								 clickHandler={handleClick}
					/>
				)
			})}
		</React.Fragment>
	)
}

export default newComponent;