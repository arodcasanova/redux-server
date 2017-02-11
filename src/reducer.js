<<<<<<< HEAD
import {List, Map} from 'immutable';

function setState(state, newState) {
	return state.merge(newState);
}

function vote(state, entry) {
	const currentPair = state.getIn(['vote', 'pair']);
	if (currentPair && currentPair.includes(entry)) {
		return state.set('hasVoted', entry);
	} return state;
}

function resetVote(state) {
	const hasVoted = state.get('hasVoted');
	const currentPair = state.getIn(['vote', 'pair'], List());

	if (hasVoted && !currentPair.includes(hasVoted)) {
		return state.remove('hasVoted');
	}	else return state;
}

export default function(state = Map(), action) {
	switch(action.type) {
		case('SET_STATE'):
			return resetVote(setState(state, action.state));
		case('VOTE'):
			return vote(state, action.entry);
	}
	
	return state; 
=======
import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'SET_ENTRIES': 
			return setEntries(state, action.entries);
		case 'NEXT':
			return next(state);
		case 'VOTE':
			return state.update('vote', 
								voteState => vote(voteState, action.entry));
		return state;
	}
>>>>>>> 004fece4e61ea6152bbd01de355ca97145b27d8c
}