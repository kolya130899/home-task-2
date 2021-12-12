import { Link } from 'react-router-dom';

import { mockedAuthorsList, ERRORS, BUTTON_TEXT } from '../../../../constants';

import CourseCard from '../CourseCard/CourseCard';
import SearchBar from '../SearchBar/SearchBar';
import Error from '../../../Error/Error';

import useCoursesSearch from '../../hooks/useCoursesSearch';
import getCourseAuthorsNames from '../../../../helpers/getCourseAuthorsNames';

const CoursesList = () => {
	const { courses, searchVal, handleSearchValChange, handleSearchClick } =
		useCoursesSearch();

	return (
		<section className='courses'>
			<div className='courses__controls'>
				<SearchBar
					{...{ handleSearchValChange, searchVal, handleSearchClick }}
				/>
				<div></div>

				<Link to='/courses/add' className='btn link'>
					{BUTTON_TEXT.addCourse}
				</Link>
			</div>

			{/* check if filtered courses exist and render them */}
			{courses.length ? (
				<ul className='courses__list'>
					{/* map through the courses array and return courses elements */}
					{courses.map((item, index) => (
						<CourseCard
							courseData={item}
							authors={getCourseAuthorsNames(mockedAuthorsList, item.authors)}
							key={index}
						/>
					))}
				</ul>
			) : (
				// render error message if no courses found by search criteria
				<Error errorText={ERRORS.noSuchCourse} />
			)}
		</section>
	);
};

export default CoursesList;
