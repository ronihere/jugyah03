import React from 'react'
type TInputProps = {
    type: React.HTMLInputTypeAttribute | undefined;
    id: string;
    className?: string;
    required: boolean;
    placeHolder: string
}
export default function Input(props: TInputProps) {
    const { type, id, className,required,placeHolder, ...rest } = props;
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex'>

            <label htmlFor={id} className='font-bold cursor-pointer'>{id}</label><span className='text-base_orange'>
            {required ? "*" : ""}
            </span>
            </div>
            <input
                className={`${className} border h-14 rounded-md p-2`}
                type={type}
                required
                id={id}
            placeholder={placeHolder}
                {...rest}
            //   {...register("name", { required: true })} // Registering name field with validation
            />
        </div>
    )
}
