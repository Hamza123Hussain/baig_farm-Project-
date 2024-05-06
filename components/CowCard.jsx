'use client'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const CowCard = ({ Data }) => {
  const { data: session } = useSession()
  const [sold, setsold] = useState(false)

  const sell = () => {
    session.user?.name ? setsold(!sold) : ''
  }

  return (
    <div className="w-[100vw] sm:w-[50vw] mx-auto opacity-115">
      <div className="flex items-center justify-center ">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3 ">
          <div className=" bg-white  text-black rounded-lg overflow-hidden border-2 border-gray-100">
            <div
              className={`bg-cover bg-center ${
                sold ? 'opacity-15' : 'opacity-100'
              }   `}
            >
              <img className="w-[400px]   h-[250px]" src={Data.Image} alt="" />
            </div>
            <div className={`${sold ? 'opacity-15' : 'opacity-100'} p-4 my-2 `}>
              <p className=" text-sm sm:text-3xl mb-5">
                {' '}
                Weight {Data.weight} KG
              </p>
              <p className=" text-sm sm:text-lg text-gray-800">
                {' '}
                Price {Data.Price} <sub> Per KG</sub>{' '}
              </p>
            </div>

            <button
              onClick={sell}
              className={` py-2 w-full ${
                sold ? 'bg-black' : 'bg-green-500'
              } text-white`}
            >
              {sold ? 'SOLD' : 'UNSOLD'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CowCard
