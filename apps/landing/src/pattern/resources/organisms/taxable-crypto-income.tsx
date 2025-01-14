import React from 'react'

const taxableIncome = [
  "Sale of Cryptocurrency for cash",
  "Trading one type of crypto for another (PNL)",
  "Receipt of Cryptocurrency for goods sold or services rendered",
  "Staking Rewards",
  "Airdrops",
  "Payment for goods or services",
  "Miscellaneous Income - Airdrops, rewards from gaming, Inheritance",
  "Net Capital Gains",
  "Gain from sale of crypto received as a gift",
  "Gains from traded mining income",
  "Mining Income",
  "Gain from sale of mining Income",
  "Gain from sale or trade of Airdrops",
  "Gain from sale or trade of Staking Rewards",
  "Inherited Crypto and Gain/loss from sale or trade of Inherited Crypto",
]

const TaxableCryptoIncome = () => {
  return (
    <div className='w-full flex flex-col gap-y-4'>
      <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold mt-4'>Taxable cryptocurrency income / transaction</h3>
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

export default TaxableCryptoIncome