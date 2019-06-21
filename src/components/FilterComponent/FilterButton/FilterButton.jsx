import React from 'react';
import {connect} from 'react-redux';
import styles from './FilterButton.module.css';
import Button from '@material-ui/core/Button';
import {toggleFilterState, setSelectedFilterData} from '../../store/actions';

function FilterButton({filterKey, filterButtonKey, filterLabel, filterSlug, filterState, filterGroupKey, filterGroupType, filterGroupCategory, toggleFilterState, setSelectedFilterData}) {
	const onFilterButtonClicked = (filterGroupIndex, filterButtonIndex) => {
		toggleFilterState(filterGroupIndex, filterButtonIndex);
		setSelectedFilterData(filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex);
	};

	if (filterState) {
		return (
			<Button
				key={filterKey}
				variant='contained'
				color='primary'
				className={styles.default}
				onClick={() => onFilterButtonClicked(filterGroupKey, filterButtonKey)}
			>
				{filterLabel}
			</Button>
		)
	} else {
		return (
			<Button
				key={filterKey}
				variant='outlined'
				color='primary'
				className={styles.default}
				onClick={() => onFilterButtonClicked(filterGroupKey, filterButtonKey)}
			>
				{filterLabel}
			</Button>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	toggleFilterState: (filterGroupIndex, filterButtonIndex) => dispatch(toggleFilterState(filterGroupIndex, filterButtonIndex)),
	setSelectedFilterData: (filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex) => dispatch(setSelectedFilterData(filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex)),
});

export default connect(null, mapDispatchToProps)(FilterButton);