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
      <div className="CompaniesCountries w-[95vw] flex justify-around items-center mx-auto">

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

      {/* Div for Courses. */}
      <div className="Courses w-[95vw] flex flex-col mx-auto">

        {/* Div for Heading. */}
        <div className="heading flex mx-auto">
          <h1 className='Montserrat text-lg'>Popular Courses, Workshops</h1>
        </div>

        {/* Div for heading & Icon. */}
        <div className="headingicon flex justify-between items-center w-[80vw] mx-auto">

          <h1 className='Montserrat font-bold text-2xl'>Enroll Our Best Courses, Workshops</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill mainbluecolor cursor-pointer" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>

        {/* Div for Course cards. */}
        <div className="Coursecards w-[80vw] flex justify-between items-stretch mx-auto my-2">

          {/* Div for Quantum Computer Course. */}
          <div className="Quantumcomputer shadow-sm shadow-black rounded-md">

            {/* Div for image. */}
            <div className="image">
              <img className='rounded-t-md h-[13.5rem] mb-4' src="/Photos/Quantum Computer Image.png" alt="" />
            </div>

            {/* Div for Course Details. */}
            <div className="coursedetails px-4">

              {/* Div for title & rating. */}
              <div className="titlerating">
                {/* Course title. */}
                <h1 className='font-bold Inter text-lg leading-[0.6]'>Quantum Computing Course</h1>
                {/* Rating. */}
                <h1><span className="rating mainbluebackgroundcolor text-white px-2 rounded-full mr-1 text-xs leading-[0]">4.8</span>Rating</h1>
              </div>

              {/* Div for Icons. */}
              <div className="icons mt-2">

                {/* Div for People Enrolled. */}
                <div className="peopleenl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-people-fill mainbluecolor" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                  <h1 className='Inter text-xs font-semibold ml-1'>3,098</h1>
                </div>

                {/* Div for Lessons. */}
                <div className="peopleenl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-file-earmark-text-fill mainbluecolor" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
                  </svg>
                  <h1 className='Inter text-xs font-semibold ml-1'>22</h1>
                </div>

                {/* Div for Price detials. */}
                <div className="pricedetails mt-1 w-full flex items-center justify-between Inter">
                  <div className="price flex items-center">
                    <h1 className='font-semibold text-sm'>₹999</h1>
                    <h1 className='font-light text-sm ml-1 line-through'>₹2999</h1>
                  </div>
                  <div className="text">
                    <h1 className='font-semibold text-sm'>70% off Limited Time</h1>
                  </div>
                </div>

                {/* Div for Buttons. */}
                <div className="buttons my-2 flex w-full justify-between">
                  <button className="blacksecondbackgroundcolor py-2 px-4 rounded-sm text-white font-semibold Inter text-xs flex items-center">Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill ml-2" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg></button>
                  <button className="mainbluebackgroundcolor py-2 px-4 rounded-sm text-white font-semibold Inter text-xs flex items-center">Add to Cart Button <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3 ml-2" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg></button>
                </div>

              </div>
            </div>

          </div>

          {/* Div for Applied AI & ML Course Course. */}
          <div className="Applied AI & ML Course shadow-sm shadow-black rounded-md">

            {/* Div for image. */}
            <div className="image">
              <img className='rounded-t-md h-[13.5rem] mb-4' src="/Photos/AI & ML.png" alt="" />
            </div>

            {/* Div for Course Details. */}
            <div className="coursedetails px-4">

              {/* Div for title & rating. */}
              <div className="titlerating">
                {/* Course title. */}
                <h1 className='font-bold Inter text-lg leading-[0.6]'>Applied AI & ML Course</h1>
                {/* Rating. */}
                <h1><span className="rating mainbluebackgroundcolor text-white px-2 rounded-full mr-1 text-xs leading-[0]">4.5</span>Rating</h1>
              </div>

              {/* Div for Icons. */}
              <div className="icons mt-2">

                {/* Div for People Enrolled. */}
                <div className="peopleenl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-people-fill mainbluecolor" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                  <h1 className='Inter text-xs font-semibold ml-1'>2,785</h1>
                </div>

                {/* Div for Lessons. */}
                <div className="peopleenl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-file-earmark-text-fill mainbluecolor" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
                  </svg>
                  <h1 className='Inter text-xs font-semibold ml-1'>36</h1>
                </div>

                {/* Div for Price detials. */}
                <div className="pricedetails mt-1 w-full flex items-center justify-between Inter">
                  <div className="price flex items-center">
                    <h1 className='font-semibold text-sm'>₹1999</h1>
                    <h1 className='font-light text-sm ml-1 line-through'>₹3999</h1>
                  </div>
                  <div className="text">
                    <h1 className='font-semibold text-sm'>50% off Limited Time</h1>
                  </div>
                </div>

                {/* Div for Buttons. */}
                <div className="buttons my-2 flex w-full justify-between">
                  <button className="blacksecondbackgroundcolor py-2 px-4 rounded-sm text-white font-semibold Inter text-xs flex items-center">Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill ml-2" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg></button>
                  <button className="mainbluebackgroundcolor py-2 px-4 rounded-sm text-white font-semibold Inter text-xs flex items-center">Add to Cart Button <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3 ml-2" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg></button>
                </div>

              </div>
            </div>

          </div>

          {/* Div for Cyber Security Course Course. */}
          <div className="Cyber Security Course shadow-sm shadow-black rounded-md">

            {/* Div for image. */}
            <div className="image">
              <img className='rounded-t-md h-[13.5rem] mb-4' src="/Photos/Cyber Security.png" alt="" />
            </div>

            {/* Div for Course Details. */}
            <div className="coursedetails px-4">

              {/* Div for title & rating. */}
              <div className="titlerating">
                {/* Course title. */}
                <h1 className='font-bold Inter text-lg leading-[0.6]'>Cyber Security Course</h1>
                {/* Rating. */}
                <h1><span className="rating mainbluebackgroundcolor text-white px-2 rounded-full mr-1 text-xs leading-[0]">4.2</span>Rating</h1>
              </div>

              {/* Div for Icons. */}
              <div className="icons mt-2">

                {/* Div for People Enrolled. */}
                <div className="peopleenl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-people-fill mainbluecolor" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                  <h1 className='Inter text-xs font-semibold ml-1'>1,226</h1>
                </div>

                {/* Div for Lessons. */}
                <div className="peopleenl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-file-earmark-text-fill mainbluecolor" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
                  </svg>
                  <h1 className='Inter text-xs font-semibold ml-1'>42</h1>
                </div>

                {/* Div for Price detials. */}
                <div className="pricedetails mt-1 w-full flex items-center justify-between Inter">
                  <div className="price flex items-center">
                    <h1 className='font-semibold text-sm'>₹1599</h1>
                    <h1 className='font-light text-sm ml-1 line-through'>₹3299</h1>
                  </div>
                  <div className="text">
                    <h1 className='font-semibold text-sm'>50% off Limited Time</h1>
                  </div>
                </div>

                {/* Div for Buttons. */}
                <div className="buttons mt-2 mb-6 flex w-full justify-between">
                  <button className="blacksecondbackgroundcolor py-2 px-4 rounded-sm text-white font-semibold Inter text-xs flex items-center">Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill ml-2" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg></button>
                  <button className="mainbluebackgroundcolor py-2 px-4 rounded-sm text-white font-semibold Inter text-xs flex items-center">Add to Cart Button <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3 ml-2" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg></button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Div for Self Upgrade.*/}
      <div className="selfupgrade w-full flex flex-col justify-center">
        <h1 className='Montserrat font-bold text-center text-2xl my-4'>Self Upgrade: The Best Choice for Learning!</h1>

        {/* Div for Features & Main Features. */}
        <div className="featuresMainfeatures flex justify-center items-stretch">

          {/* Div for Features. */}
          <div className="Features flex flex-col mr-2">
            {/* Div for Feature1 */}
            <div className="feature1 blacksecondbackgroundcolor w-max h-max rounded-lg flex flex-col items-center py-2 px-3">
              <h1 className='Montserrat font-bold text-white'>Quality</h1>
              <img src="/Photos/Feature1.png" className='h-[6rem]' alt="" />
            </div>
            {/* Div for Feature2 */}
            <div className="feature2 blacksecondbackgroundcolor w-max h-max rounded-lg flex flex-col items-center py-2 px-3 mt-2">
              <h1 className='Montserrat font-bold text-white'>Pricing</h1>
              <img src="/Photos/Feature2.png" className='h-[6rem]' alt="" />
            </div>
          </div>

          {/* Div for MainFeatures. */}
          <div className="mainfeatures mainbluebackgroundcolor rounded-md w-max px-4 py-3  flex flex-col justify-between">
            <h1 className='Montserrat text-white font-bold text-2xl mb-2 text-center'>Why Learners Trust Us</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10'>Experienced Instructors</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10'>Comprehensive Course Material</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10'>Flexible Learning Schedule</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10'>Interactive Learning Experience</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10'>Strong Community Support</h1>
          </div>

        </div>
      </div>

      {/* Div for Specialprogram. */}
      <div className="specialprogram flex w-[100vw] justify-around items-center mt-5">
        {/* Div for text. */}
        <div className="text w-[45vw] text-center">
          <h1 className='text-base font-semibold Montserrat'><span className='italic'>Exciting News!</span> We’ve reached 20,000 students, and to celebrate, we're hosting a special test top 100 performers will get ANY 1 course for FREE! Register now limited time only! </h1>
        </div>
        {/* Div for form. */}
        <div className="form mainbluebackgroundcolor w-[40vw] py-4 px-5 rounded-md">

          {/* Div for firstName, LastName. */}
          <div className="firstnamelastname flex justify-between w-full">
            {/* Div for FirstName. */}
            <div className="firstname w-full mr-2">
              <h1 className='text-white font-semibold Montserrat'>First Name</h1>
              <input type="name" placeholder='First Name' className='w-full px-2 pb-1 rounded-md' />
            </div>
            {/* Div for LastName. */}
            <div className="LastName w-full">
              <h1 className='text-white font-semibold Montserrat'>Last Name</h1>
              <input type="name" placeholder='First Name' className='w-full px-2 pb-1 rounded-md' />
            </div>
          </div>

          {/* Div for Email. */}
          <div className="Email w-full mt-1">
            <h1 className='text-white font-semibold Montserrat'>Email</h1>
            <input type="name" placeholder='example123@gmail.com' className='w-full px-2 pb-1 rounded-md' />
          </div>

        </div>
      </div>

    </>

  )
}
