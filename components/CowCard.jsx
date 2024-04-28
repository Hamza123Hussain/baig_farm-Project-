import React from 'react'

const CowCard = ({ Data }) => {
  return (
    <div className="w-[50vw] mx-auto">
      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-cover bg-center  p-4">
              <img src={Data.Image} alt="" />
            </div>
            <div className="p-4 my-2 sm:m-10">
              <p className="text-3xl text-gray-900 mb-5">
                {' '}
                Weight {Data.weight} KG
              </p>
              <p className="text-gray-700"> Price {Data.Price} / KG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CowCard
