import React from 'react'
import bg from '../../assets/images/ourSecValuesPerfumeBG.png'

const OurValues = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-between'>
            <img src={bg} alt="perfumeBG" className='flex-1' />
            <div className="flex-1 py-16 px-4 xl:py-0 bg-[url(./assets/images/ourValuesSecBG.png)] bg-cover bg-center flex flex-col gap-6 justify-center items-center text-white">
                <h1 className='font-medium text-5xl'>Our Values</h1>
                <div className='xl:px-24'>
                    <p className='mb-5'>At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives.</p>
                    <p> Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.</p>
                </div>
            </div>
        </div>
    )
}

export default OurValues