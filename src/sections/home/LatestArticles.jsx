import React from 'react'
import SecTitle from '../../components/SecTitle'
import { articlesData } from '../../constants'
import ArticleCard from '../../components/ArticleCard'

const LatestArticles = () => {

    const articles = articlesData.map((article, idx) => {
        return (
            <ArticleCard key={idx} {...article} />
        )
    })

    return (
        <div className='py-28'>
            <div className="container mx-auto px-4">
                <SecTitle>
                    Latest Articles
                </SecTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-12 xl:gap-14 mt-14">
                    {articles}
                </div>
            </div>
        </div>
    )
}

export default LatestArticles