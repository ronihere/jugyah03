import Button from '@/components/Button'
import Input from '@/components/Input'
import SelectDropdown from '@/components/SelectDropdown'
import { leaseRentBuyOptions } from '@/lib/constants'
import { SearchIcon } from '@/public/svgs'
import React from 'react'


export default function BgImageSection() {
  return (
      <div className="container bg-no-repeat bg-cover bg-center h-[60vh] md:h-[100vh] flex justify-between items-center relative" style={{ backgroundImage: `url(images/jugyahbg.png)` }}>
          <div className='h-full flex flex-col justify-center md:items-start items-center px-6 md:px-10 md:my-10 w-full gap-6'>
              <p className='font-extrabold text-3xl md:text-6xl text-white md:w-1/2'>
                  The Most Affordable Place to Stay
              </p>
              <div className='flex w-full flex-col gap-2 md:h-fit md:flex-row md:justify-start md:items-center'>
                  <div className='flex w-full md:w-fit gap-2 justify-between'>
                      <SelectDropdown className='w-24' defaultSelected={leaseRentBuyOptions[0]} id='' options={leaseRentBuyOptions} required={false} />
                      <Input placeHolder='Search Locality' ></Input>
                  </div>
                  <Button className='w-full md:w-fit h-14 md:mt-1'><span className="flex justify-center items-center gap-3">
                      <img src={SearchIcon.src} className='' alt='search icon'></img>
                      <span className='md:hidden'>Search</span>
                  </span></Button>
              </div>
          </div>
      </div>
  )
}
