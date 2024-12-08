import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/FireBase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img className='w-44'src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="netflix logo"/>
    
    {user && (<div className='flex p-4'>
      <img alt="user-logo" className="h-14 w-14 cursor-pointer" src='https://cdn5.vectorstock.com/i/1000x1000/68/24/user-sign-red-icon-with-soft-vector-13336824.jpg'></img>
      <button className='p-4 cursor-pointer font-bold' onClick={handleSignOut}> Sign Out</button>
    </div>)}
    </div>
    </>
  )
}

export default Header