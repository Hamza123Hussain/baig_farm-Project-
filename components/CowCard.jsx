import React from 'react'

const CowCard = ({ Data }) => {
  return (
    <div className="w-[100vw] sm:w-[50vw] mx-auto">
      <div className="flex items-center justify-center ">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3 ">
          <div className=" bg-white  text-black rounded-lg overflow-hidden border-2 border-gray-100">
            <div className="bg-cover bg-center  ">
              <img className="w-[400px]   h-[250px]" src={Data.Image} alt="" />
            </div>
            <div className="p-4 my-2 ">
              <p className=" text-sm sm:text-3xl mb-5">
                {' '}
                Weight {Data.weight} KG
              </p>
              <p className=" text-sm sm:text-lg text-gray-800">
                {' '}
                Price {Data.Price} <sub> Per KG</sub>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CowCard
