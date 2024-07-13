'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge';
type TMyButtonProps = {
    children: React.ReactElement; clickHandler?: () => void; className?: string
}
export default function Button({className, children, clickHandler=()=>{} }: TMyButtonProps) {
    return (
        <button onClick={clickHandler} className={twMerge(`p-4 bg-base_orange rounded-md text-white text-sm hover:scale-95 transition-all`, className)}>
            {children}
        </button>
    )
}