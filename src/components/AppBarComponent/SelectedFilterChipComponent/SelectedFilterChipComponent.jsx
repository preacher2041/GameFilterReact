import React from 'react';
import {connect} from 'react-redux';

import {Chip} from '@material-ui/core';

import {unsetSelectedFilterData} from './../store/actions';
import {toggleFilterState} from '../../FilterComponent/store/actions';

import styles from './SelectedFiltersChipComponent.module.css';

const SelectedFiltersChip = ({filterLabel, filterIndex, filterGroupIndex, SelectedFiltersChipIndex, unsetSelectedFilterData, toggleFilterState}) => {
	const handleClick = (clickedIndex) => {
		unsetSelectedFilterData(clickedIndex);
		toggleFilterState(filterGroupIndex, SelectedFiltersChipIndex);
	};

	return (
		<Chip
			className={styles.root}
			onDelete={() => handleClick(filterIndex)}
			label={filterLabel}
		/>
	)
};

const mapDispatchToProps = dispatch => ({
	unsetSelectedFilterData: (filterIndex) => dispatch(unsetSelectedFilterData(filterIndex)),
	toggleFilterState: (filterGroupIndex, SelectedFiltersChipIndex) => dispatch(toggleFilterState(filterGroupIndex, SelectedFiltersChipIndex))
});

export default connect(null, mapDispatchToProps)(SelectedFiltersChip);