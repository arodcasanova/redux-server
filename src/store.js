import {createStore} from 'redux';
import reducer from './reducer';
import INITIAL_STATE from './core';

export default function makeStore() {
	return createStore(reducer, INITIAL_STATE);
}