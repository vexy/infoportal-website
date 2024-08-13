
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App.jsx'
import Survey from './pages/Survey.jsx'
import Question from './pages/Question.jsx'
import PageNotFound404 from './pages/404.jsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound404 />
  },
  {
    path: '/survey',
    element: <Survey />,
    children: [
      {
        path: '/survey/:questionId',
        element: <Question />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);