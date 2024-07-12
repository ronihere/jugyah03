'use client'
import React from 'react'
type TMyButtonProps = {
    children: React.ReactElement; clickHandler: () => void; className: string
}
export default function Button({ children, clickHandler }: TMyButtonProps) {
    return (
        <button onClick={clickHandler} className={`p-4 bg-base_orange rounded-md text-white text-sm`}>
            {children}
        </button>
    )
}