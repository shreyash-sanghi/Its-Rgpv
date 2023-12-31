import React from 'react'
import vedanshdeveloper from '../assets/vedanshdeveloper5.png'
import shreyashdeveloper from '../assets/shreyashdeveloper2.png'
import Footer from './Footer'
import Navbar from './Navbar'

const Team = () => {
  return (
    <>
    <Navbar/>
    <section className="px-12">
    <div className="container px-6 my-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-6xl dark:text-white">Developers Team</h1>

                <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    We both identify the problem that first year students are always confused about college clubs, events, start-ups and other necessary details. Hence, we made a common platform where anyone can explore about the college. This platform is an absolute solution to bring all the pearls together in a single thread.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                <div>
                    <img className="object-cover rounded-xl aspect-square teamimg" src={vedanshdeveloper} alt=""/>

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Vedansh Jain</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Frontend Developer</p>
                    <a href=""><p className='text-white text-2xl'><i className="ri-arrow-right-up-fill"></i></p></a>
                </div>

                <div>
                    <img className="object-cover rounded-xl aspect-square teamimg" src={shreyashdeveloper} alt=""/>

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Shreyash Jain</h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Backend Developer</p>
                    <a href=""><p className='text-white text-2xl'><i className="ri-arrow-right-up-fill"></i></p></a>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
    </>
  )
}

export default Team