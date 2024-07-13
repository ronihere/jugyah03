import { minimalCardIcon } from '@/public/svgs'
import React from 'react'
type TMinimalCardProps = {
    heading : string
}
export default function MinimalCard({heading}:TMinimalCardProps) {
  return (
    <div className='shadow-xl rounded-lg border hover:shadow-2xl cursor-pointer transition-all duration-400 ease-in'>
          <div className='flex'>
              <img src={minimalCardIcon.src} alt='minimal icon' className='pt-8 pl-10'/>
          </div>
          <p className='text-black font-semibold text-md md:text-xl p-7 text-wrap'>
              {heading}
          </p>
    </div>
  )
}
