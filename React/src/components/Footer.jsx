import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="px-5 md:px-12 pb-4 mx-auto footer">
  <div className="container px-2 md:px-5 pt-20 pb-8 mx-auto">
    <div className="flex justify-evenly w-full flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className='flex sm:w-1/3 md:w-1/3 justify-evenly '>
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="#" className="">Library & KRC Lab</a>
          </li>
          <li>
            <a href="#" className="">Important Links</a>
          </li>
          <li>
            <a href="#" className="">Sports Complex</a>
          </li>
          <li>
            <a href="#" className="">About UIT</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link to={"/start-ups"} className="">Start-ups</Link>
          </li>
          <li>
          <Link to='/scholarships'>Scholarships Info</Link>
          </li>
          <li>
            <Link to={"/photogallery"} className="">Photo Gallery</Link>
          </li>
          <li>
            <a href="#" className="">Department Labs</a>
          </li>
        </nav>
      </div>
      </div>
       <div className='flex md:w-1/3 justify-evenly '>
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
          <a href="#" className=""><NavLink to='/hostel-info'>Hostel Info</NavLink></a>
          </li>
          <li>
            <a href="#" className="">Induction Program</a>
          </li>
          <li>
            <Link to={"/Placement"} className="">Placement</Link>
          </li>
          <li>
            <a href="#" className="">FAQ's</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <Link to={"/NssNcc"} className="">Nss & Ncc</Link>
          </li>
          <li>
            <a href="#" className="">Student's Rating</a>
          </li>
          <li>
            <Link to={"/ClubSocities"} className="">College Clubs</Link>
          </li>
          <li>
            <Link to={"/CollegeFest"} className="">College Fests</Link>
          </li>
        </nav>
      </div>
     </div>
   <div className='flex md:w-1/3 justify-evenly '>
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase">Institution</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="#" className=""><NavLink to='/vice-chancellor-message'>VC's Message</NavLink></a>
          </li>
          <li>
            <a href="#" className=""><NavLink to='/director-message'>Director's Message</NavLink></a>
          </li>
          <li>
          <a href="#" className=""><NavLink to='/head-of-departments'>Hod's Team</NavLink></a>
          </li>
          <li>
            <a href="https://www.uitrgpv.ac.in/pdf/nirf_ranking.pdf" target='blank' className="">Nirf Ranking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase">Study Material</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="https://www.rgpvnotes.in/btech/grading-system-old/notes/p/first-year" target='blank' className="">Gate Result</a>
          </li>
          <li>
            <a href="https://www.rgpvnotes.in/btech/grading-system-old/notes/" target='blank' className="">Notes & Books</a>
          </li>
          <li>
            <Link to="/ComplaintForm"  className="">Complaint's Form</Link>
          </li>
          <li>
            <Link to={"/Team"}  className="">Our Team</Link>
          </li>
        </nav>
      </div>
    </div>
    </div>
  </div>
  <div className=" border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label for="footer-field" className="leading-7 text-sm">Your Email</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full text-blue-500 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white footer-btn border-0 py-2 px-6 focus:outline-none  rounded">Get Updates</button>
        <p className=" text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Subscribe to get new updates for everything.
          <br className="lg:block hidden"/>Don't miss out any opportunity.
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a href="#" className="">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="#" className="ml-3">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="#" className="ml-3">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="#" className="ml-3">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-sm text-center sm:text-left">© 2023 LinkUp —
        <a href="" className="ml-1" target="_blank" rel="noopener noreferrer">All Rights Reserved</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-sm">Made With ❤️ By Vedansh & Shreyash</span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer