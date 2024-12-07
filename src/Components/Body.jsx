import { createBrowserRouter } from 'react-router-dom';
import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom';



const Body = () => {
    let appRouter = createBrowserRouter([       // To create routes we make use of createBrowserRouter from react router
        {
          path: "/",
          element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        } 
      ]);

  return (
    <>
    <RouterProvider router={appRouter} />      {/*TO provide routing , make use of RouterProvider from react router */}
    
    </>
  )
}

export default Body