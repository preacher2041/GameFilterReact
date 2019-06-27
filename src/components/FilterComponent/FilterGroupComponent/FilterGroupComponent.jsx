import React from 'react';

import {Divider, List, ListSubheader} from '@material-ui/core';

import FilterButton from '../FilterButtonComponent/FilterButtonComponent';

import styles from './FilterGroupComponent.module.css'

const FilterGroupComponent = ({filterGroupSlug, filterGroupLabel, filterGroupType, filterLabels, filterGroupKey}) => {

	return(
		<React.Fragment>
			<List subheader={<ListSubheader>{filterGroupLabel}</ListSubheader>} className={styles.root}>
				{filterLabels.map((label, i) => {
					return (
						<FilterButton
							key={i}
							filterLabel={label.label}
							filterSlug={label.slug}
							filterState={label.isActive}
							filterGroupKey={filterGroupKey}
							filterGroupType={filterGroupType}
							filterGroupCategory={filterGroupSlug}
							filterButtonKey={i}
						/>
					)
				})}
			</List>
			<Divider />
		</React.Fragment>
	)
};

export default FilterGroupComponent;