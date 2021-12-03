import './Textarea.css';

const Textarea = ({ id, labelText, placeholder, onChange, ...props }) => {
	return (
		<div className='textarea'>
			<label htmlFor={id}>{labelText}</label>
			<textarea
				{...{ id, placeholder, onChange }}
				name={id}
				minLength={props.minLength}
			></textarea>
		</div>
	);
};

export default Textarea;
