import Button from '../../../../common/Button/Button';

import { BUTTON_TEXT } from '../../../../constants';

import { pipeDuration } from '../../../../helpers/pipeDuration';

import './CourseCard.css';

const CourseCard = (props) => {
	const { courseData } = props;

	return (
		<li className='courses__item courses-card'>
			<div className='courses-card__content'>
				<div className='courses-card__column'>
					<h2 className='courses-card__title'>{courseData.title}</h2>
					<p className='courses-card__description'>{courseData.description}</p>
				</div>
				<div className='courses-card__column'>
					<p>
						<b>Authors: </b>
						{props.authors}
					</p>
					<p>
						<b>Duration: </b>
						{`${pipeDuration(courseData.duration)} hours`}
					</p>
					<p>
						<b>Created: </b>
						{courseData.creationDate}
					</p>

					<Button buttonText={BUTTON_TEXT.showCourse} />
				</div>
			</div>
		</li>
	);
};

export default CourseCard;
