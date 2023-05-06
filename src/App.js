import ErrorPage from './components/error-page';
import InputData from './components/InputData';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Table from './components/Table';
import MainPage from './components/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement:  <ErrorPage />,
    children: [
      {
        path: 'inputdata',
        element: <InputData />,
      },
      {
        path: 'table',
        element: <Table />,
      },
    ],
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
