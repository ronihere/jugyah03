'use client'
import React from 'react'
import sixtySixImg from '@/public/svgs/sixtySix.svg';
import testimony1Image from '@/public/images/testimonial1.jpg' 
type TCarouselItemProps = {
    name: string; 
    img: string;
    desc: string;
}
export const CarouselItem = ({name, img, desc}:TCarouselItemProps) => {
    return <div className='flex px-2 md:px-0 flex-col gap-8 w-full pb-10 animate-fr'>
        <div className='text-left text-base-testimony relative py-8' >
            <p>
            {desc}
            </p>
            <img src={sixtySixImg.src} className='absolute h-12 w-12 top-0' alt='quotation image' />
        </div>
        <div className='flex gap-4 items-center'>
            <div className='overflow-hidden border-2 border-base_orange rounded-full h-16 w-16'>
                <img src={testimony1Image.src} alt='testimonial' className='object-cover' />
            </div>
            <div className=''>
                <p className='font-semibold text-base_orange text-lg animate-pulse duration-600'>
                    {name}
                </p>
                <p className='text-sm'>
                    Property Owner
                </p>
            </div>
        </div>
    </div>
}
