import React from 'react'
import propertyImage from '@/public/images/jugyah1.png'
import { BathTub, Bed, RoomArea } from '@/public/svgs'
import Image from 'next/image'
export default function PropertyCard() {
    return (
  
            <div className=" md:max-w-md">
                <div className="flex flex-col h-full bg-white shadow-lg rounded-xl overflow-hidden">

                    <a className="block" href="#0">
                        <figure className="relative h-0 pb-[66.25%] overflow-hidden">
                            <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={propertyImage.src} alt="Course" />
                        </figure>
                    </a>

                    <div className="flex-grow flex flex-col px-5">

                        <div className="flex-grow">

                            <header className="my-3">
                                <a className="block " href="#0">
                                    <p className="text-md md:text-[22px] text-gray-900 font-extrabold leading-snug">2578 Folsom street, san francisco, CA, 94110</p>
                                </a>
                            </header>

                            <div className="mb-4 flex flex-col">
                                <p className='text-sm text-gray-500'>Private Room</p>
                                <p className="text-lg md:text-xl font-bold text-base_orange">
                                    ${1200}/Month
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 justify-between border border-t-gray space-x-2 min-h-12 text-sm">
                        <div className="flex justify-center items-center h-full gap-1">
                            <Image src={Bed.src} width={20} height={20} alt="bed" />
                            {2}
                        </div>
                        <div className="flex justify-center items-center h-full gap-1 border-x border-x-gray">
                            <Image src={BathTub.src} width={20} height={20} alt="bed" />
                            {2}
                        </div>
                        <div className="flex justify-center items-center h-full gap-1">
                            <Image src={RoomArea.src} width={20} height={20} alt="bed" />
                            {75}
                        </div>
                    </div>
                </div>
            </div>

    )
}
