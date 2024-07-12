'use client'
import React from 'react'
import { useForm, type FieldValues } from "react-hook-form";
import Input from './Input';
import Button from './Button';
const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: FormData) => {
        console.log(data); // Submit form data here
    };

    return (
        <div className='flex flex-col text-black bg-white shadow-2xl rounded-xl py-8'>
            <h3 className='font-bold text-base_orange text-lg text-center'>Add A New Property</h3>

            <form className='p-4' onSubmit={() => { }}>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 '>

                    <Input
                        className=''
                        type="text"
                        required={true}
                        id="Name"
                        placeHolder='Enter Name'
                        {...register("Name", { required: true })} // Registering name field with validation
                    />
                    {errors.name && <span className="error">Name is required</span>}

                    {/* Email Input */}
                    <Input
                        className=''
                        required={true}
                        type="text"
                        id="Address"
                        placeHolder='Enter Address'
                        {...register("Address", { required: true })} // Registering email field with validation
                    />
                    {errors.Address && <span className="error">Please enter a valid email address</span>}

                    <Input
                        className=''
                        required={true}
                        type="text"
                        id="Unit"
                        placeHolder="Enter Unit"
                        {...register("Unit", { required: true })} // Registering email field with validation
                    />
                    {errors.Unit && <span className="error">Please enter a valid email address</span>}
                    <Input
                        className=''
                        required={true}
                        type="text"
                        id="Price"
                        placeHolder='Enter Price'
                        {...register("Price", { required: true })} // Registering email field with validation
                    />
                    {errors.Price && <span className="error">Please enter a valid email address</span>}
                </div>

                <div className='grid grid-cols-1 gap-4 mt-4'>
                    <div className=''>
                        <label htmlFor={'description'} className='font-bold cursor-pointer'>{"Description"}</label>
                        <textarea className='h-28 border-2 rounded-md w-full p-4' id='description' placeholder='Enter Description' {...register("description",)} />
                    </div>
                    <div className=''>
                        <label className="className='font-bold cursor-pointer" htmlFor='file'>
                            <span className='font-bold cursor-pointer text-black'>
                                Upload Photos
                            </span>
                            <div className='h-28 border-2 rounded-md border-dashed border-base_orange w-full'>
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    <p className='hidden sm:block'>
                                    Drag your images here, or  <span className='text-base_orange font-semibold'>
                                    browse
                                    </span>
                                    </p>
                                    <p className='sm:hidden font-semibold'>
Click here to Upload Image
                                    </p>
                                    <p className='text-gray-400 text-sm font-extralight'>
                                        Supported:  JPG, JPEG, PNG
                                    </p>
                                </div>
                                <input type="file" className='hidden' id='file' 
                                    {...register("file",)} />
                            </div>
                        </label>
                    </div>
                </div>
                <Button className='w-full mt-8' clickHandler={() => { }}><span>Add New Property</span></Button>

            </form>
        </div>
    );
};

export default Form;
