import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(
	({ type, placeholder, onChange, id, labelText, value, ...props }, ref) => {
		return (
			<div className='input'>
				{labelText && <label htmlFor={id}>{labelText}</label>}

				<input
					type={type ? type : 'text'}
					{...{ placeholder, onChange, id, value, ref, ...props }}
				/>
			</div>
		);
	}
);

export default Input;
