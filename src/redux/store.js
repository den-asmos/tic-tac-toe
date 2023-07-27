import { createStore } from 'redux';
import { reducer } from './reducer';
import { initialState } from '../utils/initialState';

export const store = createStore(reducer, initialState);
