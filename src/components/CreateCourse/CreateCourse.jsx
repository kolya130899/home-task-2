import { createRef, useRef, useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import {
	BUTTON_TEXT,
	INPUT_PLACEHOLDER,
	LABEL_TEXT,
	mockedAuthorsList,
} from '../../constants';

import './CreateCourse.css';

import { pipeDuration } from '../../helpers/pipeDuration';
import Textarea from '../../common/Textarea/Textarea';

const CreateCourse = () => {
	const [formData, setFormData] = useState({
		authors: [],
		duration: '00:00',
	});
	const authorsElementsArrRef = useRef(
		mockedAuthorsList.map(() => createRef())
	);

	const handleDurationChange = (e) => {
		let date = pipeDuration(e.target.value);
		setFormData({ ...formData, duration: date });
	};

	const handleKeyPress = (e) => {
		if (48 < e.charCode && e.charCode > 57) {
			e.preventDefault();
		}
	};

	const handleAddAuthorBtnClick = (id, index) => {
		setFormData({ ...formData, authors: [...formData.authors, id] });

		authorsElementsArrRef.current[index].current.style.display = 'none';
	};

	return (
		<section className='create-course'>
			<form>
				<div className='create-course__row create-course__row--top'>
					{/* TITLE INPUT */}
					<Input
						placeholder={INPUT_PLACEHOLDER.enterTitle}
						id='title'
						labelText={LABEL_TEXT.title}
					/>

					{/* CREATE COURSE BUTTON */}
					<Button buttonText={BUTTON_TEXT.createCourse} buttonType='submit' />
				</div>

				{/* DESCRIPTION */}
				<Textarea
					id='description'
					labelText={LABEL_TEXT.description}
					placeholder={INPUT_PLACEHOLDER.description}
				/>

				<div className='create-course__row'>
					{/* ADD AUTHOR */}
					<div className='create-course__add-new'>
						<h3>Add author</h3>
						<Input
							placeholder={INPUT_PLACEHOLDER.enterAuthorName}
							id='authorName'
							labelText={LABEL_TEXT.authorName}
						/>
						<Button buttonText={BUTTON_TEXT.createAuthor} />
					</div>

					{/* ADD AUTHOR TO COURSE AUTHORS LIST */}
					<div className='create-course__add-new'>
						<h3>Authors</h3>
						<ul className='create-course__available-authors'>
							{mockedAuthorsList.map((item, index) => (
								<li key={index} ref={authorsElementsArrRef.current[index]}>
									<span>{item.name}</span>
									<Button
										buttonText={BUTTON_TEXT.addAuthor}
										onClick={() => handleAddAuthorBtnClick(item.id, index)}
									/>
								</li>
							))}
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
						/>
						<p>
							Duration <b>{formData.duration}</b> hours
						</p>
					</div>
					{/* COURSE AUTHORS LIST */}
					<div className='create-course__add-new'>
						<h3>Course authors</h3>
						<ul className='create-course__available-authors'>
							{formData.authors.length
								? formData.authors.map((item, index) => (
										<li key={index}>{item.name}</li>
								  ))
								: 'Author list is empty'}
						</ul>
					</div>
				</div>
			</form>
		</section>
	);
};

export default CreateCourse;
