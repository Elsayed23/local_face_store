import React from 'react'

const PerfumeCard = ({
    imageUrl,
    title,
    price,
    capacity,
}) => {
    return (
        <div className='bg-[url(./assets/images/productBG.png)] dropShadow bg-cover py-5 flex gap-3 flex-col justify-between group hover:-translate-y-5 duration-500'>
            <img src={imageUrl} alt="perfume" className='w-2/3 mx-auto group-hover:-translate-y-4 group-hover:skew-x-6 duration-500' />
            <div className="text-center">
                <h3 className='text-white font-medium text-lg'>{title}</h3>
                <div className="flex justify-center items-center gap-2">
                    <h5 className='text-brown font-bold'>{price}$</h5>
                    <h5 className='text-white text-opacity-80'>{capacity}ml</h5>
                </div>
            </div>
        </div>
    )
}

export default PerfumeCard