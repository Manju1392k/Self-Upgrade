import React, { useState } from 'react'
import '../App.css'

import { ToastContainer, toast } from 'react-toastify';

export default function Home() {

  const [Menubar, setMenubar] = useState(false)

  // Function to open Menubar.
  const OpenMenubar = () => {
    setMenubar(!Menubar)
  }

  // Function to close Menubar.
  const CloseMenubar = () => {
    setMenubar(false)
  }

  // useState to store formdata.
  const [Formdata, setFormdata] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    CurrentPosition: "",
  });

  // Function to handle input tags  in a controlled manner.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...Formdata, [name]: value });
  };

  // Function to save form data into MongoDB.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/saveUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Formdata),
      });
      // eslint-disable-next-line no-unused-vars
      const result = await response.json();
      if (response.ok) {
        toast.success('Successfully you entered our program.');
        setFormdata({ FirstName: "", LastName: "", Email: "", Phone: "", CurrentPosition: "" });
      } else {
        toast.error("Failed to save data");
      }
    } catch (error) {
      toast.error("Server error", error);
    }
  };

  return (
    <>

      {/* Toast container for notifications. */}
      <ToastContainer />

      {/* Div for Navbar. */}
      <div className="navbar flex justify-around items-center py-3 shadow-sm shadow-black sm:hidden lg:hidden">

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

      {/* Div for Navbar (Responsive design). */}
      <div className="Navbar-Responsive-design hidden sm:flex lg:flex shadow-sm shadow-black w-full py-3 justify-around items-center">

        {/* Div for logo. */}
        <div className="logo">
          <img className='h-[3rem]' src="/Photos/Logo.png" alt="" />
        </div>

        {/* Div for MenuIcon. */}
        <div className="MenuIcon" onClick={OpenMenubar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>

      </div>

      {/* Div for Menubar. */}
      <div className={`Menubar  ${Menubar ? 'OpenMenubar' : 'hidden'} w-full h-max bg-white flex-col fixed top-0`}>

        {/* Div for closeicon. */}
        <div className="Closeicon w-full flex justify-end" onClick={CloseMenubar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill mx-7 my-2" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </div>

        {/* Div for Links. */}
        <div className="links flex flex-col items-center">
          <a href='#' className='mt-2 text-sm'>Courses</a>
          <a href='#' className='mt-2 text-sm'>Classes</a>
          <a href='#' className='mt-2 text-sm'>For  Student</a>
          <a href='#' className='mt-2 text-sm'>For  Educators</a>
        </div>

        {/* Div for Buttons. */}
        <div className="buttons flex flex-col items-center">
          <button className="democlass blacksecondbackgroundcolor py-2 px-4 rounded-md text-white font-semibold Inter mt-2">Demo Class</button>
          <button className="SignUp mainbluebackgroundcolor py-2 px-4 rounded-md text-white font-semibold Inter my-2">Sign Up</button>
        </div>

      </div>


      {/* Div for Text & Image. */}
      <div className="textImage flex w-[90vw] h-max mx-auto items-center my-5 justify-between sm:flex-col lg:flex-col sm:items-center lg:items-center">

        {/* Div for Text. */}
        <div className="text w-[50vw] sm:w-[80vw] lg:w-[80vw] sm:text-center lg:text-center">
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
          <img src="/Photos/TeachingImg.png" alt="" className='sm:flex lg:flex sm:mx-auto lg:mx-auto sm:h-[15rem] lg:h-[15rem] sm:mt-6 lg:mt-6' />
        </div>

      </div>

      {/* Div for companies, countries flags. */}
      <div className="CompaniesCountries w-[95vw] flex justify-around items-center mx-auto sm:flex-col lg:flex-col">

        {/* Div for Companies. */}
        <div className="Companies w-[45vw] flex flex-col items-center sm:w-[90vw] lg:w-[90vw]">
          {/* Div for border. */}
          <div className="border mainbluebackgroundcolor py-1 rounded-full w-full">
          </div>
          {/* Div for text. */}
          <div className="text">
            <h1 className='Montserrat font-semibold text-xl mt-1 mb-2 sm:text-center lg:text-center'>Trusted by leading tech companies</h1>
          </div>
          {/* Div for Companies Icons. */}
          <div className="CompaniesIcons flex items-center sm:flex-wrap lg:flex-wrap sm:justify-center lg:justify-center">
            <img src="/Photos/google.png" className='h-[2rem] sm:h-[3rem] lg:h-[3rem] ml-3' alt="" />
            <img src="/Photos/meta.png" className='h-[3rem] sm:h-[4rem] lg:h-[4rem] ml-3' alt="" />
            <img src="/Photos/microsoft.png" className='h-[3rem] sm:h-[4rem] lg:h-[4rem] ml-3' alt="" />
            <img src="/Photos/apple.png" className='h-[3rem] sm:h-[4rem] lg:h-[4rem] ml-3' alt="" />
          </div>
        </div>

        {/* Div for Countries. */}
        <div className="Countries w-[45vw] flex flex-col items-center sm:w-[90vw] lg:w-[90vw]">
          {/* Div for text. */}
          <div className="text">
            <h1 className='Montserrat font-semibold text-xl sm:text-center lg:text-center'>Our learners span the globe</h1>
          </div>
          {/* Div for Countries Icons. */}
          <div className="CountriesIcons flex items-center mt-3 mb-3 sm:flex-wrap lg:flex-wrap sm:justify-center lg:justify-center">
            <img src="/Photos/India.png" className='h-[2rem] sm:h-[3rem] lg:h-[3rem]  my-1 ml-3' alt="" />
            <img src="/Photos/Canada.png" className='h-[2rem] sm:h-[3rem] lg:h-[3rem]  my-1 ml-3' alt="" />
            <img src="/Photos/China.png" className='h-[2rem] sm:h-[3rem] lg:h-[3rem]  my-1 ml-3' alt="" />
            <img src="/Photos/Usa.png" className='h-[2rem] sm:h-[3rem] lg:h-[3rem]  my-1 ml-3' alt="" />
          </div>
          {/* Div for border. */}
          <div className="border blacksecondbackgroundcolor py-1 rounded-full w-full">
          </div>
        </div>

      </div>

      {/* Div for Students Image & Text. */}
      <div className="studenttext flex justify-around items-center w-[90vw] mx-auto sm:flex-col lg:flex-col sm:text-center lg:text-center">
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
          <h1 className='Montserrat text-lg sm:mt-3 lg:mt-3'>Popular Courses, Workshops</h1>
        </div>

        {/* Div for heading & Icon. */}
        <div className="headingicon flex justify-between items-center w-[80vw] mx-auto sm:flex-col lg:flex-col">

          <h1 className='Montserrat font-bold text-2xl sm:text-center lg:text-center'>Enroll Our Best Courses, Workshops</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill mainbluecolor cursor-pointer" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>

        {/* Div for Course cards. */}
        <div className="Coursecards w-[80vw] flex justify-between items-stretch mx-auto my-2 sm:flex-col lg:flex-col sm:w-[90vw] lg:w-[90vw]">

          {/* Div for Quantum Computer Course. */}
          <div className="Quantumcomputer shadow-sm shadow-black rounded-md sm:mb-4 lg:mb-4">

            {/* Div for image. */}
            <div className="image">
              <img className='rounded-t-md h-[13.5rem] mb-4 sm:w-full lg:w-full' src="/Photos/Quantum Computer Image.png" alt="" />
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
          <div className="Applied AI & ML Course shadow-sm shadow-black rounded-md sm:mb-4 lg:mb-4">

            {/* Div for image. */}
            <div className="image">
              <img className='rounded-t-md h-[13.5rem] mb-4 sm:w-full lg:w-full' src="/Photos/AI & ML.png" alt="" />
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
          <div className="Cyber Security Course shadow-sm shadow-black rounded-md sm:mb-4 lg:mb-4">

            {/* Div for image. */}
            <div className="image">
              <img className='rounded-t-md h-[13.5rem] mb-4 sm:w-full lg:w-full' src="/Photos/Cyber Security.png" alt="" />
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
      <div className="selfupgrade w-full flex flex-col justify-center sm:items-center lg:items-center">
        <h1 className='Montserrat font-bold text-center text-2xl my-4 sm:text-center lg:text-center'>Self Upgrade: The Best Choice for Learning!</h1>

        {/* Div for Features & Main Features. */}
        <div className="featuresMainfeatures flex justify-center items-stretch sm:flex-col lg:flex-col">

          {/* Div for Features. */}
          <div className="Features flex flex-col mr-2 sm:flex-row lg:flex-row sm:w-full lg:w-full sm:justify-center lg:justify-center sm:items-stretch lg:items-stretch">
            {/* Div for Feature1 */}
            <div className="feature1 blacksecondbackgroundcolor w-max h-max rounded-lg flex flex-col items-center py-2 px-3">
              <h1 className='Montserrat font-bold text-white'>Quality</h1>
              <img src="/Photos/Feature1.png" className='h-[6rem]' alt="" />
            </div>
            {/* Div for Feature2 */}
            <div className="feature2 blacksecondbackgroundcolor w-max h-max rounded-lg flex flex-col items-center py-2 px-3 mt-2 sm:mt-0 lg:mt-0 sm:mx-3 lg:mx-3">
              <h1 className='Montserrat font-bold text-white'>Pricing</h1>
              <img src="/Photos/Feature2.png" className='h-[6rem]' alt="" />
            </div>
          </div>

          {/* Div for MainFeatures. */}
          <div className="mainfeatures mainbluebackgroundcolor rounded-md w-max px-4 py-3  flex flex-col justify-between sm:mt-3 lg:mt-3 sm:w-[80vw] lg:w-[80vw] sm:mx-auto lg:mx-auto">
            <h1 className='Montserrat text-white font-bold text-2xl mb-2 text-center'>Why Learners Trust Us</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10 sm:mb-2 lg:mb-2'>Experienced Instructors</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10 sm:mb-2 lg:mb-2'>Comprehensive Course Material</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10 sm:mb-2 lg:mb-2'>Flexible Learning Schedule</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10 sm:mb-2 lg:mb-2'>Interactive Learning Experience</h1>
            <h1 className='Montserrat bg-white text-black font-medium rounded-sm text-center py-2 px-10 sm:mb-2 lg:mb-2'>Strong Community Support</h1>
          </div>

        </div>
      </div>

      {/* Div for Specialprogram. */}
      <div className="specialprogram flex w-[100vw] justify-around items-center mt-5 sm:flex-col lg:flex-col">
        {/* Div for text. */}
        <div className="text w-[45vw] text-center sm:w-[95vw] lg:w-[95vw]">
          <h1 className='text-base font-semibold Montserrat'><span className='italic'>Exciting News!</span> We’ve reached 20,000 students, and to celebrate, we're hosting a special test top 100 performers will get ANY 1 course for FREE! Register now limited time only! </h1>
        </div>

        {/* Div for form. */}
        <div className="form mainbluebackgroundcolor w-[40vw] py-4 px-5 rounded-md sm:w-[95vw] lg:w-[95vw] sm:mt-4 lg:mt-4">

          {/* Form for saving data in db. */}
          <form onSubmit={handleSubmit}>

            {/* Div for firstName, LastName. */}
            <div className="firstnamelastname flex justify-between w-full sm:flex-col lg:flex-col">
              {/* Div for FirstName. */}
              <div className="firstname w-full mr-2">
                <h1 className='text-white font-semibold Montserrat'>First Name</h1>
                <input type="name" placeholder='First Name' className='w-full px-2 pb-1 rounded-md' name='FirstName'
                  onChange={handleChange} value={Formdata.FirstName}
                  required />
              </div>
              {/* Div for LastName. */}
              <div className="LastName w-full">
                <h1 className='text-white font-semibold Montserrat'>Last Name</h1>
                <input type="name" placeholder='First Name' className='w-full px-2 pb-1 rounded-md' name='LastName'
                  onChange={handleChange} value={Formdata.LastName}
                  required />
              </div>
            </div>

            {/* Div for Email. */}
            <div className="Email w-full mt-1">
              <h1 className='text-white font-semibold Montserrat'>Email</h1>
              <input type="name" placeholder='example123@gmail.com' className='w-full px-2 pb-1 rounded-md' name='Email'
                onChange={handleChange} value={Formdata.Email}
                required />
            </div>

            {/* Div for Phone. */}
            <div className="Phone w-full mt-1">
              <h1 className='text-white font-semibold Montserrat'>Phone</h1>
              <input type="name" placeholder='+91 558866940' className='w-full px-2 pb-1 rounded-md' name='Phone'
                onChange={handleChange} value={Formdata.Phone}
                required />
            </div>

            {/* Div for Current Position. */}
            <div className="Current Position w-full mt-1">
              <h1 className='text-white font-semibold Montserrat'>Current Position</h1>
              <input type="name" placeholder='Student or Software Engineer' className='w-full px-2 pb-1 rounded-md' name='CurrentPosition'
                onChange={handleChange} value={Formdata.CurrentPosition}
                required />
            </div>

            {/* Div for button.*/}
            <div className="button">
              <button className='Register blacksecondbackgroundcolor w-full py-1 rounded-md mt-4 text-white '>Register</button>
            </div>

          </form>

        </div>
      </div>

      {/* Div for footer. */}
      <div className="footer blacksecondbackgroundcolor w-full flex justify-around items-center py-5 mt-5 sm:flex-col lg:flex-col">

        {/* Div for followUs. */}
        <div className="followus flex flex-col">
          <h1 className='text-white font-bold text-base Montserrat'>Follow Us</h1>
          {/* Div for Icons. */}
          <div className="Icons flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram text-white mr-2" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook text-white mr-2" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube text-white mr-2" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x text-white mr-2" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </div>
        </div>

        {/* Div for Footer Info section. */}
        <div className="footerinfosection flex justify-around items-top w-[70vw] sm:flex-col lg:flex-col sm:mx-auto lg:mx-auto sm:w-[40vw] lg:w-[40vw] sm:mt-3  lg:mt-3">
          {/* Div for Payment. */}
          <div className="payment">
            <h1 className='text-white font-bold text-base Montserrat mb-2'>Payment</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>UPI</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Rupay</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Paypal</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Debit / Credit Card</h1>
          </div>

          {/* Div for Customer Support. */}
          <div className="Customer Support">
            <h1 className='text-white font-bold text-base Montserrat mb-2'>Customer Support</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Whatsapp</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Email</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>24/7 support call service</h1>
          </div>

          {/* Div for Company Information. */}
          <div className="Company Information">
            <h1 className='text-white font-bold text-base Montserrat mb-2'>Company Information</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>About Us</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Careers</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Press Releases</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Investor Relations</h1>
          </div>

          {/* Div for Legal. */}
          <div className="Legal">
            <h1 className='text-white font-bold text-base Montserrat mb-2'>Legal</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Privacy Policy</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Cookie Policy</h1>
            <h1 className='text-white font-bold text-sm Montserrat'>Cookie Policy</h1>
          </div>
        </div>


      </div>

    </>

  )
}
