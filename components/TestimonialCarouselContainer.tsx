'use client'
import React, { useEffect, useState } from 'react'
import testimony1Image from '@/public/images/testimonial1.jpg' 
const CarouselItem = ({name}:{name: string}) => {
    return <>
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
    </>
}
const testimonials = new Array(3).fill(null);
export default function TestimonialCarouselContainer() {
    const [currentindex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => {
                return ((prev+1) % testimonials.length)
            });
        }, 4000);
        return () => {
            return clearInterval(timer);
        }
    }, [])

    return (
        <div className='flex flex-col relative text-black p-2 basis-1/2 md:justify-center md:p-16 gap-4 md:gap-8'>
            {testimonials.map((_, index) => {
                return index === currentindex ? <CarouselItem key={index} name={index + ' Harry Wilson' } />: null
            })}

            <div className='flex gap-2 mt-2'>
                {testimonials.map((_,index) => {
                    return <span key={index} onClick={()=>setCurrentIndex(index)} className={`${currentindex===index ? "bg-base_orange" : "bg-gray-500"} h-3 w-3 rounded-full transition duration-150 cursor-pointer`}></span>
                })}
            </div>
        </div>
    )
}
