'use client'
import React, { useEffect } from 'react'
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from './Input';
import Button from './Button';
import { cityList, roomTypesList } from '@/lib/constants';
import FormSelect from './FormSelect';
import { delay } from '@/lib/utils';
import { propertyAddSchema, TPropertyAddSchema } from '@/lib/validationSchema';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm<TPropertyAddSchema>({
        resolver: zodResolver(propertyAddSchema)
    });

    const fileSelected = watch("file", false)

    console.log(fileSelected.length, 'file')

    const onSubmit = async (data: FieldValues) => {
        console.log('formData:::', { ...data }); // Submit form data here
        await delay(4000);
        reset();
    };
    useEffect(() => {
        console.log(errors,)
    }, [errors, isSubmitting])

    return (
        <div className='flex flex-col text-black bg-white shadow-2xl rounded-xl py-8'>
            <h3 className='font-bold text-base_orange text-lg text-center'>Add A New Property</h3>

            <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 '>
                    <div>
                        <Input
                            className={`${errors.Name ? "outline-red-400" : ""}`}
                            type="text"
                            required={true}
                            id="Name"
                            placeHolder='Enter Name'
                            {...register("Name")} // Registering name field with validation
                        />
                        {errors.Name && <span className="text-red-500">{`${errors.Name.message}`}</span>}
                    </div>

                    <div>

                        <Input
                            className={`${errors.Address ? "outline-red-400" : ""}`}
                            required={true}
                            type="text"
                            id="Address"
                            placeHolder='Enter Address'
                            {...register("Address")} // Registering email field with validation
                        />
                        {errors.Address && <span className="text-red-500">{`${errors.Address.message}`}</span>}
                    </div>
                    <div>

                        <Input
                            className={`${errors.Unit ? "outline-red-400" : ""}`}
                            required={true}
                            type="text"
                            id="Unit"
                            placeHolder="Enter Unit"
                            {...register("Unit")} // Registering email field with validation
                        />
                        {errors.Unit && <span className="text-red-500">{`${errors.Unit.message}`}</span>}
                    </div>

                    <div>

                        <FormSelect className={`${errors.roomtype ? "outline-red-400" : ""}`} defaultSelected={null} id='Room Type' required={true} options={roomTypesList}{...register('roomtype')} />
                        {errors.roomtype && <span className="text-red-500">{`${errors.roomtype.message}`}</span>}
                    </div>
                    <div>

                        <FormSelect className={`${errors.city ? "outline-red-400" : ""}`} defaultSelected={null} id='City' required={true} options={cityList.slice(0, 5)} {
                            ...register('city')
                        } />
                        {errors.city && <span className="text-red-500">{`${errors.city.message}`}</span>}

                    </div>
                    <div>

                        <Input
                            className={`${errors.Price ? "outline-red-400" : ""}`}
                            required={true}
                            type="text"
                            id="Price"
                            placeHolder='Enter Price'
                            {...register("Price")} // Registering email field with validation
                        />
                        {errors.Price && <span className="text-red-500">{`${errors.Price.message}`}</span>}
                    </div>



                </div>

                <div className='grid grid-cols-1 gap-4 mt-4'>
                    <div className=''>
                        <label htmlFor={'description'} className='font-bold cursor-pointer'>{"Description"}</label>
                        <textarea className='h-28 border-2 rounded-md w-full p-4' id='description' placeholder='Enter Description' {...register("description",)} />
                        {errors.description && <span className="text-red-500">{`${errors.description.message}`}</span>}
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
                                    {/* <div> */}

                                    <input
                                        {...register('file')}
                                        type="file" className='w-0' id='file'
                                        accept="image/*"
                                    />

                                    {/* </div> */}

                                    {fileSelected && fileSelected.length > 0 && <p className='w-full flex font-semibold justify-center items-center text-base_orange'>{fileSelected[0].name}</p>}
                                </div>
                                {errors.file && <span className="text-red-500">{`${errors.file.message}`}</span>}

                            </div>
                        </label>
                    </div>
                </div>
                <Button className='w-full mt-8' type="submit" disabled={isSubmitting}><span>Add New Property</span></Button>
            </form>
        </div>
    );
};

export default Form;
