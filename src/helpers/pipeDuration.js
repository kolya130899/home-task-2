export const pipeDuration = (initialDate) => {
	if (initialDate) {
		let hours = Math.floor(initialDate / 60);
		let minutes = initialDate - hours * 60;

		return `${checkValueIsValid(hours)}:${checkValueIsValid(minutes)}`;
	} else {
		return '00:00';
	}
};

const checkValueIsValid = (value) => {
	return value < 10 ? '0' + value : value;
};
