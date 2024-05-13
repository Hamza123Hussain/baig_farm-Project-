'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from '../../FirebaseConfig'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
const Page = () => {
  const db = getFirestore(app)
  const { user } = useUser()
  console.log(user)
  const [formValues, setFormValues] = useState({
    Image: '',
    Weight: '',
    Price: '',
    Sold: false,
  })
  const router = useRouter()
  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  console.log(formValues.Image)
  const saveinfo_firestore = async () => {
    const docID = Date.now().toString()

    await setDoc(
      doc(
        db,
        'Users',
        user?.primaryEmailAddress.emailAddress,
        'Cattle Data',
        docID
      ),
      {
        Imagesrc: formValues.Image,
        Weight: formValues.Weight,
        Price: formValues.Price,
        Sold: formValues.Sold,
        Uploaded_BY: user?.primaryEmailAddress.emailAddress,
        User_Name: user?.fullName,
        id: docID,
      }
    )
    router.push('/Demo')
  }
  return (
    <div className=" bg-gray-100">
      <div className="flex flex-col items-start justify-start sm:mt-10 mt-0 p-5 gap-5">
        <div className="flex items-center gap-2">
          <UserButton />
          {user?.fullName}
        </div>
        <div>Email: {user?.primaryEmailAddress.emailAddress}</div>
      </div>
      <div className=" py-3 px-10 min-h-screen">
        <div className=" p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="flex items-center mb-5 flex-col gap-5">
            <div className="flex gap-5 justify-center items-center">
              <label
                htmlFor="name"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Image
              </label>
              <input
                value={formValues.Image}
                onChange={(e) => handleChange(e)}
                type="text"
                name="Image"
                placeholder="Enter Image Src"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 bg-gray-100 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>
            <div className="flex gap-5 justify-center items-center">
              <label
                htmlFor="name"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Weight
              </label>
              <input
                value={formValues.Weight}
                onChange={(e) => handleChange(e)}
                type="number"
                name="Weight"
                placeholder="Enter Weight"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 bg-gray-100 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex gap-5 justify-center items-center">
              <label
                htmlFor="name"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Price
              </label>
              <input
                value={formValues.Price}
                onChange={(e) => handleChange(e)}
                type="number"
                name="Price"
                placeholder="Enter Price"
                className="flex-1 py-2 border-b-2 border-gray-400 bg-gray-100 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex gap-5 justify-center items-center">
              <label
                htmlFor="name"
                className="inline-block w-20 mr-6 text-right font-bold text-gray-600"
              >
                Sold?
              </label>
              <input
                type="text"
                name="Sold"
                placeholder="Sold?"
                value={formValues.Sold}
                disabled
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          <div className="text-right">
            <button
              onClick={saveinfo_firestore}
              className="py-3 px-8 bg-green-400 text-white font-bold"
            >
              Create Cow Card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
