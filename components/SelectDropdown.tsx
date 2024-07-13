'use client'
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowIcon } from '@/public/svgs';
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';

type OptionsObject = {
    id: string | number;
    value: string
}
export type TSelectDropdown = {
    id?: string;
    options: OptionsObject[];
    defaultSelected: OptionsObject | null;
    required: boolean;
    className?: string
}

export default function SelectDropdown({ required, id = "", className, options = [], defaultSelected }: TSelectDropdown) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultSelected);
    const { ref: clickOutsideRef, isClickedOutside } = useClickOutside<HTMLDivElement>();
    useEffect(() => {
        if (isClickedOutside) {
            setIsExpanded(false);
        }
    }, [isClickedOutside])



    return (
        <div className='flex flex-col gap-1 relative' >
            <div className='flex'>
                <label htmlFor={id} className='font-bold cursor-pointer'>{id}</label>
                <span className='text-base_orange'>
                    {required ? "*" : ""}
                </span>
            </div>
            <div
                ref={clickOutsideRef}
                className={twMerge(`border text-black bg-white h-14 w-full rounded-md p-2 flex justify-between items-center cursor-pointer`
                    ,
                    className
                )}
                onClick={() => setIsExpanded(prev => !prev)}
            >
        
                <p>{selectedItem ? <span className='font-black'>{selectedItem.value}</span> : <span className='text-select-gray'>Select</span>}</p>
                <img src={ArrowIcon.src} className={`${isExpanded ? "rotate-180" : ""}`} alt='arrow icon' />
            </div>

            {isExpanded &&
                <div className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute top-full">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 max-h-36 w-full overflow-y-auto scrollbar-hide" aria-labelledby="states-button">
                        {options.map((option, index) =>
                            <li key={option.id} className='px-3' onClick={() => setSelectedItem(option)}>
                                <button type="button" className="inline-flex w-full px-4 py-2 border-b-[1px] text-sm text-gray-700 hover:bg-gray-100 ">
                                    <div className="inline-flex items-center">
                                        {option.value}
                                    </div>
                                </button>
                            </li>)}

                    </ul>
                </div>
            }
        </div>
    )
}
