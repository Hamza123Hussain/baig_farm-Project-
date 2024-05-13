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
      <div className=" flex gap-3 justify-center items-center min-h-screen">
        <span className="loader"></span> <span className="loader"></span>{' '}
        <span className="loader"></span> <span className="loader"></span>{' '}
        <span className="loader"></span>
      </div>
    )
  }

  if (cowdata.length > 0) {
    console.log('User history:', cowdata)
  }
  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className="sm:mt-5 text-[9px] sm:text-4xl  bg-gradient-to-r from-black to-black text-transparent bg-clip-text mb-10 sm:mb-0  sm:py-10 px-2">
        THE FINAL PRICES WILL BE DECIDED AT THE TIME OF PURCHASE
      </h1>

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
