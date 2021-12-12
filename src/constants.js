export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
 typesetting industry. Lorem Ipsum
	has been the industry's standard dummy text ever since the
 1500s, when an unknown
	printer took a galley of type and scrambled it to make a type
 specimen book. It has survived
	not only five centuries, but also the leap into electronic typesetting, remaining essentially u
	nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812bebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
 typesetting industry. Lorem Ipsum
	has been the industry's standard dummy text ever since the
 1500s, when an unknown
	printer took a galley of type and scrambled it to make a type
 specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

export const BUTTON_TEXT = {
	logout: 'Logout',
	showCourse: 'Show course',
	search: 'Search',
	addCourse: 'Add new course',
	addAuthor: 'Add author',
	createCourse: 'Create course',
	createAuthor: 'Create author',
	deleteCourseAuthor: 'Delete author',
	register: 'Registration',
	login: 'Login',
};

export const INPUT_PLACEHOLDER = {
	searchCourse: 'Enter course name or id...',
	enterTitle: 'Enter title...',
	enterAuthorName: 'Enter author name...',
	duration: 'Enter duration in minutes...',
	description: 'Enter description...',
	enterName: 'Enter name',
	enterEmail: 'Enter email',
	enterPassword: 'Enter password',
};
export const LABEL_TEXT = {
	authorName: 'Author name',
	duration: 'Duration',
	title: 'Title',
	description: 'Description',
	userName: 'Name',
	userEmail: 'Email',
	userPassword: 'Password',
};

export const ERRORS = {
	noSuchCourse: "Such courses don't exist",
	noPage: "The page doesn't exist",
};
