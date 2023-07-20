import { useState } from 'react';
import styles from './endOfGame.module.css';
import PropTypes from 'prop-types';
import { store } from './redux/store';
import { resetField } from './redux/actions';

export const EndOfGame = ({ onReRender }) => {
	const [state, setState] = useState(store.getState());

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
					onReRender();
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
	setFull: PropTypes.func,
};
