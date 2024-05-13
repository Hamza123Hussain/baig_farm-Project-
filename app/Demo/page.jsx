'use client'
import { useUser } from '@clerk/nextjs'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../../FirebaseConfig'
import CowCard from '../../components/CowCard'

const DemoPage = () => {
  const [cowdata, setDATA] = useState([])
  const { user } = useUser()
  const db = getFirestore(app)
  const fetchDataFromFirestore = async () => {
    try {
      console.log('User:', user?.fullName)
      console.log(
        'Primary email address:',
        user?.primaryEmailAddress.emailAddress
      )

      if (!user || !user.primaryEmailAddress) {
        throw new Error('User or primary email address is undefined')
      }

      const snapshot = await getDocs(
        collection(
          db,
          'Users',
          user?.primaryEmailAddress.emailAddress,
          'Cattle Data'
        )
      )

      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
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
  }, [user]) // Run effect whenever user changes

  if (cowdata.length > 0) {
    console.log('User history:', cowdata)
  }
  return (
    <div className=" flex justify-center items-center pt-20 text-red-500">
      {cowdata.map((ele) => {
        return (
          <div key={ele.id}>
            <CowCard Data={ele} />
          </div>
        )
      })}
      {/**
  
    : 
    "https://media.licdn.com/dms/image/D4D03AQEy8XnWRz7xCQ/profile-displayphoto-shrink_800_800/0/1678879548703?e=2147483647&v=beta&t=ikdGhL71k9s50kx6mk8IeBTRkds-kNK-UQNsISWoBCI"
    Price
    : 
    "200"
    Uploaded_BY
    : 
    "70110719@student.uol.edu.pk"
    User_Name
    : 
    "Hamza Hussain"
    Weight
    : 
    "500"

    : 
    "Mon May 13 2024 03:02:43 GMT+0500 (Pakistan Standard Time)" */}
    </div>
  )
}

export default DemoPage
