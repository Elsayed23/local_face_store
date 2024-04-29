import React from 'react'
import Hero from '../sections/home/Hero'
import AboutSec from '../sections/home/AboutSec'
import OurValues from '../sections/home/OurValues'
import BestSellingProductsSec from '../sections/home/BestSellingProductsSec'
import OurCollectionSec from '../sections/home/OurCollectionSec'
import Offer from '../sections/home/Offer'
import LatestArticles from '../sections/home/LatestArticles'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSec />
            <OurValues />
            <BestSellingProductsSec />
            <OurCollectionSec />
            <Offer />
            <LatestArticles />
        </>
    )
}

export default Home