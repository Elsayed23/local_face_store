import React from 'react'
import SecTitle from '../../components/SecTitle'
import { productsData } from '../../constants'
import PerfumeCard from '../../components/PerfumeCard'

const BestSellingProductsSec = () => {

    const perfumeCard = productsData.slice(0, 4).map((perfume, idx) => {
        return (
            <PerfumeCard key={idx} {...perfume} />
        )
    })

    return (
        <div className='py-28'>
            <div className="container mx-auto px-4">
                <SecTitle>
                    Best selling products
                </SecTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-14 px-5">
                    {perfumeCard}
                </div>
            </div>
        </div>
    )
}

export default BestSellingProductsSec