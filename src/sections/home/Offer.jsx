import React from 'react'
import Button from '../../components/Button'

const Offer = () => {
    return (
        <div>
            <div className="py-28 rounded-sm container mx-auto px-4 md:px-5 lg:px-9 bg-[url(./assets/images/offer.png)] bg-center md:bg-current">
                <div className="md:max-w-xl text-white mb-8">
                    <h1 className='font-medium text-3xl md:text-5xl md:leading-snug mb-5'>Perfume Year-End Sale! Up to 50% OFF</h1>
                    <p className='text-opacity-80 font-light'>Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!</p>
                </div>
                <Button>
                    Know More
                </Button>
            </div>
        </div>
    )
}

export default Offer