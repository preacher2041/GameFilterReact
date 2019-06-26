import React from 'react';
import {connect} from 'react-redux';

import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

import SortSelect from './SortSelectComponent/SortSelectComponent';
import SelectedFilters from './SelectedFiltersComponent/SelectedFiltersComponent';
import { toggleFilterDrawerState } from '../FilterComponent/store/actions';

import styles from './AppBarComponent.module.css';

const AppBarComponent = ({filterDrawerState, toggleFilterDrawerState}) => {

	const handleDrawerOpen = () => {
		toggleFilterDrawerState(filterDrawerState)
	};

	return (
		<div>
			<AppBar
				position='fixed'
				className={filterDrawerState ? styles.appBarShift : styles.appBar}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={filterDrawerState ? styles.hide : styles.menuButton}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap className={styles.h6}>
						Game Filter
					</Typography>
					<SelectedFilters/>
					<SortSelect/>
				</Toolbar>
			</AppBar>
		</div>
	)
};

const mapStateToProps = state => ({
	filterDrawerState: state.FiltersComponent.filterDrawerState,
});

const mapDispatchToProps = dispatch => ({
	toggleFilterDrawerState: (filterDrawerState) => dispatch(toggleFilterDrawerState(filterDrawerState))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);
