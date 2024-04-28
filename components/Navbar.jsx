'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className=" w-full mb-5 sm:fixed  sm:-top-3 p-1">
      <div className="w-full text-black backdrop-blur-sm dark-mode:text-gray-200 dark-mode:bg-gray-800 mb-5">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVs9dNRoAjOqCx21amE4LBPoEa-lfCOIEOmJslm6QXdQ&s"
              alt=""
              className=" w-12"
            />
            <a
              href="/"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              Baig Cattle Farm
            </a>
          </div>
          <nav
            className={`flex-col 
               'flex' 
               pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Sign In
            </a>
            <Link
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="/Contact"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar
