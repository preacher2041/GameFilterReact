import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import styles from './SortSelect.module.css';
import {setSortValue} from '../../store/actions';

function SortSelect({setSortValue}) {
	const [sortSelectValue, setSortSelectValue] = useState('');

	const handleChange = (event) => {
		const sortValue = event.target.value;
		setSortSelectValue(sortValue);
		setSortValue(sortValue);
	};

	return (
		<form className={styles.root} autoComplete="off">
			<FormControl variant='outlined' className={styles.formControl}>
				<InputLabel htmlFor="outlined-age-simple">
					Sort by
				</InputLabel>
				<Select
					value={sortSelectValue}
					onChange={handleChange}
					input={<OutlinedInput labelWidth={120} name="age" id="outlined-age-simple" />}
				>
					<MenuItem value={'default'}>
						<em>Default</em>
					</MenuItem>
					<MenuItem value={'titleAsc'}>Title Ascending</MenuItem>
					<MenuItem value={'titleDesc'}>Title Descending</MenuItem>
					<MenuItem value={'ratingAsc'}>Rating Ascending</MenuItem>
					<MenuItem value={'ratingDesc'}>Rating Descending</MenuItem>
				</Select>
			</FormControl>
		</form>
	)
}

const mapDispatchToProps = dispatch => ({
	setSortValue: (sortValue) => dispatch(setSortValue(sortValue))
});

export default connect(null, mapDispatchToProps)(SortSelect);