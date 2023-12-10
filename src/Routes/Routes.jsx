import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Projects from "../Pages/Home/Projects/Projects";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/aboutMe',
            element: <AboutMe></AboutMe>
        },
        {
            path: '/projects',
            element: <Projects></Projects>
        },

      ]
    },
  ]);