import PropTypes from 'prop-types';

import './Textarea.css';

const Textarea = ({ id, labelText, placeholder, onChange, minLength }) => {
	return (
		<div className='textarea'>
			<label htmlFor={id}>{labelText}</label>
			<textarea
				{...{ id, placeholder, onChange }}
				name={id}
				minLength={minLength}
			></textarea>
		</div>
	);
};

Textarea.propTypes = {
	id: PropTypes.string.isRequired,
	labelText: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	minLength: PropTypes.number,
};

Textarea.defaultProps = {
	id: '',
	labelText: '',
	placeholder: '',
	onChange: () => {},
	minLength: 0,
};

export default Textarea;
