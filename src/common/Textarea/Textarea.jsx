import './Textarea.css';

const Textarea = ({ id, labelText, placeholder, ...props }) => {
	return (
		<div className='textarea'>
			<label htmlFor={id}>{labelText}</label>
			<textarea
				{...{ id, placeholder }}
				name={id}
				minLength={props.minLength}
			></textarea>
		</div>
	);
};

export default Textarea;
