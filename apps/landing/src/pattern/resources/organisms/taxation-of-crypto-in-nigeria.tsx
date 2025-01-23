import React from 'react'

const applicableTaxes = [
    {
        name: "Capital Gains Tax",
        subTax: []
    },
    {
        name: "Income Tax",
        subTax: ["Personal Income Tax", "Company Income Tax"]
    },
    {
        name: "Withholding Tax",
        subTax: []
    },
]

const capitalGainsTax = [
    "Based on CGT Act 2019: Securities are chargeable assets subject to CGT;",
    "Rate: Flat rate of 10% on the chargeable gain (profit) on disposal, after deducting allowable expenses;",
    "Threshold: N100 Million.",
    "Filings of CGT for securities is done on annual basis;",
    "Power to Collect CGT: for individuals, chargeable gains are collected by  the state internal revenue authorities, while FIRS collects that of companies."
]

const incomeTax = [
    "Income derived by companies from bonds and shorter securities are subject to income tax effective 2nd January 2022;",
    "The bonds and securities on which income tax is due effective 2nd January 2022 include - federal gov’t treasury bills and promissory notes, bonds issued by states and LGs, bonds issued by corporate bodies, and interest earned on bonds and short-term securities;",
    "Exemption: Bonds issued by federal government;",
    "Income tax filings are done annually.",
    "Company Rates:",
]
const withholdingTax = [
    "WHT deduction applies to interest and other payments made to any company on account of income from bonds and other securities;",
    "Rates: 10% and 5% on Company and Individuals respectively;",
    "WHT returns are done monthly.",
]

const TaxationOfCryptoInNigeria = () => {
    return (
        <div className="w-full space-y-[16px] mt-4">
            <h3 className='text-2xl lg:text-3xl font-rubik font-semibold mb-4'>TAXATION OF CRYPTOCURRENCY  IN NIGERIA</h3>
            <h3 className='text-2xl lg:text-3xl font-rubik font-semibold'>Classification of cryptocurrency</h3>
            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                Cryptocurrency is classified as securities according to the SEC regulation released I April, 2022 and defines it as Digital Assets - a digital token that represents assets such as a debt or equity claim on the issuer;
            </p>
            <h3 className='text-2xl lg:text-3xl font-rubik font-semibold'>Applicable taxes to cryptocurrency</h3>
            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                Based on Nigeria's ACTs, Securities are subject to 3 main taxes: </p>
            <ol className="roman-list list-none space-y-2 text-gray-600 leading-[26px] font-dmsans font-normal pl-6">
                {applicableTaxes?.map((item, idx) => (
                    <li key={idx} className="relative before:content-[counter(list-counter)'.'] before:absolute before:left-0 before:font-semibold pl-6 font-dmsans font-bold text-base">
                        {item.name}
                        {!!item.subTax ?
                            <ul className='list-disc pl-3'>
                                {
                                    item.subTax?.map((item, idx) => (
                                        <li key={idx} className='font-normal' >{item}</li>
                                    ))
                                }
                            </ul>
                            : ""}
                    </li>
                ))}
            </ol>

            {/* Capital gains tax */}
            <h3 id="applicable-taxes" className='text-base font-rubik font-semibold mt-4'>Capital Gains Tax</h3>
            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                {
                    capitalGainsTax?.map((item, idx) => (
                        <li key={idx} className='font-normal' >{item}</li>
                    ))
                }
            </ul>

            {/* Income tax */}
            <h3 className='text-base font-rubik font-semibold mt-4'>Income Tax <span className='font-normal'>(Company Income Tax and Personal Income Tax)</span></h3>
            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                {
                    incomeTax?.map((item, idx) => (
                        <li key={idx} className='font-normal' >{item}</li>
                    ))
                }
            </ul>

            <div className='bg-[hsla(204,33%,97%,1)] w-full min-h-[186px] h-fit text-base font-space_Grotesk font-medium p-4 rounded-[8px]'>
                Turnover less than ₦25,000,000.00 @ 0% 0f Assessable Profit <br /><br />
                Higher of 20% 0f Assessable Profit, where Turnover is between ₦25,000,000.00 to ₦100,000,000.0030% 0f Assessable Profit, where Turnover is greater than ₦100,000,000.00. <br /> <br />
                OR <br /> <br />
                Minimum Tax - 0.5% of Gross Turnover above ₦25,000,000.00
            </div>
            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                <li className='font-normal' >Personal Income Tax rates:</li>
            </ul>

            <div className='bg-[hsla(204,33%,97%,1)] w-full min-h-[186px] h-fit flex flex-col gap-y-3 text-base font-space_Grotesk font-medium p-4 rounded-[8px]'>
                <span>First ₦300,000.00 @ 7%</span>
                <span>Next ₦300,000.00 @ 11%</span>
                <span>Next ₦500,000.00 @ 15%</span>
                <span>Next ₦500,000.00 @ 19%</span>
                <span>Next ₦1,600,000.00 @ 21%</span>
                <span>Above ₦3,200,000.00 @ 24%</span>
            </div>

            {/* Withholding tax */}
            <h3 className='text-base font-dmsans font-semibold mt-4'>Income Tax <span className='font-normal'>(Company Income Tax and Personal Income Tax)</span></h3>
            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                {
                    withholdingTax?.map((item, idx) => (
                        <li key={idx} className='font-normal' >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaxationOfCryptoInNigeria