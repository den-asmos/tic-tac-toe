import { RESET_FIELD, SET_FULL, SET_WINNER, UPDATE_FIELD } from './types';

export const updateField = (number) => {
	return { type: UPDATE_FIELD, payload: number };
};

export const resetField = () => {
	return { type: RESET_FIELD };
};

export const setWinner = (winner) => {
	return { type: SET_WINNER, payload: winner };
};

export const setFull = () => {
	return { type: SET_FULL };
};
