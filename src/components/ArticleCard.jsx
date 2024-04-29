import React from 'react'

const ArticleCard = ({
    imageUrl,
    title,
    content
}) => {
    return (
        <div className='flex flex-col gap-5 text-white justify-between'>
            <img src={imageUrl} alt="articleImage" className='w-full rounded-sm' />
            <div className="flex flex-col gap-2">
                <h3 className='font-semibold leading-snug'>{title}</h3>
                <p className='text-opacity-80'>{content}</p>
            </div>
            <button className='capitalize px-6 py-2 rounded-md border border-white font-semibold'>read more</button>
        </div>
    )
}

export default ArticleCard