import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';

import {
	BUTTON_TEXT,
	INPUT_PLACEHOLDER,
	LABEL_TEXT,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../constants';

import './CreateCourse.css';

import { pipeDuration } from '../../helpers/pipeDuration';
import { dateGenerator } from '../../helpers/dateGenerator';

const initialAuthor = {
	id: '',
	name: '',
};

const CreateCourse = ({ handleAddCourse }) => {
	const [formData, setFormData] = useState({
		id: uuid(),
		title: '',
		description: '',
		creationDate: dateGenerator(),
		duration: '',
		authors: [],
	});
	const [newAuthor, setNewAuthor] = useState(initialAuthor);

	const addAuthorInput = useRef();

	const handleKeyPress = (e) => {
		if (48 < e.charCode && e.charCode > 57) {
			e.preventDefault();
		}
	};

	const handleAddAuthorBtnClick = (id) => {
		setFormData({ ...formData, authors: [...formData.authors, id] });
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleDeleteAuthor = (index) => {
		let authors = formData.authors;
		authors.splice(index, 1);

		setFormData({ ...formData, ...authors });
	};

	const handleCreateAuthorInputChange = (e) => {
		if (!e.target.value) {
			e.target.style = 'border-color: red';
			setNewAuthor({ ...newAuthor, name: e.target.value });
		} else {
			e.target.removeAttribute('style');
			let authorId = uuid();
			setNewAuthor({ id: authorId, name: e.target.value });
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

	const handleDurationChange = (e) => {
		const { value } = e.target;

		if (Number(value)) {
			setFormData({ ...formData, duration: value });
			e.target.removeAttribute('style');
		} else {
			setFormData({ ...formData, duration: '' });
			e.target.style = 'border-color: red';
		}
	};

	const isExists = (item) => {
		if (typeof item !== 'string') {
			return item.length;
		} else {
			return item;
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if (Object.values(formData).every(isExists)) {
			mockedCoursesList.push(formData);

			handleAddCourse();
		} else {
			alert('Please fill in all fields');
		}
	};

	return (
		<section className='create-course'>
			<form onSubmit={handleFormSubmit}>
				<div className='create-course__row create-course__row--top'>
					{/* TITLE INPUT */}
					<Input
						placeholder={INPUT_PLACEHOLDER.enterTitle}
						id='title'
						labelText={LABEL_TEXT.title}
						onChange={handleInputChange}
						value={formData.title}
					/>

					{/* CREATE COURSE BUTTON */}
					<Button buttonText={BUTTON_TEXT.createCourse} buttonType='submit' />
				</div>

				{/* DESCRIPTION */}
				<Textarea
					id='description'
					labelText={LABEL_TEXT.description}
					placeholder={INPUT_PLACEHOLDER.description}
					onChange={handleInputChange}
					minLength='2'
				/>

				<div className='create-course__row'>
					{/* ADD AUTHOR */}
					<div className='create-course__add-new'>
						<h3>Add author</h3>
						<Input
							placeholder={INPUT_PLACEHOLDER.enterAuthorName}
							id='authorName'
							labelText={LABEL_TEXT.authorName}
							onChange={handleCreateAuthorInputChange}
							value={newAuthor.name}
							ref={addAuthorInput}
						/>
						<Button
							buttonText={BUTTON_TEXT.createAuthor}
							onClick={handleCreateAuthorBtnClick}
						/>
					</div>

					{/* ADD AUTHOR TO COURSE AUTHORS LIST */}
					<div className='create-course__add-new'>
						<h3>Authors</h3>
						<ul className='create-course__available-authors'>
							{formData.authors.length < mockedAuthorsList.length ? (
								mockedAuthorsList
									.filter((item) => {
										return formData.authors.indexOf(item.id) !== -1
											? false
											: true;
									})
									.map((item, index) => (
										<li key={index}>
											<span>{item.name}</span>
											<Button
												buttonText={BUTTON_TEXT.addAuthor}
												onClick={() => handleAddAuthorBtnClick(item.id)}
											/>
										</li>
									))
							) : (
								<li>Author list is empty</li>
							)}
						</ul>
					</div>

					{/* DURATION */}
					<div className='create-course__add-new'>
						<h3>Duration</h3>
						<Input
							placeholder={INPUT_PLACEHOLDER.duration}
							id='duration'
							labelText={LABEL_TEXT.duration}
							onChange={handleDurationChange}
							onKeyPress={handleKeyPress}
							value={formData.duration}
						/>
						<p className='duration-value'>
							Duration: <b>{pipeDuration(formData.duration)}</b> hours
						</p>
					</div>

					{/* COURSE AUTHORS LIST */}
					<div className='create-course__add-new'>
						<h3>Course authors</h3>
						<ul className='create-course__available-authors'>
							{formData.authors.length ? (
								mockedAuthorsList
									.filter((item) => {
										return formData.authors.indexOf(item.id) === -1
											? false
											: true;
									})
									.map((item, index) => (
										<li key={index}>
											<span>{item.name}</span>
											<Button
												buttonText={BUTTON_TEXT.deleteCourseAuthor}
												onClick={() => handleDeleteAuthor(index)}
											/>
										</li>
									))
							) : (
								<li>Author list is empty</li>
							)}
						</ul>
					</div>
				</div>
			</form>
		</section>
	);
};

export default CreateCourse;
