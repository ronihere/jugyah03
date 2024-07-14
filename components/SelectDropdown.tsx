'use client'
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowIcon } from '@/public/svgs';
import React, { forwardRef, useEffect, useState } from 'react'
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

const SelectDropdown = forwardRef<HTMLInputElement, TSelectDropdown>((props, ref) => {
    const { required, id = "", className, options = [], defaultSelected, ...rest } = props;
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
            <input
                ref={ref}
                type="hidden"
                className='hidden'
                // Replace with your form integration logic
                value={selectedItem?.value} // Use selected item's id (if available)
                {...rest}
            />
            <div
                ref={clickOutsideRef}
                className={twMerge(`border text-black bg-white h-14 w-full rounded-md p-2 flex justify-between items-center cursor-pointer`
                    ,
                    className
                )}
                onClick={() => setIsExpanded(prev => !prev)}
            >
                <p>{selectedItem ? <span className='font-thin'>{selectedItem.value}</span> : <span className='text-select-gray'>Select</span>}</p>
                <img src={ArrowIcon.src} className={`${isExpanded ? "rotate-180" : ""} scale-50 sm:scale-100`} alt='arrow icon' />
            </div>

            {isExpanded &&
                <div className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute top-full">
                    <ul className="py-1 text-sm text-gray-700 shadow-lg max-h-36 w-full overflow-y-auto scrollbar-hide" aria-labelledby="states-button">
                        {options.map((option, index) =>
                            <li key={option.id} className='mx-auto' onClick={() => setSelectedItem(option)}>
                                <button type="button" className="flex w-full pl-2 justify-start items-center md:px-4 py-2 border-b-[1px] text-sm text-gray-700 hover:bg-gray-100 ">
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
})
export default SelectDropdown;
