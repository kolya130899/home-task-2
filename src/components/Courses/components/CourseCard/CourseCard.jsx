import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BUTTON_TEXT } from '../../../../constants';

import { pipeDuration } from '../../../../helpers/pipeDuration';
import { dateGenerator } from '../../../../helpers/dateGenerator';

import './CourseCard.css';

const CourseCard = ({ courseData, authors }) => {
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
						{authors}
					</p>
					<p>
						<b>Duration: </b>
						{`${pipeDuration(courseData.duration)} hours`}
					</p>
					<p>
						<b>Created: </b>
						{courseData.creationDate}
					</p>

					<Link to={`/courses/${courseData.id}`} className='btn link'>
						{BUTTON_TEXT.showCourse}
					</Link>
				</div>
			</div>
		</li>
	);
};

CourseCard.propTypes = {
	courseData: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		creationDate: PropTypes.string.isRequired,
	}),
	authors: PropTypes.string.isRequired,
};

CourseCard.defaultProps = {
	courseData: {
		id: 'default id',
		title: 'default title',
		description: 'default description',
		duration: 1,
		creationDate: dateGenerator(),
	},
	authors: 'default author',
};

export default CourseCard;
