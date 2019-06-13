import React from 'react';
import {connect} from 'react-redux';
import styles from './FilterButton.module.css';
import {toggleFilterState, setSelectedFilter} from '../store/actions';

function FilterButton({filterKey, filterButtonKey, filterLabel, filterState, filterGroupKey, toggleFilterState, setSelectedFilter}) {
	const onFilterButtonClicked = (event) => {
		const filterGroupIndex = event.target.dataset.filtergroupindex;
		const filterButtonIndex = event.target.dataset.filterbuttonindex;
		toggleFilterState(filterGroupIndex, filterButtonIndex);
		setSelectedFilter(filterLabel);
	};

	const setStyles = () => {
		if (filterState) {
			return styles.active;
		} else {
			return styles.inactive;
		}
	};

	return (
		<button
			key={filterKey}
			className={setStyles()}
			data-filtergroupindex={filterGroupKey}
			data-filterbuttonindex={filterButtonKey}
			onClick={onFilterButtonClicked}
		>
			{filterLabel}
		</button>
	)
}

const mapDispatchToProps = dispatch => ({
	toggleFilterState: (filterGroupIndex, filterButtonIndex) => dispatch(toggleFilterState(filterGroupIndex, filterButtonIndex)),
	setSelectedFilter: (filterLabel) => dispatch(setSelectedFilter(filterLabel))
});

export default connect(null, mapDispatchToProps)(FilterButton);