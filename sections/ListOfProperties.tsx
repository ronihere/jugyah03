import PropertyCard from '@/components/propertyCard'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

export default function ListOfProperties() {
    return (

        <SectionHeader heading={"List of properties"} showButton={true} >
            {/* <div className='flr grid-cols-1 md:hidden'>
                <PropertyCard />
            </div> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 items-center justify-between'>
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </SectionHeader >
    )
}
