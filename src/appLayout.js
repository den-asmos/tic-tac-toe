import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from './redux/actions';
import { selectField, selectMove } from './redux/selectors';
import styles from './appLayout.module.css';

export const AppLayout = ({ checkTheWinner, checkTheField }) => {
	const field = useSelector(selectField);
	const move = useSelector(selectMove);

	const dispatch = useDispatch();

	const chooseIcon = () => {
		return move === 'cross' ? styles.crossImg : styles.zeroImg;
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
		dispatch(updateField(number));
		checkTheWinner();
		checkTheField();
	};

	return (
		<>
			<h1>
				It's <div className={chooseIcon()}></div> turn
			</h1>

			<div className={styles.table}>
				{field.map((item) => {
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
	checkTheWinner: PropTypes.func,
	checkTheField: PropTypes.func,
};
