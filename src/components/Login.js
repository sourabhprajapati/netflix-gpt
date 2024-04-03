import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const[isSigninForm,setisSigninForm]=useState(true);
  const toggleSignInForm=()=>{
      setisSigninForm(!isSigninForm)
  }
  return (
    <div>
        <Header/>

        <div className='absolute' >
        <img
        
          src= "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
        </div>
        <form className=' w-4/12 absolute p-8 my-32 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg' >
          <h1 className='font-bold text-3xl py-4'>{isSigninForm?"Sign In":"Sign Up"}</h1>
          {!isSigninForm &&
            <input type="text" placeholder='Full Name' className='p-3 my-3 w-full bg-gray-700 rounded-lg' />}
          <input type="text" placeholder='Email Address' className='p-3 my-3 w-full bg-gray-700 rounded-lg' />
          <input type="password" placeholder='password' className='p-4 my-3 w-full  bg-gray-700  rounded-lg' />
          <button className='p-3 my-5 bg-red-700 w-full rounded-lg'>{isSigninForm?"Sign In":"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSigninForm?"New to Netflix?Sign Up Now":"Already register?Sign In Now"}
          </p>
        </form>
      
    </div>
  )
}

export default Login