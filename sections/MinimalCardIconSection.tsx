import MinimalCard from '@/components/MinimalCard'
import SectionHeader from '@/components/SectionHeader'
import { sellingPointList } from '@/lib/constants'
import React from 'react'

export default function MinimalCardIconSection() {
  return (

    <SectionHeader heading='Minimum Living Cost for Everything' showButton={false} >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {sellingPointList.map((sellingpoint) => <MinimalCard key={sellingpoint.id} heading={sellingpoint.title} icon={sellingpoint.icon} />)}
        
      </div>
    </SectionHeader>


  )
}
