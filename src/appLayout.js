import styles from './appLayout.module.css';
import PropTypes from 'prop-types';
import { store } from './redux/store';
import { updateField } from './redux/actions';

export const AppLayout = ({ state, checkTheWinner, checkTheField }) => {
	const chooseIcon = () => {
		return state.move === 'cross' ? styles.crossImg : styles.zeroImg;
	};

	const chooseStyle = (item) => {
		if (item.value === 'cross') {
			return styles.cross;
		} else if (item.value === 'zero') {
			return styles.zero;
		}
		return '';
	};

	const onClick = (number) => {
		store.dispatch(updateField(number));
		checkTheWinner();
		checkTheField();
	};

	return (
		<>
			<h1>
				It's <div className={chooseIcon()}></div> turn
			</h1>

			<div className={styles.table}>
				{state.field.map((item) => {
					return (
						<div
							className={`${styles.element} ${chooseStyle(item)}`}
							key={Math.random()}
							onClick={() => onClick(item.number)}
						></div>
					);
				})}
			</div>
		</>
	);
};

AppLayout.propTypes = {
	state: PropTypes.object,
	checkTheWinner: PropTypes.func,
	checkTheField: PropTypes.func,
};
