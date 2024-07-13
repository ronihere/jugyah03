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
            <PropertyCardCarousal list={propertyList } />
            <div className='hidden md:grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 items-center justify-between'>
                {
                    propertyList.map((property) => <PropertyCard key={property.id} img={property.image_link} address={property.details.address} desc={property.details.description} bathroomNumber={property.details.bathrooms} roomArea={property.details.square_footage} bedNumber={property.details.bedrooms} price={property.price} />)
                }
            </div>
        </SectionHeader >
    )
}
