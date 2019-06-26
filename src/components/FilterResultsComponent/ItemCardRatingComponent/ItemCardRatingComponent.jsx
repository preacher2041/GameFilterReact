import React from 'react';

import {Avatar} from '@material-ui/core';

import styles from './ItemCardRatingComponent.module.css'

export const ItemCardRatingComponent = ({itemCardRating}) => {

	if (itemCardRating < 101 && itemCardRating > 90) {
		return (
			<Avatar className={styles.ten}>
				10
			</Avatar>
		);
	} else if (itemCardRating < 91 && itemCardRating > 80) {
		return (
			<Avatar className={styles.nine}>
				9
			</Avatar>
		);
	} else if (itemCardRating < 81 && itemCardRating > 70) {
		return (
			<Avatar className={styles.eight}>
				8
			</Avatar>
		);
	} else if (itemCardRating < 71 && itemCardRating > 60) {
		return (
			<Avatar className={styles.seven}>
				7
			</Avatar>
		);
	} else if (itemCardRating < 61 && itemCardRating > 50) {
		return (
			<Avatar className={styles.six}>
				6
			</Avatar>
		);
	} else if (itemCardRating < 51 && itemCardRating > 40) {
		return (
			<Avatar className={styles.five}>
				5
			</Avatar>
		);
	} else if (itemCardRating < 41 && itemCardRating > 30) {
		return (
			<Avatar className={styles.four}>
				4
			</Avatar>
		);
	} else if (itemCardRating < 31 && itemCardRating > 20) {
		return (
			<Avatar className={styles.three}>
				3
			</Avatar>
		);
	} else if (itemCardRating < 21 && itemCardRating > 10) {
		return (
			<Avatar className={styles.two}>
				2
			</Avatar>
		);
	} else if (itemCardRating < 11 && itemCardRating > 0) {
		return (
			<Avatar className={styles.one}>
				1
			</Avatar>
		);
	} else {
		return (
			<Avatar className={styles.default}>
				NA
			</Avatar>
		);
	}
};