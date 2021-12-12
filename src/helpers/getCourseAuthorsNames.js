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

export default getCourseAuthorsNames;
