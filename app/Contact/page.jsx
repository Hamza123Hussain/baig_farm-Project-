import React from 'react'
import Image from 'next/image' // Import Next.js Image component
import Link from 'next/link'

const ContactForm = () => {
  return (
    <div className="  min-h-screen   p-5">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className=" flex flex-col justify-center items-center">
            <div className="p-6 m-4   sm:rounded-lg">
              <h1 className="text-sm sm:text-5xl text-black  font-extrabold tracking-tight">
                Get in touch
              </h1>

              <div className="flex items-center mt-8 text-gray-900 ">
                <img
                  src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png" // Path to your location SVG icon
                  alt="Location Icon"
                  width={32}
                  height={32}
                />
                <Link
                  href={'https://maps.app.goo.gl/NED3crVmmfnw11jD7?g_st=iw '}
                >
                  <div className=" ml-4 text-xs sm:text-md tracking-wide font-semibold ">
                    2-Km from Gaggar Chowk Towards Kotli Rai Abu Bakr, Kasur,
                    Punjab 55050
                  </div>
                </Link>
              </div>

              <div className="flex items-center mt-4 text-gray-900">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6815/6815116.png" // Path to your phone SVG icon
                  alt="Phone Icon"
                  width={32}
                  height={32}
                />
                <div className="ml-4 text-xs sm:text-md tracking-wide font-semibold w-40">
                  +92 324 7868008
                </div>
              </div>
            </div>
            <div>
              <Link href={'https://maps.app.goo.gl/NED3crVmmfnw11jD7?g_st=iw'}>
                <img
                  src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/08/Google-Maps-icon-on-map.png"
                  alt=""
                  className=" rounded-lg w-fit"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
