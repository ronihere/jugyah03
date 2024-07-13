import { BrandLogo } from '@/public/svgs'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
      <nav className='absolute top-0 w-full p-6 px-10'>
          <div className='flex items-center justify-between'>
              <div className="cursor-pointer">
                  <img src={BrandLogo.src} alt='brand logo' className='w-[50%] mr-10 relative right-6 md:w-[80%]'></img>
              </div>
              <div className='hidden md:flex space-x-6 font-semibold'>
                  <Link href="" className='hover:text-slate-300 transition-all '>Home</Link>
                  <Link href="" className='hover:text-slate-300 transition-all'>Our Mission</Link>
                  <Link href="" className='hover:text-slate-300 transition-all'>About Us</Link>
                  <Link href="" className='hover:text-slate-300 transition-all'>LandLords</Link>
                  <Link href="" className='hover:text-slate-300 transition-all'>Tenant</Link>
                  <Link href="" className='hover:text-slate-300 transition-all'>Contact Us</Link>
              </div>
              <div className='hidden md:flex space-x-2'>
                  <Link href={""} className='font-semibold shadow-lg p-3 px-6 pt-2 text-white bg-transparent border-2  border-gray-300 hover:text-black hover:scale-105 hover:border-black cursor-pointer rounded-lg transition-all'>
                    Log in  
                  </Link>
                  <Link href={""} className='shadow-lg font-semibold p-3 px-6 pt-2 text-gray-600 bg-white border-2 border-white hover:text-black hover:scale-105 cursor-pointer rounded-lg transition-all'>
                      Sign up
                  </Link>
              </div>
          </div>
      
    </nav>
  )
}