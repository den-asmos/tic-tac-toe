import { initialState } from '../utils';
import { RESET_FIELD, SET_FULL, SET_WINNER, UPDATE_FIELD } from './types';

export const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_FIELD:
			let newMove = state.move;
			const newField = state.field.map((item) => {
				if (item.number === payload && item.value === '') {
					item.value = state.move;
					newMove = state.move === 'cross' ? 'zero' : 'cross';
				}
				return item;
			});
			return { ...state, field: newField, move: newMove };
		case RESET_FIELD:
			return {
				...initialState,
				field: [
					{ number: 1, value: '' },
					{ number: 2, value: '' },
					{ number: 3, value: '' },
					{ number: 4, value: '' },
					{ number: 5, value: '' },
					{ number: 6, value: '' },
					{ number: 7, value: '' },
					{ number: 8, value: '' },
					{ number: 9, value: '' },
				],
			};
		case SET_WINNER:
			return { ...state, winner: payload };
		case SET_FULL:
			return { ...state, full: true };
		default:
			return state;
	}
};
