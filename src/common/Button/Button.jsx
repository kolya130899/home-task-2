import './Button.css';

const Button = ({ buttonText, buttonType, onClick, ...props }) => (
	<button
		type={buttonType ? buttonType : 'button'}
		className={`btn ${props.modificator ? props.modificator : ''}`}
		{...{ onClick }}
	>
		{buttonText}
	</button>
);
export default Button;
