import React from 'react';
import {Typography} from '@material-ui/core';
import FilterButton from '../FilterButton/FilterButton';
import styles from './FilterGroup.module.css';

function filterGroup({filterGroupName, filterGroupType, filterLabels, filterGroupKey}) {

	return(
		<div className={styles.root}>
			<Typography gutterBottom variant='h6'>Filter Group Name:
				<Typography variant='subtitle1'>{filterGroupName}</Typography>
			</Typography>
			<Typography gutterBottom variant="h6">Filter Group Type:
				<Typography variant='subtitle1'>{filterGroupType}</Typography>
			</Typography>

			{filterLabels.map((label, i) => {
				return (
					<FilterButton
						key={i}
						filterLabel={label.label}
						filterSlug={label.slug}
						filterState={label.isActive}
						filterGroupKey={filterGroupKey}
						filterGroupType={filterGroupType}
						filterGroupCategory={filterGroupName}
						filterButtonKey={i}
					/>
				)
			})}
		</div>
	)
}

export default filterGroup;