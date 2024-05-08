'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
// import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-white">
          {/* <SessionProvider> */} <NavBar />
          {children}
          {/* </SessionProvider>{' '} */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
