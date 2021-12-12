import { useReducer } from 'react';

const reducer = (state, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'ADD_AUTHOR':
			return { ...state, authors: [...state.authors, payload] };
		case 'INPUT_CHANGE':
			return { ...state, [payload.id]: payload.value };
		case 'REMOVE_AUTHOR':
			return { ...state, ...state.authors.splice(payload, 1) };
		case 'SET_DURATION':
			return handleDurationChange(state, payload);
		default:
			throw new Error();
	}
};

const handleDurationChange = (state, target) => {
	let val = Number(target.value);

	if (val) {
		target.removeAttribute('style');

		return { ...state, duration: val };
	} else {
		target.style = 'border-color: red';
		return { ...state, duration: 0 };
	}
};

const useCreateCourse = (initialState) => {
	const [formData, dispatch] = useReducer(reducer, initialState);

	return {
		formData,
		dispatch,
	};
};

export default useCreateCourse;
