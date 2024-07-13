import React from 'react'
import { BathTub, Bed, RoomArea } from '@/public/svgs'
import Image from 'next/image'
type TPropertyCardProps = {
    img: string;
    desc: string;
    price: number;
    address: string;
    bedNumber: number;
    roomArea: number;
    bathroomNumber: number;
}
export default function PropertyCard({ img, price, desc, address, bedNumber, bathroomNumber, roomArea }: TPropertyCardProps) {
    return (
  
        <div className=" md:max-w-md cursor-pointer transition-all ">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-xl overflow-hidden md:hover:shadow-gray-400 duration-300 ease-in">

                    <a className="block" href="#0">
                        <figure className="relative h-0 pb-[66.25%] overflow-hidden">
                            <Image className="absolute inset-0 object-cover" fill={true} src={img} alt="Course" />
                        </figure>
                    </a>

                    <div className="flex-grow flex flex-col px-5">

                        <div className="flex-grow">

                            <header className="my-3 ">
                                <a className="block " href="#0">
                                <p className="text-md md:text-[22px] h-16 line-clamp-2 text-gray-900 font-extrabold leading-snug">{address }</p>
                                </a>
                            </header>

                            <div className="mb-4 flex flex-col">
                                <p className='text-sm text-gray-500'>Private Room</p>
                                <p className="text-lg md:text-xl font-bold text-base_orange">
                                ${price}/Month
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 justify-between border border-t-gray space-x-2 min-h-12 text-sm">
                        <div className="flex justify-center items-center h-full gap-1">
                            <Image src={Bed.src} width={20} height={20} alt="bed" />
                            {bedNumber}
                        </div>
                        <div className="flex justify-center items-center h-full gap-1 border-x border-x-gray">
                            <Image src={BathTub.src} width={20} height={20} alt="bathroom" />
                            {bathroomNumber}
                        </div>
                        <div className="flex justify-center items-center h-full gap-1">
                            <Image src={RoomArea.src} width={20} height={20} alt="room area" />
                            {roomArea}
                        </div>
                    </div>
                </div>
            </div>

    )
}
