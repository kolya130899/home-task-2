export const pipeDuration = (initialDate) => {
	let hours = Math.floor(initialDate / 60);
	let minutes = initialDate - hours * 60;

	return `${checkValueIsValid(hours)}:${checkValueIsValid(minutes)}`;
};

const checkValueIsValid = (value) => {
	return value < 10 ? '0' + value : value;
};
