'use client'
import React, { SelectHTMLAttributes } from 'react'
import { TSelectDropdown } from './SelectDropdown'
import { twMerge } from 'tailwind-merge'

import { forwardRef } from 'react';


const FormSelect = forwardRef<HTMLSelectElement, TSelectDropdown>((props: TSelectDropdown, ref) => {
    const { required, id = "", className, options = [], defaultSelected, ...rest } = props;
    console.log(options, 'options')
    return (
        <div className='flex flex-col gap-1 relative'>
            <div className='flex'>
                <label htmlFor={id} className='font-bold cursor-pointer'>{id}</label>
                <span className='text-base_orange'>
                    {required ? "*" : ""}
                </span>
            </div>
            <select
                ref={ref}
                id={id}
                name={id}
                className={twMerge(`border text-black bg-white h-14 w-full rounded-md p-2 flex justify-between items-center cursor-pointer`,
                    className
                )}
                {...rest}
            >
                <option value=""> Select </option>
                {options.map((option) => (
                    <div key={option.id} className='hidden'>

                    <option className='p-10 w-full hidden' value={option.value}>
                        {option.value}
                    </option>
                    </div>
                ))}
            </select>
        </div>
    );
});

FormSelect.displayName = 'FormSelect'; // Set the display name for easier debugging

export default FormSelect;

