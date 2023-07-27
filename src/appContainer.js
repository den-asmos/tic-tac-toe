import { useDispatch, useSelector } from 'react-redux';
import { AppLayout } from './appLayout';
import { EndOfGame } from './endOfGame';
import { setFull, setWinner } from './redux/actions';
import { checkWinner, isFull } from './utils';
import { selectField, selectFull, selectMove, selectWinner } from './redux/selectors';

export const AppContainer = () => {
	const field = useSelector(selectField);
	const move = useSelector(selectMove);
	const winner = useSelector(selectWinner);
	const full = useSelector(selectFull);

	const dispatch = useDispatch();

	const checkTheField = () => {
		if (!isFull(field)) {
			dispatch(setFull());
		}
	};

	const checkTheWinner = () => {
		if (checkWinner(field)) {
			dispatch(setWinner(move));
		}
	};

	return (
		<>
			{winner === '' && !full ? (
				<AppLayout checkTheWinner={checkTheWinner} checkTheField={checkTheField} />
			) : (
				<EndOfGame />
			)}
		</>
	);
};
