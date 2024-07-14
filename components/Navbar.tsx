import { BrandLogo, HamIcon } from '@/public/svgs'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {
  return (
      <nav className='absolute top-0 w-full py-6 px-4 md:px-10'>
          <div className='flex items-center justify-between'>
              <div className="cursor-pointer">
                  <img src={BrandLogo.src} alt='brand logo' className='w-[50%] relative md:w-[80%]'></img>
              </div>
              <div className="group md:hidden relative">
                  
                    <img src={HamIcon.src} className='h-10 w-8 scale-90 hover:scale-95 transition-all'></img>
                  <div className='absolute top-[100%] right-0 text-nowrap rounded-md hidden group-hover:flex group-hover:flex-col gap-2 text-sm bg-white text-black p-4'>
                      <Link href="" className='hover:text-slate-300 transition-all '>Home</Link>
                      <Link href="" className='hover:text-slate-300 transition-all '>Our Mission</Link>
                      <Link href="" className='hover:text-slate-300 transition-all '>About Us</Link>
                      <Link href="" className='hover:text-slate-300 transition-all '>LandLords</Link>
                      <Link href="" className='hover:text-slate-300 transition-all '>Tenant</Link>
                      <Link href="" className='hover:text-slate-300 transition-all '>Contact Us</Link>
                      <Link href="" className='hover:text-slate-300 transition-all '>Sign up</Link>
                      <Link href="" className='hover:text-slate-300 transition-all '>Log in</Link>

                      
                  </div>                 

                  
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
