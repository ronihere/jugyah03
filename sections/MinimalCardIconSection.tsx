import MinimalCard from '@/components/MinimalCard'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

export default function MinimalCardIconSection() {
  return (

    <SectionHeader heading='Minimum Living Cost for Everything' showButton={false} >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <MinimalCard heading='Pay As Little As Possible' />
        <MinimalCard heading='Pay As Little As Possible' />
        <MinimalCard heading='Pay As Little As Possible' />
        <MinimalCard heading='Pay As Little As Possible' />

        <MinimalCard heading='Pay As Little As Possible' />
        <MinimalCard heading='Pay As Little As Possible' />
        <MinimalCard heading='Pay As Little As Possible' />
        <MinimalCard heading='Pay As Little As Possible' />
      </div>
    </SectionHeader>


  )
}
