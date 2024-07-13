'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge';
type TMyButtonProps = {
    children: React.ReactElement; clickHandler?: () => void; className?: string;
    type?: "submit" | "reset" | "button",
    disabled?: boolean
}
export default function Button({className,type="button", children,disabled, clickHandler=()=>{} }: TMyButtonProps) {
    return (
        <button disabled={disabled} type={type} onClick={clickHandler} className={twMerge(`p-4 bg-base_orange rounded-md text-white text-sm hover:scale-95 transition-all ${disabled ? "cursor-progress bg-gray-600" : ""}`, className)}>
            {children}
        </button>
    )
}