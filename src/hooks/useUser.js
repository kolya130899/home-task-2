import { createContext, useContext, useState } from 'react';

const initialUser = {
	token: '',
	data: {
		name: '',
		email: '',
	},
};

const UserContext = createContext();

const useUser = () => {
	const [user, setUser] = useState(initialUser);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = (token, data) => {
		const userData = { ...{ token, data } };

		localStorage.setItem('user', JSON.stringify(userData));

		setUser({ token, data });
		setIsLoggedIn(true);
	};

	const logout = () => {
		localStorage.removeItem('user');

		setUser(initialUser);
		setIsLoggedIn(false);
	};

	return { user, isLoggedIn, login, logout };
};

export const UserProvider = ({ children }) => {
	const user = useUser();

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const AuthConsumer = () => {
	return useContext(UserContext);
};
