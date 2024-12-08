import { createBrowserRouter, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom';
import { auth } from '../Utils/FireBase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';


const Body = () => {

    const dispatch = useDispatch();

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

    useEffect (()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      });
      
    }, [])

  return (
    <>
    <RouterProvider router={appRouter} />      {/*TO provide routing , make use of RouterProvider from react router */}
    
    </>
  )
}

export default Body