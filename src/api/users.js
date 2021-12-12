import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

// console.log(BASE_URL);

export const api = {
	async registerUser(data) {
		return await axios.post(`${BASE_URL}/register`, data);
	},
	async loginUser(data) {
		return await axios.post(`${BASE_URL}/login`, data);
	},
};
