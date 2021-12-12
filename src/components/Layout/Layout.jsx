import { Outlet, useNavigate } from 'react-router-dom';
import { AuthConsumer } from '../../hooks/useUser';

import Header from '../Header/Header';

import { useEffect, useRef } from 'react';

const Layout = () => {
	const { login, isLoggedIn } = AuthConsumer();
	const navigate = useNavigate();
	const loginRef = useRef();
	const navigateRef = useRef();

	useEffect(() => {
		loginRef.current = login;
		navigateRef.current = navigate;
	});

	useEffect(() => {
		if (!isLoggedIn) {
			navigateRef.current('/login', { replace: true });
		} else {
			navigateRef.current('/courses', { replace: true });
		}
	}, [isLoggedIn]);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			loginRef.current(user.token, user.data);
		}
	}, []);

	return (
		<>
			<Header />
			<main className='block'>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
