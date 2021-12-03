import { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';

import {
	mockedCoursesList,
	mockedAuthorsList,
	ERRORS,
	BUTTON_TEXT,
} from '../../constants';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import './Courses.css';

const Courses = ({ handleAddCourse }) => {
	const [searchVal, setSearchVal] = useState('');

	// handle input value change
	const handleSearchValChange = (value) => {
		setSearchVal(value);
	};

	const [courses, setCourses] = useState(mockedCoursesList);

	// get course authors names from mocked authors list
	const getCourseAuthorsNames = (autorsList, courseAuthorsIds) => {
		const courseAuthorsNamesArr = autorsList
			.filter((item) => {
				for (let i = 0; i < courseAuthorsIds.length; i++) {
					if (courseAuthorsIds[i] === item.id) {
						return true;
					}
				}
				return false;
			})
			.map((item) => item.name)
			.join(', ');

		return courseAuthorsNamesArr;
	};

	// handle search button click
	const handleSearchClick = () => {
		setCourses(filterCoursesList());
	};

	// filter courses by search criteria
	const filterCoursesList = () => {
		if (searchVal) {
			const filteredCourses = mockedCoursesList.filter((item) => {
				let title = item.title.toLowerCase();
				let id = item.id.toLowerCase();
				let search = searchVal.toLowerCase();

				if (title.includes(search) || id.includes(search)) {
					return true;
				}

				return false;
			});

			return filteredCourses;
		}

		return mockedCoursesList;
	};

	// check search criteria value and if it's empty value, set courses array by initial mocked array
	useEffect(() => {
		if (!searchVal) {
			setCourses(mockedCoursesList);
		}
	}, [searchVal]);

	return (
		<section>
			<div className='courses__controls'>
				<SearchBar
					{...{ handleSearchValChange, searchVal, handleSearchClick }}
				/>
				<div></div>
				<Button buttonText={BUTTON_TEXT.addCourse} onClick={handleAddCourse} />
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
				<h3 className='error'>{ERRORS.noSuchCourse}</h3>
			)}
		</section>
	);
};

export default Courses;
