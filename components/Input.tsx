import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface TInputProps {
    type: string;
    id: string;
    className?: string;
    required?: boolean;
    placeHolder?: string;
    [key: string]: any; // For any additional props
}

const Input = forwardRef<HTMLInputElement, TInputProps>((props, ref) => {
    const { type, id, className, required, placeHolder, ...rest } = props;

    return (
        <div className='flex flex-col gap-1 w-full'>
            <div className='flex'>
                <label htmlFor={id} className='font-bold cursor-pointer'>{id}</label>
                <span className='text-base_orange'>
                    {required ? "*" : ""}
                </span>
            </div>
            <input
                ref={ref}
                className={twMerge(`border h-14 rounded-md p-2 text-black`, className)}
                type={type}
                required={required}
                id={id}
                placeholder={placeHolder}
                {...rest}
            />
        </div>
    );
});
Input.displayName = "Input"
export default Input;
