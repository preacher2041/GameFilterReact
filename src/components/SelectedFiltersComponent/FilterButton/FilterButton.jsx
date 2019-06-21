import React from 'react';
import {connect} from 'react-redux';
import Chip from '@material-ui/core/Chip'
import {unsetSelectedFilterData, toggleFilterState} from '../../store/actions';
import styles from './FilterButton.module.css';

function FilterButton({filterLabel, filterIndex, filterGroupIndex, filterButtonIndex, unsetSelectedFilterData, toggleFilterState}) {
	const handleClick = (clickedIndex) => {
		unsetSelectedFilterData(clickedIndex);
		toggleFilterState(filterGroupIndex, filterButtonIndex);
	};

	return (
		<Chip
			className={styles.root}
			onDelete={() => handleClick(filterIndex)}
			label={filterLabel}
		/>
	)
}

const mapDispatchToProps = dispatch => ({
	unsetSelectedFilterData: (filterIndex) => dispatch(unsetSelectedFilterData(filterIndex)),
	toggleFilterState: (filterGroupIndex, filterButtonIndex) => dispatch(toggleFilterState(filterGroupIndex, filterButtonIndex))
});

export default connect(null, mapDispatchToProps)(FilterButton);