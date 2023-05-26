import styles from './appLayout.module.css';
import PropTypes from 'prop-types';

export const AppLayout = ({
	field,
	setField,
	move,
	setMove,
	checkTheWinner,
	checkTheField,
}) => {
	const updateField = ({ number }) => {
		return field.map((element) => {
			if (element.number === number && element.value === '') {
				element.value = move;
				setMove((move = move === 'cross' ? 'zero' : 'cross'));
			}
			return element;
		});
	};

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
							onClick={() => {
								setField(updateField(item));
								checkTheWinner();
								checkTheField();
							}}
						></div>
					);
				})}
			</div>
		</>
	);
};

AppLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	move: PropTypes.string,
	setMove: PropTypes.func,
	checkTheWinner: PropTypes.func,
	checkTheField: PropTypes.func,
};
