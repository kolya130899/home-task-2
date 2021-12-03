import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import 'normalize.css';
import './App.css';

function App() {
	const [addCourse, setAddCourse] = useState(false);

	const handleAddCourse = () => {
		setAddCourse(!addCourse);
	};

	return (
		<>
			<Header />

			<main className='courses block'>
				<div className='courses__content'>
					{addCourse ? (
						<CreateCourse {...{ handleAddCourse }} />
					) : (
						<Courses {...{ handleAddCourse }} />
					)}
				</div>
			</main>
		</>
	);
}

export default App;
