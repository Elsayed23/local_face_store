import React from 'react'
import SecTitle from '../../components/SecTitle'

const AboutSec = () => {
    return (
        <div className='py-52 bg-[url(./assets/images/aboutSecperfumeBG.png)] bg-cover relative before:absolute before:w-full before:h-full before:inset-0 before:bg-[url(./assets/images/aboutSecBG.png)] before:bg-cover before:z-10'>
            <div className="container mx-auto px-4 relative z-50 text-center">
                <SecTitle>
                    Welcome to Local Face
                </SecTitle>
                <p className='text-white max-w-3xl mx-auto font-light text-lg'>Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.</p>
            </div>
        </div>
    )
}

export default AboutSec