import { createRef, useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Error from '../Error/Error';

import { INPUT_PLACEHOLDER, LABEL_TEXT, BUTTON_TEXT } from '../../constants';
import { api } from '../../api/users';

import useAuth from '../../hooks/useAuth';

const initialState = {
	name: '',
	data: {
		email: '',
		password: '',
	},
};

const Registration = () => {
	const inputsRef = useRef(Object.keys(initialState).map(() => createRef()));
	const { authData, dispatch, handleFormSubmit, errors, handleSetErrors } =
		useAuth(initialState, inputsRef, '/login', api.registerUser);

	return (
		<div className='block__content block__content--main auth'>
			<h3 className='title'>Registration</h3>
			<form onSubmit={handleFormSubmit}>
				<Input
					type='text'
					placeholder={INPUT_PLACEHOLDER.enterName}
					onChange={(e) =>
						dispatch({
							type: 'ADD_USERNAME',
							payload: { ...{ e, errors, handleSetErrors } },
						})
					}
					id='name'
					labelText={LABEL_TEXT.userName}
					value={authData.name}
					ref={inputsRef.current[0]}
				/>
				{errors.name && <Error errorText={errors.name} />}

				<Input
					type='email'
					placeholder={INPUT_PLACEHOLDER.enterEmail}
					onChange={(e) =>
						dispatch({
							type: 'ADD_EMAIL',
							payload: { ...{ e, errors, handleSetErrors } },
						})
					}
					id='email'
					labelText={LABEL_TEXT.userEmail}
					value={authData.email}
					ref={inputsRef.current[1]}
				/>
				{errors.email && <Error errorText={errors.email} />}

				<Input
					type='password'
					placeholder={INPUT_PLACEHOLDER.enterPassword}
					onChange={(e) =>
						dispatch({
							type: 'ADD_PASSWORD',
							payload: { ...{ e, errors, handleSetErrors } },
						})
					}
					id='password'
					labelText={LABEL_TEXT.userPassword}
					value={authData.password}
					ref={inputsRef.current[2]}
				/>
				{errors.password && <Error errorText={errors.password} />}

				<Button buttonText={BUTTON_TEXT.register} buttonType='submit' />

				<p className='auth__link'>
					If you have an account you can{' '}
					<Link to='/login' className='link'>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Registration;
