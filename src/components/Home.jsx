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
      <div className="CompaniesCountries w-[100vw] flex justify-around items-center">

        {/* Div for Companies. */}
        <div className="Companies w-[45vw] flex flex-col items-center">
          {/* Div for border. */}
          <div className="border mainbluebackgroundcolor py-1 rounded-full w-full">
          </div>
          {/* Div for text. */}
          <div className="text">
            <h1 className='Montserrat font-semibold text-xl mt-1 mb-2'>Trusted by leading tech companies</h1>
          </div>
          {/* Div for Companies Icons. */}
          <div className="CompaniesIcons flex items-center">
            <img src="/Photos/google.png" className='h-[2rem] ml-3' alt="" />
            <img src="/Photos/meta.png" className='h-[3rem] ml-3' alt="" />
            <img src="/Photos/microsoft.png" className='h-[3rem] ml-3' alt="" />
            <img src="/Photos/apple.png" className='h-[3rem] ml-3' alt="" />
          </div>
        </div>

        {/* Div for Countries. */}
        <div className="Countries w-[45vw] flex flex-col items-center">
          {/* Div for text. */}
          <div className="text">
            <h1 className='Montserrat font-semibold text-xl'>Our learners span the globe</h1>
          </div>
          {/* Div for Countries Icons. */}
          <div className="CountriesIcons flex items-center mt-3 mb-3">
            <img src="/Photos/India.png" className='h-[2rem] ml-3' alt="" />
            <img src="/Photos/Canada.png" className='h-[2rem] ml-3' alt="" />
            <img src="/Photos/China.png" className='h-[2rem] ml-3' alt="" />
            <img src="/Photos/Usa.png" className='h-[2rem] ml-3' alt="" />
          </div>
          {/* Div for border. */}
          <div className="border blacksecondbackgroundcolor py-1 rounded-full w-full">
          </div>
        </div>

      </div>

      {/* Div for Students Image & Text. */}
      <div className="studenttext flex justify-around items-center w-[90vw] mx-auto">
        {/* Div for Image. */}
        <div className="Image">
          <img className='h-[20rem]' src="/Photos/Student Image.png" alt="" />
        </div>
        {/* Div for Text. */}
        <div className="text w-[70vw]">
          <h1 className='font-semibold Montserrat text-3xl'>Join Over 20k Achievers Your Success Story Starts Here</h1>
          <h1 className='Lato text-base mt-2'>At Self Upgrade, we've empowered over 20,000 learners to master new skills and land opportunities with leading tech companies. Whether it's workshops or courses, our platform equips you with the tools to excel in your career journey. Become the next success story today</h1>
        </div>
      </div>

    </>

  )
}
