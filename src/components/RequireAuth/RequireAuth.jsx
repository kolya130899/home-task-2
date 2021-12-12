import { Navigate, useLocation } from 'react-router-dom';
import { AuthConsumer } from '../../hooks/useUser';

import PropTypes from 'prop-types';

const RequireAuth = ({ children }) => {
	const { isLoggedIn } = AuthConsumer();
	const location = useLocation();

	return isLoggedIn ? (
		children
	) : (
		<Navigate to='/login' replace state={{ path: location.pathname }} />
	);
};

RequireAuth.propTypes = {
	children: PropTypes.element.isRequired,
};

export default RequireAuth;
