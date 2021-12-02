import './Input.css';

const Input = ({
	type,
	placeholder,
	onChange,
	id,
	labelText,
	value,
	...props
}) => {
	return (
		<div className='input'>
			{labelText && <label htmlFor={id}>{labelText}</label>}

			<input
				type={type ? type : 'text'}
				{...{ placeholder, onChange, id, value, ...props }}
			/>
		</div>
	);
};

export default Input;
