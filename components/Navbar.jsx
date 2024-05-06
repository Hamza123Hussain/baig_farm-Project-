'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(true)
  const { data: session } = useSession()

  const Signinorout = () => {
    session?.user.name ? signOut() : signIn('google')
  }

  return (
    <div className=" w-full sm:fixed sm:mb-10 sm:-top-3 py-1">
      <div className="w-full text-black backdrop-blur-sm dark-mode:text-gray-200 dark-mode:bg-gray-800 ">
        <div className="flex flex-col max-w-screen-xl  mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center gap-2 ">
            <a
              href="/"
              className=" flex items-center gap-2 text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              <img
                src="WhatsApp_Image_2024-04-28_at_21.05.39_6b5e3355-removebg-preview.png"
                alt=""
                className=" w-12 mt-2"
              />
              Baig Cattle Farm
            </a>
          </div>
          <nav
            className={`flex-col 
               'flex' 
               pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            <button
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              onClick={Signinorout}
            >
              {session?.user.name ? ` ${session?.user?.name}` : 'Sign in'}
            </button>
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
