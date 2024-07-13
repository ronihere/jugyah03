'use client'
import TestimonialCarouselContainer, { CarouselItem } from '@/components/TestimonialCarouselContainer'
import useElementWidth from '@/hooks/useElementWidth';
import React, { useEffect, useState } from 'react'
const testimonials = new Array(3).fill(null)
export default function TestimonialSection() {
    const [currentindex, setCurrentIndex] = useState(0);
    const {ref,width } = useElementWidth();
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => {
                return ((prev + 1) % testimonials.length)
            });
        }, 4000);
        return () => {
            return clearInterval(timer);
        }
    }, [])
    return (
        <div className='flex flex-col md:flex-row-reverse bg-[#FEF3EF] px-2 md:p-0 mt-4 gap-8 w-full'>
            <div className='w-full basis-1/2 p-2 md:p-0'>
                <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay muted className='h-full'></video>
            </div>
        
            {/* <TestimonialCarouselContainer/>
             */}
            <div className='flex flex-col relative text-black p-2 basis-1/2 md:justify-center md:p-16 gap-4 md:gap-8 '>
                {/* <div className='flex flex-col relative text-black p-2 basis-1/2 md:justify-center md:p-16 gap-4 md:gap-8 transition-transform ease-out duration-500' > */}
                <div ref={ref} className='flex transition-transform ease-in max-w-96 duration-700 overflow-hidden' style={{transform:`translateX(${currentindex*width})`}}>
                   
                <CarouselItem name={currentindex + ' Harry Wilson'} />
                {/* <CarouselItem name={currentindex + ' Harry Wilson'} /> */}
                </div>

                <div className='flex gap-2 mt-2 mb-10'>
                    {testimonials.map((_, index) => {
                        return <span key={index} onClick={() => setCurrentIndex(index)} className={`${currentindex === index ? "bg-base_orange" : "bg-gray-500"} h-3 w-3 rounded-full transition duration-150 cursor-pointer`}></span>
                    })}
                </div>
            </div>
        </div>
    )
}
