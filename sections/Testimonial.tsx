import TestimonialCarouselContainer from '@/components/TestimonialCarouselContainer'
import React from 'react'

export default function TestimonialSection() {
    return (
        <div className='flex flex-col md:flex-row-reverse bg-[#FEF3EF] p-2 md:p-0 pt-4 gap-8'>
            <div className='w-full basis-1/2 p-2 md:p-0'>
                <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls className='h-full'></video>
            </div>
        
            <TestimonialCarouselContainer/>
        </div>
    )
}
