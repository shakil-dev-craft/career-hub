import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/jobs',
        element: <Jobs />,
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
