import React from 'react';
import {connect} from 'react-redux';

import {ListItem, ListItemText, ListItemSecondaryAction, Switch} from '@material-ui/core';

import {setSelectedFilterData} from '../../AppBarComponent/store/actions';
import {toggleFilterState} from './../store/actions';

const FilterButtonComponent = ({filterLabel, filterSlug, filterState, filterGroupKey, filterGroupType, filterGroupCategory, filterButtonKey, toggleFilterState, setSelectedFilterData}) => {
	const onFilterSwitchChange = () => {
		toggleFilterState(filterGroupKey, filterButtonKey);
		setSelectedFilterData(filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupKey, filterButtonKey);
	};

	return (
		<ListItem>
			<ListItemText id={filterSlug} primary={filterLabel} />
			<ListItemSecondaryAction>
				<Switch
					edge="end"
					onChange={onFilterSwitchChange}
					checked={filterState}
					color='primary'
					inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	)
};

const mapDispatchToProps = dispatch => ({
	toggleFilterState: (filterGroupIndex, filterButtonIndex) => dispatch(toggleFilterState(filterGroupIndex, filterButtonIndex)),
	setSelectedFilterData: (filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex) => dispatch(setSelectedFilterData(filterSlug, filterLabel, filterGroupType, filterGroupCategory, filterGroupIndex, filterButtonIndex)),
});

export default connect(null, mapDispatchToProps)(FilterButtonComponent);