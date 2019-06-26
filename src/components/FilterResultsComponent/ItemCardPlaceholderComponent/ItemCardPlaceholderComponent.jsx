import React from 'react';

import styles from './ItemCardPlaceholderComponent.module.css';

import { Grid, Paper } from '@material-ui/core';

export const ItemCardPlaceholderComponent = () => {
	return (
		<Grid item xs={12} lg={4} className={styles.timelineWrapper}>
			<Paper className={styles.timelineItem}>
				<div className={styles.animatedBackground}>
					<div className={styles.headerTop} />
					<div className={styles.headerTopSubItemRight} />
					<div className={styles.headerTopSubItemLeft} />
					<div className={styles.headerRight} />
					<div className={styles.headerBottom} />
					<div className={styles.headerLeft} />
					<div className={styles.contentTop} />
					<div className={styles.contentSecondLine} />
					<div className={styles.contentThirdLine} />
					<div className={styles.contentBottom} />
					<div className={styles.filterGroupTop} />
					<div className={styles.filterSpacerOne} />
					<div className={styles.filterSpaceTwo} />
					<div className={styles.filterSpacerThree} />
					<div className={styles.filterGroupSeparator} />
					<div className={styles.platformTop} />
					<div className={styles.platformEnd} />
				</div>
			</Paper>
		</Grid>
	)
};