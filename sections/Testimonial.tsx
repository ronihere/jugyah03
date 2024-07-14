'use client'
import { CarouselItem } from '@/components/TestiMonyCarousel'
import useScrollIndex from '@/hooks/useScrollIndex'
import { testimonials } from '@/lib/constants';
import React from 'react'


export default function TestimonialSection() {
    const { currentindex } = useScrollIndex(3, 0 ,true, 10000);
    return (
        <div className='flex flex-col md:flex-row-reverse bg-[#FEF3EF] px-2 md:p-0 mt-4 gap-8 w-full'>
            <div className='w-full basis-1/2'>
                <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay muted loop className='h-full'></video>
            </div>

            <div className='flex flex-col relative text-black p-2 basis-1/2 md:justify-center md:p-16 gap-4 md:gap-8 '>
                <div className='flex overflow-hidden'>
                    <CarouselItem name={testimonials[currentindex].name} desc={testimonials[currentindex].desc} img={testimonials[currentindex].img || ""} />
                </div>
                <div className='flex gap-2'>
                    {testimonials.map((_, index) => {
                        return <span key={index} className={`${currentindex === index ? "bg-base_orange" : "bg-gray-500"} h-3 w-3 rounded-full transition duration-150 cursor-pointer`}></span>
                    })}
                </div>
            </div>
        </div>
    )
}
