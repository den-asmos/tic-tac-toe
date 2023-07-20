import { useEffect, useState } from 'react';
import { AppLayout } from './appLayout';
import { EndOfGame } from './endOfGame';
import { store } from './redux/store';
import { setFull, setWinner } from './redux/actions';

export const AppContainer = () => {
	const [state, setState] = useState(store.getState());
	const [reRender, setReRender] = useState(false);

	useEffect(() => {
		setState(store.getState());
	}, [reRender]);

	const checkTheField = () => {
		if (!state.field.find((item) => item.value === '')) {
			store.dispatch(setFull());
		}
	};

	const checkTheWinner = () => {
		if (
			(state.field[0].value === state.field[1].value &&
				state.field[1].value === state.field[2].value &&
				state.field[0].value !== '') ||
			(state.field[1].value === state.field[4].value &&
				state.field[4].value === state.field[7].value &&
				state.field[1].value !== '') ||
			(state.field[2].value === state.field[5].value &&
				state.field[5].value === state.field[8].value &&
				state.field[2].value !== '') ||
			(state.field[2].value === state.field[4].value &&
				state.field[4].value === state.field[6].value &&
				state.field[2].value !== '') ||
			(state.field[6].value === state.field[7].value &&
				state.field[7].value === state.field[8].value &&
				state.field[6].value !== '') ||
			(state.field[0].value === state.field[4].value &&
				state.field[4].value === state.field[8].value &&
				state.field[0].value !== '') ||
			(state.field[0].value === state.field[3].value &&
				state.field[3].value === state.field[6].value &&
				state.field[0].value !== '') ||
			(state.field[3].value === state.field[4].value &&
				state.field[4].value === state.field[5].value &&
				state.field[3].value !== '')
		) {
			store.dispatch(setWinner(state.move));
			setState(store.getState());
		}
	};

	const handleReRender = () => {
		setReRender((prev) => !prev);
	};

	return (
		<>
			{state.winner === '' && !state.full ? (
				<AppLayout
					checkTheWinner={checkTheWinner}
					checkTheField={checkTheField}
					onReRender={handleReRender}
				/>
			) : (
				<EndOfGame onReRender={handleReRender} />
			)}
		</>
	);
};
