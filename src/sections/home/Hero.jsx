import React from 'react'
import perfumeHero from '../../assets/images/hero_bg.png'
import perfume from '../../assets/images/perfumeHero.png'
import Button from '../../components/Button'

const Hero = () => {
    return (
        <div className="min-h-screen relative flex items-center">
            <img src={perfumeHero} className='absolute w-full h-full inset-0 -z-10' alt="perfumeHero" />
            <div className="container mx-auto px-4 h-full flex flex-col pt-44 lg:pt-0 lg:flex-row justify-between items-center text-white relative">
                <div className="flex-1 font-satoshi-variable">
                    <h1 className='text-4xl lg:text-6xl md:max-w-xl lg:max-w-3xl font-light leading-tight mb-5'>Elevate Your Spirit with Victory Scented Fragrances!</h1>
                    <p className='text-xl font-thin mb-8'>Shop now and embrace the sweet smell of victory with Local Face.</p>
                    <Button>
                        shop now
                    </Button>
                </div>
                <img src={perfume} alt="perfume" className='object-cover w-full lg:w-1/3' />
            </div>
        </div>
    )
}

export default Hero