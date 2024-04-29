import React from 'react'
import SecTitle from '../../components/SecTitle'
import collection1 from '../../assets/images/collection-1.png'
import collection2 from '../../assets/images/collection-2.png'
import collection3 from '../../assets/images/collection-3.png'
import collection4 from '../../assets/images/collection-4.png'
import collection5 from '../../assets/images/collection-5.png'
import collection6 from '../../assets/images/collection-6.png'
import collection7 from '../../assets/images/collection-7.png'


const OurCollectionSec = () => {

    return (
        <div className='py-28'>
            <div className="container mx-auto px-4">
                <SecTitle>
                    Our Collections
                </SecTitle>
                <div className="flex flex-col gap-12 md:gap-16 mt-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16">
                        <div className="relative">
                            <img src={collection1} alt="img1" className='w-full h-[460px] rounded-sm' />
                            <h6 className='absolute left-6 bottom-8 font-medium text-white'>Designer Delights Collection</h6>
                        </div>
                        <div className="relative xl:col-span-2">
                            <img src={collection2} alt="img2" className='w-full h-[460px] rounded-sm' />
                            <h6 className='absolute left-6 bottom-8 font-medium text-white'>Travel Essentials Collection</h6>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        <div className='relative'>
                            <img src={collection3} alt="img3" className='w-full h-[480px] rounded-sm' />
                            <h6 className='absolute left-6 bottom-8 font-medium text-white'>Special Occasions Collection</h6>
                        </div>
                        <div className='relative'>
                            <img src={collection4} alt="img4" className='w-full h-[480px] rounded-sm' />
                            <h6 className='absolute left-6 bottom-8 font-medium text-white'>Seasonal Sensations Collection</h6>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-16">
                        <div className='relative'>
                            <img src={collection5} alt="img5" className='w-full h-[480px] rounded-sm' />
                            <h6 className='absolute left-6 bottom-8 font-medium text-white'>Vintage Treasures Collection</h6>
                        </div>
                        <div className='relative xl:col-span-2'>
                            <img src={collection6} alt="img6" className='w-full h-[480px] rounded-sm' />
                            <h6 className='absolute left-6 bottom-8 font-medium text-white'>Limited Edition Treasures</h6>
                        </div>
                        <div className='relative'>
                            <img src={collection7} alt="img7" className='w-full h-[480px] rounded-sm' />
                            <h6 className='absolute left-6 bottom-8 font-medium text-white'>Modern Classics Collection</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCollectionSec