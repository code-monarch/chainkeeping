import React from 'react'
import { formatTextWithLinks } from '@/lib/utils/format-text'

const taxableIncome = [
    "Purchase of Cryptocurrency",
    "Transfer between own wallet",
    "Donations (To allowed bodies according to FIRS https://pwcnigeria.typepad.com/tax_matters_nigeria/2012/04/the-list-of-bodies-eligible-for-tax-deductible-donations-has-been-expanded.html )",
]

const NonTaxableCryptoIncome = () => {
    return (
        <div className='w-full flex flex-col gap-y-4'>
            <h3 className='text-[2rem] font-rubik font-semibold mt-4'>Non-taxable cryptocurrency transactions</h3>
            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                {
                    taxableIncome?.map((item, idx) => (
                        <li key={idx} className='font-normal' >{formatTextWithLinks(item)}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NonTaxableCryptoIncome