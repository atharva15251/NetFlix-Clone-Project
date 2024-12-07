import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);

    const signInToggle = () =>{
        setSignInForm(!isSignInForm);
    }

  return (
    <>
    <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg'/>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h2 className='font-bold text-3xl py-2'> {isSignInForm ? "Sign In" : "Sign Up"}</h2>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 '></input>)}
        {!isSignInForm && (<input type='number' placeholder='Phone Number' className='p-4 my-4 w-full bg-gray-700'></input>)}
        <input type='text' placeholder='Enter Email Address' className='p-4 my-4 w-full bg-gray-700 '></input>
        <input type='password' placeholder='Enter Password' className='p-4 my-4 w-full bg-gray-700 '></input>
        <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>{ isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='py-4 cursor-pointer' onClick={signInToggle}> { isSignInForm ? "New to NetFlix ? Sign Up Now" : "Already Registered ? Sign In ..."}</p>
    </form>
    </>
  )
}

export default Login