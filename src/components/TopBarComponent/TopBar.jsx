import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SortSelect from './SortSelectComponent/SortSelect';
import styles from './TopBar.module.css';
import SelectedFilters from '../SelectedFiltersComponent/SelectedFilters';

function TopBar() {
	return (
		<div>
			<AppBar position='static' className={styles.root}>
				<ToolBar>
					<Typography variant="h6">
						Game Finder
					</Typography>
					<SortSelect/>
					<SelectedFilters/>
				</ToolBar>
			</AppBar>
		</div>
	)
}

export default TopBar;