import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { resetField } from './redux/actions';
import { selectFull, selectWinner } from './redux/selectors';
import styles from './endOfGame.module.css';

export const EndOfGame = () => {
	const winner = useSelector(selectWinner);
	const full = useSelector(selectFull);

	const dispatch = useDispatch();

	const chooseWinnerIcon = () => {
		return winner !== '' ? (winner === 'cross' ? styles.crossImg : styles.zeroImg) : '';
	};

	return (
		<div>
			<h1>
				<div className={chooseWinnerIcon()}></div>
				{winner === '' && full === true ? 'The game ended in a draw' : 'wins!'}
			</h1>
			<button
				className={styles.btn}
				onClick={() => {
					dispatch(resetField());
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
