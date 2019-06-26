import React from 'react';

import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core';

import SortSelect from './SortSelectComponent/SortSelectComponent';
import SelectedFilters from './SelectedFiltersComponent/SelectedFiltersComponent';

import styles from './AppBarComponent.module.css';

export const AppBarComponent = () => {
	return (
		<div>
			<AppBar className={styles.root}>
				<Toolbar>
					<Typography variant="h6" className={styles.h6}>
						Game Finder
					</Typography>
					<SelectedFilters/>
					<SortSelect/>
				</Toolbar>
			</AppBar>
		</div>
	)
};
