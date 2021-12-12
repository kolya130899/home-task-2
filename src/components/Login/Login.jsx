import { useRef, createRef } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Error from '../Error/Error';

import { INPUT_PLACEHOLDER, LABEL_TEXT, BUTTON_TEXT } from '../../constants';
import { api } from '../../api/users';

import useAuth from '../../hooks/useAuth';

const initialState = {
	email: '',
	password: '',
};

const Login = () => {
	const inputsRef = useRef(Object.keys(initialState).map(() => createRef()));
	const { authData, dispatch, handleFormSubmit, errors, handleSetErrors } =
		useAuth(initialState, inputsRef, '/courses', api.loginUser);

	return (
		<div className='block__content block__content--main auth'>
			<h3 className='title'>Login</h3>
			<form onSubmit={handleFormSubmit}>
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
					ref={inputsRef.current[0]}
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
					ref={inputsRef.current[1]}
				/>
				{errors.password && <Error errorText={errors.password} />}

				<Button buttonText={BUTTON_TEXT.login} buttonType='submit' />

				<p className='registration__login-link'>
					If you have an account you can{' '}
					<Link to='/registration' className='link'>
						Register
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
