import React from 'react'
import TaxGuideCard from '../organisms/tax-guide-card'

const taxGuides = [
    {
        title: 'Taxation of cryptocurrencies as securities in Nigeria',
        description: 'According to UN Newspaper, “Financial institutions in Nigeria are currently banned fro',
        country: 'Nigeria'
    },
    {
        title: 'Taxation of cryptocurrencies as securities in Ghana',
        description: 'According to UN Newspaper, “Financial institutions in Ghana are currently banned fro',
        country: 'Ghana'
    },
]

const TaxGuideTemp = () => {
    return (
        <div className='w-fit flex items-center gap-6'>
            {taxGuides?.map(({ country, description, title }, idx) => (
                <TaxGuideCard key={idx} country={country as "Nigeria" | "Ghana"} description={description} title={title} />
            ))}
        </div>
    )
}

export default TaxGuideTemp