import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { mockedAuthorsList } from '../../../constants';

const useCreateAuthor = (initialAuthor, addAuthorInput) => {
	const [newAuthor, setNewAuthor] = useState(initialAuthor);

	const handleCreateAuthorInputChange = (e) => {
		if (!e.target.value) {
			e.target.style = 'border-color: red';
			setNewAuthor({ id: e.target.value, name: e.target.value });
		} else {
			e.target.removeAttribute('style');
			setNewAuthor({ id: uuid(), name: e.target.value });
		}
	};

	const handleCreateAuthorBtnClick = () => {
		if (!addAuthorInput.current.value) {
			addAuthorInput.current.style = 'border-color: red';
		} else {
			addAuthorInput.current.removeAttribute('style');

			mockedAuthorsList.push(newAuthor);
			setNewAuthor(initialAuthor);
		}
	};

	return {
		newAuthor,
		handleCreateAuthorInputChange,
		handleCreateAuthorBtnClick,
	};
};

export default useCreateAuthor;
