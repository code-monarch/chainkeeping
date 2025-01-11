import React from 'react'

const deducibleExpenses = [
    "Internet Subscriptions",
    "Mining Expenses",
    "In-game expenses",
    "Inheritance pursuance expenses",
]

const OtherDeducibleExpenses = () => {
    return (
        <div className='w-full flex flex-col gap-y-4'>
            <h3 className='text-[2rem] font-rubik font-semibold mt-4'>Other deductible expenses</h3>
            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                {
                    deducibleExpenses?.map((item, idx) => (
                        <li key={idx} className='font-normal' >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default OtherDeducibleExpenses