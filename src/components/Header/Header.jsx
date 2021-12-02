import Logo from '../Header/components/Logo/Logo';
import Button from '../../common/Button/Button';

import { BUTTON_TEXT } from '../../constants';

import './Header.css';

const Header = () => {
	return (
		<header className='header block'>
			<div className='header__container block-container'>
				<div className='header__logo-container'>
					<Logo />
				</div>

				<div className='separator'></div>

				<div className='header__username'>Mykola</div>
				<Button
					modificator='btn--header' //TO REMOVE
					buttonText={BUTTON_TEXT.logout}
				/>
			</div>
		</header>
	);
};

export default Header;
