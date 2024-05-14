'use client'
import { useEffect, useState } from 'react'
import CowCard from '../components/CowCard'

import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../FirebaseConfig'
export default function Home() {
  const [cowdata, setDATA] = useState([])
  const [loading, setloading] = useState(true)

  const db = getFirestore(app)
  const fetchDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, 'Users', '70110719@student.uol.edu.pk', 'Cattle Data')
      )

      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setloading(false)
      return data
    } catch (error) {
      console.error('Error fetching data from Firestore:', error)
      return []
    }
  }

  useEffect(() => {
    const fetchFirestoreData = async () => {
      const cow = await fetchDataFromFirestore()
      setDATA(cow)
    }

    fetchFirestoreData()
  }, []) // Run effect whenever user changes

  if (loading) {
    return (
      <div className=" flex gap-2 justify-center items-center min-h-screen">
        <span className="loader"></span> <span className="loader"></span>{' '}
        <span className="loader"></span>
      </div>
    )
  }

  if (cowdata.length > 0) {
    console.log('User history:', cowdata)
  }
  return (
    <div className=" flex flex-col justify-center items-center gap-4 ">
      <div className=" sm:flex-row flex-col  flex  items-center sm:gap-2 justify-between sm:mt-28 ">
        <div className=" sm:w-[70vw] flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
            alt=""
            className=" w-12"
          />
          <h3>+92 324 7868008</h3>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-red-600 font-[sans-serif] p-4">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <p className="text-white text-base text-center">
              Qurbani share available
            </p>
          </div>
        </div>
      </div>

      <h3
        className=" text-xs sm:text-lg
      "
      >
        Prices are negotiable according to animal selection
      </h3>

      <div className=" grid justify-center grid-cols-1 sm:grid-cols-2 items-center">
        {cowdata.map((ele) => {
          return (
            <div key={ele.id}>
              <CowCard Data={ele} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
