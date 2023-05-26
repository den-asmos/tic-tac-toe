import styles from './endOfGame.module.css';
import PropTypes from 'prop-types';

export const EndOfGame = ({ winner, setWinner, field, setField, setFull }) => {
	return (
		<div>
			<h1>
				<div
					className={
						winner !== '' ? (winner === 'cross' ? styles.crossImg : styles.zeroImg) : ''
					}
				></div>
				{winner === '' ? 'The game ended in a draw' : 'wins!'}
			</h1>
			<button
				className={styles.btn}
				onClick={() => {
					setWinner('');
					setFull(false);
					setField(field.map((item, index) => ({ number: index + 1, value: '' })));
				}}
			>
				Start new game
			</button>
		</div>
	);
};

EndOfGame.propTypes = {
	winner: PropTypes.string,
	setWinner: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	setFull: PropTypes.func,
};
