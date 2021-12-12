import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

import useCreateCourse from './hooks/useCreateCourse';
import useCreateAuthor from './hooks/useCreateAuthor';

const initialAuthor = {
	id: '',
	name: '',
};

const initialState = {
	id: uuid(),
	title: '',
	description: '',
	creationDate: dateGenerator(),
	duration: 0,
	authors: [],
};

const CreateCourse = () => {
	const addAuthorInput = useRef();

	const { formData, dispatch } = useCreateCourse(initialState);
	const {
		newAuthor,
		handleCreateAuthorInputChange,
		handleCreateAuthorBtnClick,
	} = useCreateAuthor(initialAuthor, addAuthorInput);

	let navigate = useNavigate();

	const handleKeyPress = (e) => {
		if (48 < e.charCode && e.charCode > 57) {
			e.preventDefault();
		}
	};

	const isExists = (item) => {
		return (item || item.length) && item;
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (Object.values(formData).every(isExists)) {
			mockedCoursesList.push(formData);

			navigate('/courses');
		} else {
			alert('Please fill in all fields');
		}
	};

	return (
		<section className='create-course'>
			<Link to='/courses' className='link'>
				{'< Back to courses'}
			</Link>

			<form onSubmit={handleFormSubmit}>
				<div className='create-course__row create-course__row--top'>
					{/* TITLE INPUT */}
					<Input
						placeholder={INPUT_PLACEHOLDER.enterTitle}
						id='title'
						labelText={LABEL_TEXT.title}
						onChange={(e) =>
							dispatch({
								type: 'INPUT_CHANGE',
								payload: { id: e.target.id, value: e.target.value },
							})
						}
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
					onChange={(e) =>
						dispatch({
							type: 'INPUT_CHANGE',
							payload: { id: e.target.id, value: e.target.value },
						})
					}
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
												onClick={() =>
													dispatch({
														type: 'ADD_AUTHOR',
														payload: item.id,
													})
												}
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
							type='number'
							placeholder={INPUT_PLACEHOLDER.duration}
							id='duration'
							labelText={LABEL_TEXT.duration}
							onChange={(e) =>
								dispatch({ type: 'SET_DURATION', payload: e.target })
							}
							onKeyPress={handleKeyPress}
							value={formData.duration ? formData.duration : ''}
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
												onClick={() =>
													dispatch({ type: 'REMOVE_AUTHOR', payload: index })
												}
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
