'use client'

import React, { useState } from 'react'
import PropertyCard from './propertyCard';
import Button from './Button';
import { TpropertyList } from '@/lib/constants';
import useWindowDimensions from '@/hooks/useWindowDimensions';
type TPropertyCardCarousalProps = {
    list: TpropertyList;
}
export default function PropertyCardCarousal({ list }: TPropertyCardCarousalProps) {
    const [currentindex, setCurrentIndex] = useState(0);
    const {width } = useWindowDimensions();
    const goNext = () => {
        setCurrentIndex(prev => prev + 1);
    }
    const goPrev = () => {
        setCurrentIndex(prev => prev-1)
    }
    return (
        <div className='md:hidden'>
      <div className='flex gap-6 overflow-hidden  mb-10 text-black scrollbar-hide'>
          {list.map((property, index) => {
              return <div  key={property.id} className='min-w-[100%] transition-all duration-500' style={{transform: `translateX(-${currentindex * width}px)`}}><PropertyCard img={property.image_link} address={property.details.address} desc={property.details.description} bathroomNumber={property.details.bathrooms} roomArea={property.details.square_footage} bedNumber={property.details.bedrooms} price={property.price} /></div>
          })}
          </div>
      
          <div className='flex mt-8 justify-between'>
              <Button type='button' ><span>View All Property</span></Button>
              
              <div className='flex gap-2 text-black'>
                    <button onClick={goPrev} disabled={currentindex===0} className={`w-10 h-10 rounded-full border border-black hover:scale-95 ${currentindex === 0 ? "border-gray-300 text-gray-300" :"" }`}>
                      {"<"}
                  </button>
                    <button onClick={goNext} disabled={list.length-1===currentindex} className={`w-10 h-10 rounded-full border border-black hover:scale-95 ${currentindex === list.length - 1 ? "border-gray-300 text-gray-300" : ""}`}>
                      {">"}
                  </button>
              </div>
          </div>
    </div>
  )
}
