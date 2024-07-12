import { minimalCardIcon } from '@/public/svgs'
import React from 'react'
type TMinimalCardProps = {
    heading : string
}
export default function MinimalCard({heading}:TMinimalCardProps) {
  return (
    <div className='shadow-xl rounded-lg hover:scale-105 cursor-pointer transition-all'>
          <div className='flex'>
              <img src={minimalCardIcon.src} alt='minimal icon' className='pt-8 pl-10'/>
          </div>
          <p className='text-black font-semibold text-md md:text-xl p-7 text-wrap'>
              {heading}
          </p>
    </div>
  )
}
