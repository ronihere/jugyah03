import React from 'react'
type TGlossyCardProp = {
    img: string;
    className: string;
    title: string
}
export default function GlossyCard({
    img, className, title
}: TGlossyCardProp) {
    return (
        <div className={` rounded-2xl overflow-hidden relative border-2 hover:border-2 hover:border-black transition-all duration-300 ease-in cursor-pointer`
} >
            <img src={img} alt={title} className={`${className} rounded-2xl object-cover `} />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <p className='absolute m-auto top-6 font-semibold text-[#ffffff] text-sm md:text-md left-1/2 transform -translate-x-1/2'>
                {title}
            </p>
    </div>
  )
}
