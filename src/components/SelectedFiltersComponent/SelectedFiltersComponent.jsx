import React from 'react';
import styles from './SelectedFilter.module.css';

function SelectedFilters(props) {

	return (
		<ul className={styles.default}>
			{props.selectedFilters.map((label, i) => {
				return(
					<li
						key={i}
						className={styles.filterItem}
						onClick={props.handleClick}
						data-label={label}
					>
						{label}
					</li>
				)
			})}
		</ul>
	)
}

export default SelectedFilters;
