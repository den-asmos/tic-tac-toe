import { useEffect, useState } from 'react';
import { AppLayout } from './appLayout';
import { EndOfGame } from './endOfGame';
import { store } from './redux/store';
import { setFull, setWinner } from './redux/actions';
import { checkWinner, isFull } from './utils';

export const AppContainer = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const checkTheField = () => {
		if (!isFull(state.field)) {
			store.dispatch(setFull());
		}
	};

	const checkTheWinner = () => {
		if (checkWinner(state.field)) {
			store.dispatch(setWinner(state.move));
		}
	};

	return (
		<>
			{state.winner === '' && !state.full ? (
				<AppLayout
					checkTheWinner={checkTheWinner}
					checkTheField={checkTheField}
					state={state}
				/>
			) : (
				<EndOfGame />
			)}
		</>
	);
};
