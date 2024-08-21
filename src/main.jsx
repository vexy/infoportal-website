
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App.jsx'
import Feed from './pages/Feed.jsx'
import Survey from './pages/Survey.jsx'
import Post from './pages/Post.jsx'
import About from './pages/About.jsx'
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
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/feed/:questionId',
    element: <Survey />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);