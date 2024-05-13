'use client'
import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
// import { useSession } from 'next-auth/react'
import React from 'react'
import { app } from '../FirebaseConfig'
import { useUser } from '@clerk/nextjs'

const CowCard = ({ Data }) => {
  const { user } = useUser()

  const sellstatus = async (DOC) => {
    if (
      user?.primaryEmailAddress.emailAddress == '70110719@student.uol.edu.pk'
    ) {
      const db = getFirestore(app)
      const docRef = doc(
        collection(db, 'Users', '70110719@student.uol.edu.pk', 'Cattle Data'),
        DOC.id
      )

      await updateDoc(docRef, {
        Sold: !DOC.Sold,
      })

      window.location.reload() // Refresh the page
    }
  }

  return (
    <div className="w-[100vw] sm:w-[50vw] mx-auto opacity-115">
      <div className="flex items-center justify-center ">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3 ">
          <div className=" bg-white  text-black rounded-lg overflow-hidden border-2 border-gray-100">
            <div
              className={`bg-cover bg-center 
              ${Data.Sold ? 'opacity-25' : 'opacity-100'}
                `}
            >
              <img
                className="w-[400px]   h-[250px]"
                src={Data.Imagesrc}
                alt=""
              />
            </div>
            <div className={` p-4 my-2 `}>
              <p className=" text-sm sm:text-3xl mb-5">
                {' '}
                Weight {Data.Weight} KG
              </p>
              <p className=" text-sm sm:text-lg text-gray-800">
                {' '}
                Price {Data.Price} <sub> Per KG</sub>{' '}
              </p>
            </div>
            <button
              onClick={() => sellstatus(Data)}
              className={`py-2 w-full ${
                Data.Sold ? 'bg-gray-500' : 'bg-green-400'
              } ${
                user?.primaryEmailAddress.emailAddress ==
                  '70110719@student.uol.edu.pk' || 'Shahmeeriqbal104@gmail.com'
                  ? 'cursor-pointer'
                  : 'cursor-default'
              }   text-black`}
            >
              {Data.Sold ? 'SOLD' : 'UNSOLD'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CowCard
