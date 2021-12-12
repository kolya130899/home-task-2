import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Courses from './components/Courses/Courses';
import CoursesList from './components/Courses/components/CoursesList/CoursesList';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Error from './components/Error/Error';
import RequireAuth from './components/RequireAuth/RequireAuth';

import { UserProvider } from './hooks/useUser';

import 'normalize.css';
import './App.css';

import { ERRORS } from './constants';

function App() {
	return (
		<UserProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route
							path='courses'
							element={
								<RequireAuth>
									<Courses />
								</RequireAuth>
							}
						>
							<Route path='' element={<CoursesList />} />
							<Route path='add' element={<CreateCourse />} />
							<Route path=':id' element={<CourseInfo />} />
						</Route>

						<Route path='registration' element={<Registration />} />
						<Route path='login' element={<Login />} />

						<Route path='*' element={<Error errorText={ERRORS.noPage} />} />
					</Route>
				</Routes>
			</Router>
		</UserProvider>
	);
}

export default App;
