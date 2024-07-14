import Button from '@/components/Button'
import Input from '@/components/Input'
import Navbar from '@/components/Navbar'
import SelectDropdown from '@/components/SelectDropdown'
import { leaseRentBuyOptions } from '@/lib/constants'
import { SearchIcon } from '@/public/svgs'
import React from 'react'


export default function BgImageSection() {
    return (
        <>
        <div className="bg-no-repeat bg-cover md:bg-center h-[60vh] md:h-[100vh] w-full px-2 py-10" style={{ backgroundImage: `url(images/jugyahbg.png)` }}>
            <div className='h-full flex flex-col justify-center md:items-start items-center sm:px-6 md:px-10 md:my-10 gap-6'>
                <div className='flex flex-col gap-2 items-start justify-start md:h-fit'>
                    <p className='font-extrabold text-2xl sm:text-3xl w-3/4 md:text-6xl md:w-3/4'>
                        The Most Affordable Place to Stay
                    </p>
                    <div className='flex w-full md:w-fit gap-2 justify-center items-center'>
                        <SelectDropdown className='w-20 ' defaultSelected={leaseRentBuyOptions[0]} id='' options={leaseRentBuyOptions} required={false} />
                        <Input placeHolder='Search Locality' className=''  ></Input>
                        <Button className='hidden md:block md:w-fit h-14 md:mt-1'><span className="">
                            <img src={SearchIcon.src} className='h-8' alt='search icon'></img>
                        </span></Button>
                    </div>
                    <Button className='w-full md:hidden h-14'><span className="flex justify-center items-center gap-3">
                        <img src={SearchIcon.src} className='' alt='search icon'></img>
                        <span className=''>Search</span>
                    </span></Button>
                </div>
            </div>
        </div>
        <Navbar />
        </>
    )
}
