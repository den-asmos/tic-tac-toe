import { useState } from 'react';
import { AppLayout } from './appLayout';
import { EndOfGame } from './endOfGame';

export const AppContainer = () => {
	const [field, setField] = useState([
		{ number: 1, value: '' },
		{ number: 2, value: '' },
		{ number: 3, value: '' },
		{ number: 4, value: '' },
		{ number: 5, value: '' },
		{ number: 6, value: '' },
		{ number: 7, value: '' },
		{ number: 8, value: '' },
		{ number: 9, value: '' },
	]);

	const [move, setMove] = useState('cross');
	const [winner, setWinner] = useState('');
	const [full, setFull] = useState(false);

	const checkTheField = () => {
		setFull(!field.find((item) => item.value === ''));
	}

	const checkTheWinner = () => {
		if (
			(field[0].value === field[1].value &&
				field[1].value === field[2].value &&
				field[0].value !== '') ||
			(field[1].value === field[4].value &&
				field[4].value === field[7].value &&
				field[1].value !== '') ||
			(field[2].value === field[5].value &&
				field[5].value === field[8].value &&
				field[2].value !== '') ||
			(field[2].value === field[4].value &&
				field[4].value === field[6].value &&
				field[2].value !== '') ||
			(field[6].value === field[7].value &&
				field[7].value === field[8].value &&
				field[6].value !== '') ||
			(field[0].value === field[4].value &&
				field[4].value === field[8].value &&
				field[0].value !== '') ||
			(field[0].value === field[3].value &&
				field[3].value === field[6].value &&
				field[0].value !== '') ||
			(field[3].value === field[4].value &&
				field[4].value === field[5].value &&
				field[3].value !== '')
		) {
			setWinner(move);
		}
	};

	return (
		<>
			{(winner === '' && !full) ? (
				<AppLayout
					field={field}
					setField={setField}
					move={move}
					setMove={setMove}
					checkTheWinner={checkTheWinner}
					checkTheField={checkTheField}
				/>
			) : (
				<EndOfGame winner={winner} setWinner={setWinner} field={field} setField={setField} setFull={setFull}/>
			)}
		</>
	);
};
