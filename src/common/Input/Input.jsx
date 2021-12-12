import { forwardRef } from 'react';

import './Input.css';

const Input = forwardRef(
	({ type, placeholder, onChange, id, labelText, value }, ref) => {
		return (
			<div className='input'>
				{labelText && <label htmlFor={id}>{labelText}</label>}

				<input
					type={type ? type : 'text'}
					{...{ placeholder, onChange, id, value, ref }}
				/>
			</div>
		);
	}
);

export default Input;
