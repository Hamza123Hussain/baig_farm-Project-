import React from 'react'

const CowCard = ({ Data }) => {
  return (
    <div className="w-[50vw] mx-auto">
      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className=" bg-slate-400  text-white rounded-lg overflow-hidden">
            <div className="bg-cover bg-center  ">
              <img className="w-[370px]   h-[250px]" src={Data.Image} alt="" />
            </div>
            <div className="p-4 my-2 ">
              <p className="text-3xl mb-5"> Weight {Data.weight} KG</p>
              <p className=" text-gray-800"> Price {Data.Price} / KG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CowCard
