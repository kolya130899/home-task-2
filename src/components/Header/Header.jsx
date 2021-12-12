import PropType from 'prop-types';

import Logo from '../Header/components/Logo/Logo';
import Button from '../../common/Button/Button';

import { AuthConsumer } from '../../hooks/useUser';

import { BUTTON_TEXT } from '../../constants';

import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const { user, isLoggedIn, logout } = AuthConsumer();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login', { replace: true });
	};

	return (
		<header className='header block'>
			<div className='block__content block__content--header'>
				<div className='header__logo-container'>
					<Logo />
				</div>
				<div className='separator'></div>
				{isLoggedIn && (
					<>
						<div className='header__username'>{user.data.name}</div>
						<Button
							modificator='btn--header'
							buttonText={BUTTON_TEXT.logout}
							onClick={handleLogout}
						/>
					</>
				)}
			</div>
		</header>
	);
};

Header.propTypes = {
	user: PropType.string,
};

export default Header;
