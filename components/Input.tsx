import React from 'react'
type TInputProps = {
    type: string;
    id: string;
    className?: string;
    required: boolean;
}
export default function Input(props: TInputProps) {
    const { type, id, className,required, ...rest } = props;
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex'>

            <label htmlFor={id} className='font-bold'>{id}</label><span className='text-base_orange'>
            {required ? "*" : ""}
            </span>
            </div>
            <input
                className={`${className} border h-8`}
                type={type}
                required
                id={id}
                {...rest}
            //   {...register("name", { required: true })} // Registering name field with validation
            />
        </div>
    )
}
