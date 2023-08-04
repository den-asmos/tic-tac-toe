import { RESET_FIELD, SET_FULL, SET_WINNER, UPDATE_FIELD } from './types';

export const updateFieldAction = (number) => {
  return { type: UPDATE_FIELD, payload: number };
};

export const resetFieldAction = () => {
  return { type: RESET_FIELD };
};

export const setWinnerAction = (winner) => {
  return { type: SET_WINNER, payload: winner };
};

export const setFullAction = () => {
  return { type: SET_FULL };
};
