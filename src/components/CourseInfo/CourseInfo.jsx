import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import getCourseAuthorsNames from '../../helpers/getCourseAuthorsNames';
import { pipeDuration } from '../../helpers/pipeDuration';

import './CourseInfo.css';

const inititalState = {
	title: '',
	description: '',
	id: '',
	duration: '',
	creationDate: '',
	authors: [],
};

const CourseInfo = () => {
	const [courseInfo, setCourseInfo] = useState(inititalState);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let data = mockedCoursesList.filter((course) => course.id === params.id);

		data.length ? setCourseInfo(data[0]) : navigate('/404');
	}, [navigate, params]);

	return courseInfo ? (
		<section className='course-info'>
			<Link to='/courses' className='link'>
				{'< Back to courses'}
			</Link>
			<h2 className='course-info__title'>{courseInfo.title}</h2>

			<div className='course-info__container'>
				<div className='course-info__column'>
					<p>{courseInfo.description}</p>
				</div>

				<div></div>

				<div className='course-info__column'>
					<p>
						<b>ID:</b> <span>{courseInfo.id}</span>
					</p>
					<p>
						<b>Duration:</b>{' '}
						<span>{`${pipeDuration(courseInfo.duration)} hours`}</span>
					</p>
					<p>
						<b>Created:</b> <span>{courseInfo.creationDate}</span>
					</p>
					<div>
						<b>Authors:</b>{' '}
						<p>
							{getCourseAuthorsNames(mockedAuthorsList, courseInfo.authors)}
						</p>
					</div>
				</div>
			</div>
		</section>
	) : (
		<></>
	);
};

export default CourseInfo;
