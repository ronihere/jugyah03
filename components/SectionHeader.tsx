'use client'
import React from 'react'
import Button from './Button'

type TSectionHeaderProps = {
    heading: string;
    showButton: boolean;
    children: React.ReactNode,
}

export default function SectionHeader({ heading, showButton, children }: TSectionHeaderProps) {
    return (
        <div className='mb-10'>
            <section className='flex justify-between mb-8'>
                <div className='w-fit'>

                    <p className='font-bold text-lg md:text-4xl text-black mb-3'>
                        {heading}
                    </p>
                    <p className='h-1 w-3/4 bg-base_orange'>
                    </p>
                </div>
                {showButton && <span className='hidden md:block'>
                    <Button className='' clickHandler={() => { }}><span>View All Property</span></Button>
                </span>
                }
            </section>
            {children}
        </div>
    )
}
