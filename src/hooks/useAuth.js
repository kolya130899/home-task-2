import { useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthConsumer } from './useUser';

const reducer = (state, action) => {
	const { payload } = action;

	switch (action.type) {
		case 'ADD_USERNAME':
			return handleInputChange(state, payload);
		case 'ADD_EMAIL':
			return handleInputChange(state, payload);
		case 'ADD_PASSWORD':
			return handleInputChange(state, payload);
		default:
			throw new Error();
	}
};

const handleInputChange = (state, payload) => {
	const { e, errors, handleSetErrors } = payload;

	if (e.target.value) {
		e.target.removeAttribute('style');
		handleSetErrors(errors, e.target.id, '');
		return { ...state, [e.target.id]: e.target.value };
	} else {
		e.target.style = 'border-color: red';
		handleSetErrors(errors, e.target.id, 'Cannot be an empty field');
		return { ...state, [e.target.id]: e.target.value };
	}
};

const useAuth = (initialState, inputsRef, redirectTo, api) => {
	const [authData, dispatch] = useReducer(reducer, initialState);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const { state } = useLocation();
	const { login } = AuthConsumer();

	const handleSetErrors = (state, key, value) => {
		setErrors({ ...state, [key]: value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// check if all inputs have values
		if (Object.values(authData).every((item) => item)) {
			// if yes, remove error styling from inputs
			inputsRef.current.forEach((el) => {
				el.current.removeAttribute('style');
			});

			try {
				// attempt register user
				const response = await api(authData);

				// check response status
				if (200 <= response.status && response.status < 400) {
					// check if user login
					if (response.data.user) {
						const { result, user } = response.data;

						login(result, user);
						navigate(state?.path || '/courses');
					}

					// if register, move to login on success
					navigate(redirectTo);
				} else {
					throw new Error(response.statusText);
				}
			} catch (err) {
				let errObj = {};

				// handle errors
				err.response.data.errors.forEach((error) => {
					// get error input key
					let key = error.split(' ', 1)[0].slice(1, -1);

					// set error to buffer object
					errObj = { ...errObj, [`${key}`]: error };

					// set error styling for input
					inputsRef.current.forEach((el) => {
						el.current.id === key && (el.current.style = 'border-color: red');
					});
				});

				// set errors to state
				setErrors(errObj);
			}
		} else {
			// handle some inputs are empty
			let errObj = {};

			inputsRef.current.forEach((el) => {
				if (!el.current.value) {
					errObj = { ...errObj, [el.current.id]: 'Cannot be an empty field' };
					el.current.style = 'border-color: red';
				}
			});

			setErrors(errObj);
		}
	};

	return { authData, dispatch, handleFormSubmit, errors, handleSetErrors };
};

export default useAuth;
