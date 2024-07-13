import Button from '@/components/Button'
import GlossyCard from '@/components/GlossyCard'
import glossy1 from '@/public/images/glossy1.jpg'
import glossy2 from '@/public/images/glossy2.jpg'
import glossy3 from '@/public/images/glossy3.jpg'
import glossy4 from '@/public/images/glossy4.jpg'

import React from 'react'

export default function GlossyCardSection() {
  return (
    <section className='flex flex-col md:flex-row mb-10 gap-8 md:gap-4 '>
      <div className='flex flex-col gap-2 md:basis-1/2'>

        <div className='flex justify-center gap-2 items-end'>
          <GlossyCard img={glossy1.src} className='h-52 w-44 md:h-80 md:w-64' title='Flexible Leases' />
          <GlossyCard img={glossy2.src} className='h-40 w-44 md:h-64 md:w-60' title='7-Day Happiness
Guaranteed' />
        </div>

        <div className='flex justify-center gap-2 items-start'>
          <GlossyCard img={glossy3.src} className='h-40 w-36 md:h-56 md:w-52' title='Monthly House Cleaning' />
          <GlossyCard img={glossy4.src} className='h-52 w-44 md:h-80 md:w-72' title='Choose Your Own Roommate' />
        </div>
      </div>


      <div className='flex flex-col gap-5 md:w-[28rem] md:justify-center md:items-center'>
        <h3 className='font-bold text-2xl text-center text-black md:text-left md:text-5xl'>
          Flexibility and options to suit your lifestyle.
        </h3>
        <p className='font-thin text-[#6B7280] text-sm text-center md:text-lg md:text-left md:font-thin'>
          You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.

        </p>
        <div className='flex justify-center items-center w-full md:justify-start'>
          <Button className=''><span>Search Rooms</span></Button>

        </div>

      </div>
    </section>
  )
}
