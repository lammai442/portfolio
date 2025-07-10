import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<>
					<HomePage />
				</>
			),
		},
		{
			path: '*',
			element: (
				<>
					<ErrorPage />
				</>
			),
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
