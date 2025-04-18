import React from 'react'

import '../App.css'

export default function Home() {
  return (
    <>
      {/* Div for Navbar. */}
      <div className="navbar flex justify-around items-center py-3 shadow-sm shadow-black">

        {/* Div for logo. */}
        <div className="logo">
          <img className='h-[3rem]' src="/Photos/Logo.png" alt="" />
        </div>

        {/* Div for links. */}
        <div className="links Inter">
          <a href='#' className='ml-3 text-sm'>Courses</a>
          <a href='#' className='ml-3 text-sm'>Classes</a>
          <a href='#' className='ml-3 text-sm'>For  Student</a>
          <a href='#' className='ml-3 text-sm'>For  Educators</a>
        </div>

        {/* Div for Buttons. */}
        <div className="buttons">
          <button className="democlass blacksecondbackgroundcolor py-2 px-4 rounded-md text-white font-semibold Inter">Demo Class</button>
          <button className="SignUp mainbluebackgroundcolor py-2 px-4 rounded-md text-white font-semibold Inter ml-2">Sign Up</button>
        </div>

      </div>

      {/* Div for Text & Image. */}
      <div className="textImage flex w-[90vw] h-max mx-auto items-center my-5 justify-between">

        {/* Div for Text. */}
        <div className="text w-[50vw]">
          <h1 className='Montserrat text-4xl text-black font-semibold'>Empower Your Mind, Transform Your Future</h1>
          <h1 className='Montserrat mainbluecolor font-bold text-2xl my-2'># Explore, Learn, Achieve Your Growth, Your Way.</h1>
          <h1 className='Lato text-xl'>Welcome to Self Upgrade, the platform where your aspirations take flight. With courses designed by industry experts, we bring you the skills, knowledge, and confidence to thrive in your personal and professional journey. Join us today and unlock your potential</h1>

          {/* Div for Buttons. */}
          <div className="buttons mt-10">
            <button className="Learn Now mainbluebackgroundcolor py-2 px-4 rounded-md text-white font-semibold Inter">Learn Now</button>
            <button className="Join WorkShops blacksecondbackgroundcolor py-2 px-4 rounded-md text-white font-semibold Inter ml-2">Join WorkShops</button>
          </div>

        </div>

        {/* Div for Image. */}
        <div className="Image">
          <img src="/Photos/TeachingImg.png" alt="" />
        </div>

      </div>

      {/* Div for companies, countries flags. */}
      
    </>

  )
}
