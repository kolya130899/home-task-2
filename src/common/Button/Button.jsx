import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ buttonText, buttonType, onClick, modificator }) => (
	<button type={buttonType} className={`btn ${modificator}`} {...{ onClick }}>
		{buttonText}
	</button>
);

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	buttonType: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	modificator: PropTypes.string,
};

Button.defaultProps = {
	buttonText: 'Button',
	buttonType: 'button',
	onClick: () => {},
	modificator: '',
};

export default Button;
