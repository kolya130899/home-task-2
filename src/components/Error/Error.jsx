import PropTypes from 'prop-types';

const Error = ({ errorText }) => {
	return (
		<div className='error'>
			<p>{errorText}</p>
		</div>
	);
};

Error.propTypes = {
	errorText: PropTypes.string.isRequired,
};

Error.defaultProps = {
	errorText: 'There is an error',
};

export default Error;
