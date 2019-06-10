import React, {useState} from 'react';
import styles from './FilterButton.module.css';



function FilterButton(props) {
	const [buttonState, setButtonState] = useState(styles.inactive);

	const clickHandler = (event) => {
		if (buttonState === styles.active) {
			setButtonState(styles.inactive);
		} else {
			setButtonState(styles.active);
		}

		props.clickHandler(event);
	};

	return(
		<button
			key={props.filterKey}
			className={buttonState}
			onClick={clickHandler}
			data-filterlabel={props.filterLabel}
		>
			{props.filterLabel}
		</button>
	)

}

export default FilterButton;