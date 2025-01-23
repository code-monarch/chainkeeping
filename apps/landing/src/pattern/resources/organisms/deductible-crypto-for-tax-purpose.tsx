import React from 'react'
import { formatTextWithLinks } from '@/lib/utils/format-text'

const taxableIncome = [
    "Loss from sale or trade of Cryptocurrency carried forward",
    "Cryptocurrency fees (Fees charged on crypto-transactions called Gas/Network fees)",
    "P2P Fees",
    "Trading fees",
]

const DeductibleCryptoForTax = () => {
    return (
        <div className='w-full flex flex-col gap-y-4'>
            <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold mt-4'>Deductible cryptocurrencies for tax purpose</h3>
            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                {
                    taxableIncome?.map((item, idx) => (
                        <li key={idx} className='font-normal' >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DeductibleCryptoForTax