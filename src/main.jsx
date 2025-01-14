import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Homepage from './routes/Homepage';
import PostListPage from './routes/PostListPage'
import Write from './routes/Write'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import SinglePostPage from './routes/SinglePostPage'
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
  {


    //do it thsi way instead of listing each route one by one, because this way it'll always show your layout, and then put the routes as your children because you have the Outlet component in App.jsx. 
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage/>,
      },
      {
        path: "/:slug",
        element: <SinglePostPage/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
