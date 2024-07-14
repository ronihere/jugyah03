import { z } from 'zod'

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]
const fileSchema = z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        ".jpg, .jpeg, .png and .webp files are accepted."
    )

const propertyAddSchema = z.object({
    Name: z.string().min(1, 'Name must be longer'),
    Address: z.string().min(10, "More inputs needed"),
    Unit: z.coerce.number().min(0, "Must be a positive"),
    description: z.string().min(4, "add something more"),
    roomtype: z.string().min(1, 'required'),
    city: z.string().min(1, 'required'),
    Price: z.coerce.number().min(1, 'Price should not be this small'),
    file: fileSchema

})
// const propertyAddSchema = z.object({
//     Name: z.any(),
//     Address: z.any(),
//     Unit: z.any(),
//     description: z.string().min(4, "add something more"),
//     roomtype: z.string().min(1, 'required'),
//     city: z.any(),
//     Price: z.any(),
//     file: z.any()

// })

type TPropertyAddSchema = z.infer<typeof propertyAddSchema>

export {type TPropertyAddSchema , MAX_FILE_SIZE , ACCEPTED_IMAGE_TYPES , propertyAddSchema}