import React from 'react';
import {connect} from 'react-redux';

import {ButtonBase} from '@material-ui/core';

import {setSelectedFilterData} from '../../AppBarComponent/store/actions';
import {toggleFilterState} from './../store/actions';

import styles from './FilterButtonComponent.module.css';

const FilterButtonComponent = ({filterKey, filterButtonKey, filterLabel, filterSlug, filterState, filterGroupKey, filterGroupType, filterGroupCategory, toggleFilterState, setSelectedFilterData}) => {
	const onFilterButtonClicked = (filterGroupIndex, filterButtonIndex) => {
		toggleFilterState(filterGroupIndex, filterButtonIndex);
		setSelectedFilterData(filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex);
	};

	if (filterState) {
		return (
			<ButtonBase
				focusRipple
				key={filterKey}
				variant='contained'
				color='primary'
				className={styles.default}
				onClick={() => onFilterButtonClicked(filterGroupKey, filterButtonKey)}
			>
				{filterLabel}
			</ButtonBase>
		)
	} else {
		return (
			<ButtonBase
				focusRipple
				key={filterKey}
				variant='outlined'
				color='primary'
				className={styles.default}
				onClick={() => onFilterButtonClicked(filterGroupKey, filterButtonKey)}
			>
				{filterLabel}
			</ButtonBase>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	toggleFilterState: (filterGroupIndex, filterButtonIndex) => dispatch(toggleFilterState(filterGroupIndex, filterButtonIndex)),
	setSelectedFilterData: (filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex) => dispatch(setSelectedFilterData(filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex)),
});

export default connect(null, mapDispatchToProps)(FilterButtonComponent);