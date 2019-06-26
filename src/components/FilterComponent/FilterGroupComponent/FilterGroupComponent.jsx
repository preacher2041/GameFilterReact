import React from 'react';

import {Typography} from '@material-ui/core';
import {ExpansionPanel} from '@material-ui/core';
import {ExpansionPanelSummary} from '@material-ui/core';
import {ExpansionPanelDetails} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';

import FilterButton from '../FilterButtonComponent/FilterButtonComponent';

import styles from './FilterGroupComponent.module.css';

const FilterGroupComponent = ({filterGroupSlug, filterGroupLabel, filterGroupType, filterLabels, filterGroupKey}) => {

	return(
		<ExpansionPanel>
			<ExpansionPanelSummary
				expandIcon={<ExpandMore />}
				aria-controls={filterGroupSlug}
				id={filterGroupLabel}
			>
				<Typography>{filterGroupLabel}</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<div className={styles.root}>
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
				</div>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)
};

export default FilterGroupComponent;