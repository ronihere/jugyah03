'use client'
import React, { useEffect, useState } from 'react'
import testimony1Image from '@/public/images/testimonial1.jpg' 
export const CarouselItem = ({name}:{name: string}) => {
    return <div className='flex flex-col gap-8 w-full pb-10 animate-fr'>
        <p className='text-left text-[#6D220A] transition ease-in-out delay-300 duration-100' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
        </p>
        <div className='flex gap-4 items-center'>
            <div className='overflow-hidden border-2 border-base_orange rounded-full h-16 w-16'>
                <img src={testimony1Image.src} alt='testimonial' />
            </div>
            <div className=''>
                <p className='font-semibold text-base_orange text-lg'>
                    {/* Harry Wilson */}
                    {name}
                </p>
                <p className='text-sm'>
                    Property Owner
                </p>
            </div>
        </div>
    </div>
}
