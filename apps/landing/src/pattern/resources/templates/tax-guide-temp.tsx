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
        <div className='w-full px-[18px] lg:container'>
            <div className='w-full lg:w-fit flex flex-col lg:flex-row lg:items-center lg:justify-start gap-6'>
                {taxGuides?.map(({ country, description, title }, idx) => (
                    <TaxGuideCard key={idx} country={country as "Nigeria" | "Ghana"} description={description} title={title} />
                ))}
            </div>
        </div>
    )
}

export default TaxGuideTemp