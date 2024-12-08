import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../Utils/Validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const validateFormData = () =>{
    console.log(email.current.value);
    console.log(password.current.value);
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);

    if(message) return ;

    if(!isSignInForm){
        // Sign Up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
        
    } else {
        // Sign In logic 
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
  }

  const signInToggle = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg" />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h2 className="font-bold text-3xl py-2">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 "
          ></input>
        )}
        {!isSignInForm && (
          <input
            type="number"
            placeholder="Phone Number"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input ref={email}
          type="text"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full bg-gray-700 "
        ></input>
        <input ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full bg-gray-700 "
        ></input>
        <p className="text-red-600 font-bold text-lg p-2"> {errorMessage} </p>
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={validateFormData}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={signInToggle}>
          {" "}
          {isSignInForm
            ? "New to NetFlix ? Sign Up Now"
            : "Already Registered ? Sign In ..."}
        </p>
      </form>
    </>
  );
};

export default Login;
