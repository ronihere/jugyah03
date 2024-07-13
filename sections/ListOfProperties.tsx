import PropertyCard from '@/components/propertyCard'
import PropertyCardCarousal from '@/components/PropertyCardCarousal';
import SectionHeader from '@/components/SectionHeader'
import { getAllProperties } from '@/lib/utils'
import React from 'react'

export default async function ListOfProperties() {
    //call the api here and pass on as Prop
    const propertyList = await getAllProperties();
    return (

        <SectionHeader heading={"List of properties"} showButton={true} >
            {/* <div className="grid grid-cols-1 md:hidden">
                <PropertyCard />
                <div>

                </div>
            </div> */}
            <PropertyCardCarousal list={propertyList } />
            <div className='hidden md:grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 items-center justify-between'>
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </SectionHeader >
    )
}
