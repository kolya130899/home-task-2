import { useEffect, useState } from 'react';
import { mockedCoursesList } from '../../../constants';

const useCoursesSearch = () => {
	const [searchVal, setSearchVal] = useState('');

	// handle input value change
	const handleSearchValChange = (value) => {
		setSearchVal(value);
	};

	const [courses, setCourses] = useState(mockedCoursesList);

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

	return {
		courses,
		searchVal,
		handleSearchValChange,
		handleSearchClick,
	};
};

export default useCoursesSearch;
