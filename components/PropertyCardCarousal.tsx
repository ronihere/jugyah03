'use client'
import { TpropertyList } from '@/lib/utils'
import React, { useState } from 'react'
import PropertyCard from './propertyCard';
import Button from './Button';
type TPropertyCardCarousalProps = {
    list: TpropertyList;
}
export default function PropertyCardCarousal({ list }: TPropertyCardCarousalProps) {
    const [currentindex, setCurrentIndex] = useState(0);
  return (
      <div className='grid grid-cols-1 md:hidden mb-10 text-black'>
          {list.map((ele, index) => {
              return index===currentindex ? <PropertyCard/> : <></>
          })}
      
          <div className='flex mt-8 justify-between'>
              <Button ><span>View All Property</span></Button>
              
              <div className='flex gap-2'>
                  <button className='w-10 h-10 rounded-full border border-black hover:scale-95 hover:opacity-50'>
                      {"<"}
                  </button>
                  <button className='w-10 h-10 rounded-full border border-black hover:scale-95 hover:opacity-50'>
                      {">"}
                  </button>
              </div>
          </div>
    </div>
  )
}
