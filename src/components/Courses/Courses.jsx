import { Outlet } from 'react-router-dom';

import './Courses.css';

const Courses = () => {
	return (
		<div className='block__content block__content--main'>
			<Outlet />
		</div>
	);
};

export default Courses;
