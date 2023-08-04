import { createStore } from 'redux';
import { initialState } from './initialState';
import { reducer } from './reducer';

export const store = createStore(reducer, initialState);
