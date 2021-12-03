export const dateGenerator = () => {
	const date = new Date();

	return `${
		date.getUTCMonth() + 1
	}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
};
