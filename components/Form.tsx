'use client'
import React from 'react'
import { useForm, type FieldValues } from "react-hook-form";
import Input from './Input';
const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: FormData) => {
        console.log(data); // Submit form data here
    };

    return (
        <div className='flex flex-col text-black bg-slate-100 shadow-lg rounded-md'>
            <h3 className='font-bold text-base_orange text-lg text-center'>Add A New Property</h3>

            <form className='grid grid-cols-1 p-4' onSubmit={()=>{}}>
                {/* Name Input */}
                {/* <label htmlFor="name" className='font-bold'>Name</label> */}
                <Input
                    className=''
                    type="text"
                    required={true}
                    id="Name"
                    {...register("Name", { required: true })} // Registering name field with validation
                />
                {errors.name && <span className="error">Name is required</span>}

                {/* Email Input */}
                <Input
                    className=''
                    required={true}
                    type="email"
                    id="Email"
                    {...register("Email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} // Registering email field with validation
                />
                {errors.email && <span className="error">Please enter a valid email address</span>}

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
