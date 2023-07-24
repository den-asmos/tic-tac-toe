import styles from './endOfGame.module.css';
import PropTypes from 'prop-types';
import { store } from './redux/store';
import { resetField } from './redux/actions';

export const EndOfGame = () => {
	const state = store.getState();

	const chooseWinnerIcon = () => {
		return state.winner !== ''
			? state.winner === 'cross'
				? styles.crossImg
				: styles.zeroImg
			: '';
	};

	return (
		<div>
			<h1>
				<div className={chooseWinnerIcon()}></div>
				{state.winner === '' && state.full === true
					? 'The game ended in a draw'
					: 'wins!'}
			</h1>
			<button
				className={styles.btn}
				onClick={() => {
					store.dispatch(resetField());
				}}
			>
				Start new game
			</button>
		</div>
	);
};

EndOfGame.propTypes = {
	setWinner: PropTypes.func,
	setFull: PropTypes.func,
};
