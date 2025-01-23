import React from 'react'
import { BlueInfoIcon } from "../atoms/blue-info-icon"
import InfoWidget from '../molecules/info-widget'
import TaxCalculationCard from '../molecules/tax-calculation-card'
import TaxFormIssuedIcon from '../atoms/tax-form-issued-icon'
import ReportChecklistImg from "@/public/images/report-checklist-img.png"
import Image from 'next/image'

const taxProfessionals = [
    "Connect all crypto-wallets and handle all tax issues",
    "Handle other Tax issues",
    "Certify Tax Reports",
    "Ensure compliance with Tax regulations"
]
const penalties = [
    "Fees",
    "Penalties",
    "Interest",
    "Confiscated refunds",
    "Audits",
    "Jail time",
]

const importanceOfTaxOptimization = [
    "Small firms and individuals may find it difficult to obtain funding from other sources. As a result, saving money on taxes is often their first line of defense.",
    "Tax optimization can result in more money in your pocket. At the end of each financial year, the lower the overall tax rate, the more money is available to reinvest or consider as profit.",
    "When looking for strategies to reduce their overall tax rates, private businesses should examine both the company's and the owner's perspectives. This means that it employs both corporate and individual tax-cutting techniques."
]

const DeterminationOfCryptoGainsOrLoss = () => {
    return (
        <div className='w-full flex flex-col gap-y-4'>
            <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold mt-4'>Determination of cryptocurrency gains or loss</h3>
            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>It is important to note that cryptocurrency inflows establish the cost basis for Cryptocurrencies, to enable the easy determination of gain or loss on same. Simply, in order to determine whether or not a gain or loss was realized on a cryptocurrency, there's a need to determine a cost basis first.</p>
            <InfoWidget info="Cost basis is the acquisition cost of your cryptocurrency; this includes your purchase price, the value of other crypto given up in exchange for this crypto, or amount reported as income if the crypto was earned. To then ascertain the gain or loss, the following methods are used;" />

            <div className='w-full space-y-[32px]'>
                <div className='space-y-[16px]'>
                    <h3 className='text-base font-rubik font-semibold mt-4'>First In First Out (FIFO)</h3>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                        This method is a taxation method in which assets (cryptocurrencies) acquired first are disposed of first. That is, whenever a sale of acquired asset occurs, it is assumed that the asset been sold is the first that was acquired.
                    </p>
                </div>
                <div className='space-y-[16px]'>
                    <h3 className='text-base font-rubik font-semibold mt-4'>Last In First Out (LIFO)</h3>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                        This method is a taxation method in which the last assets (cryptocurrencies) acquired are disposed of first. That is, whenever a sale of acquired asset occurs, it is assumed that the asset been sold is the last or most recently acquired.
                    </p>
                </div>
                <div className='space-y-[16px]'>
                    <h3 className='text-base font-rubik font-semibold mt-4'>Average Cost Method (ACM)</h3>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                        This method of calculating taxable income recalculates unit cost of cryptocurrency at every point of purchase. Therefore, where a disposal occurs, the cost of the disposed asset is calculated using the average cost of all the acquired assets in the wallet.
                    </p>
                </div>
                <div className='space-y-[16px]'>
                    <h3 className='text-base font-rubik font-semibold mt-4'>Specific Identification - Lowest Cost Method (LCM)</h3>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                        This method is a taxation method in which assets (cryptocurrencies) acquired at the lowest cost or at the most-minimum prices are disposed of first. That is, whenever a sale of acquired asset occurs, it is assumed that the asset been sold is the Cheapest at time of acquisition.
                    </p>
                </div>
                <div className='space-y-[16px]'>
                    <h3 className='text-base font-rubik font-semibold mt-4'>Specific Identification - Highest Cost Method (HCM)</h3>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                        This method is a taxation method in which assets (cryptocurrencies) acquired with the highest cost or at the most expensive prices are disposed of first. That is, whenever a sale of acquired asset occurs, it is assumed that the asset been sold is the most expensive at time of acquisition.
                    </p>
                </div>
                <div className='space-y-[16px]'>
                    <h3 className='text-[2rem] font-rubik font-semibold mt-4'>How is cryptocurrency taxed?</h3>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Mr. Olayinka opened an account with Binance exchange on the 4th of November, 2021 and purchased bitcoin as seen below;</p>
                    <div className='bg-[hsla(204,33%,97%,1)] w-full lg:min-h-[186px] h-fit flex flex-col gap-y-3 text-base font-space_Grotesk font-medium p-4 rounded-[8px]'>
                        <span>4th Nov 2021,	1 Bitcoin @ $45,000.00</span>
                        <span>29th Nov 2022, 1 Bitcoin @ $38,000.00</span>
                        <span>20th Dec 2022, 1 Bitcoin @ $50,000.00</span>
                        <span>31st Jan 2022, 1 Bitcoin @ $63,300.00</span>
                        <span>1st Mar 2022,	1 Bitcoin @ $41,800.00</span>
                    </div>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Mr. Olayinka decided to sell one of his Bitcoin on the 3rd of April, 2022 when the price of Bitcoin was $53,840.</p>
                    <div className='bg-[hsla(194,100%,95%,1)] w-full h-fit flex items-start gap-4 py-3 px-4 border-l-4 border-l-[hsla(194,100%,50%,1)] rounded-r-[8px]'>
                        <p className='text-base font-dmsans font-medium leading-[26px]'>
                            <span className='font-bold'>Required:</span> Compute Mr. Olayinka's Cryptocurrency taxable income and tax liability on the sale of Bitcoin made on the 3rd of April, 2022, assuming a tax rate of 10%.
                        </p>
                    </div>
                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-medium'>Solution:</p>
                    <div className='w-full flex items-start gap-8 flex-wrap'>
                        {/* FIFO */}
                        <TaxCalculationCard salesProceed='53,840.00' taxLiability='884.00' taxableIcome='8,840.00' title='FIFO Method' type='FIFO' costBasis="45,000.00" />
                        {/* LIFO */}
                        <TaxCalculationCard salesProceed='53,840.00' taxLiability='1,204.00' taxableIcome='12,040.00' title='LIFO Method' type='LIFO' costBasis="41,800.00" />
                        {/* Specific Identification Method - Highest cost Method */}
                        <TaxCalculationCard salesProceed='53,840.00' taxLiability='946.00' taxableIcome='9,460.00' title='Specific Identification Method - Highest cost Method' type='Specific Identification Method' costBasis="63,300.00" />
                        {/* Average Cost Method */}
                        <TaxCalculationCard salesProceed='53,840.00' taxLiability='628.00' taxableIcome='6,280.00' title='Average Cost Method' type='Average Cost Method' costBasis="47,560.00" />
                    </div>

                    {/* Tax forms issued by cryptocurrency exchanges */}
                    <div className='space-y-[32px] mt-4'>
                        <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold'>Tax forms issued by cryptocurrency exchanges</h3>
                        <div className='space-y-[32px]'>
                            <div className='w-full flex items-start gap-x-4'>
                                <div>
                                    <TaxFormIssuedIcon />
                                </div>
                                <div className='space-y-[16px]'>
                                    <h3 className='text-base font-rubik font-semibold'>1099-MISC</h3>
                                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>This form provides information for a wide range of income payments such as crypto earnings, referral bonuses, and other income. If you received crypto earnings or bonuses, the 1099-MISC will be made available by the platform that issued the payments. You're responsible for reporting the income on the tax authority's tax forms when filing your tax return.</p>
                                </div>
                            </div>
                            <div className='w-full flex items-start gap-x-4'>
                                <div>
                                    <TaxFormIssuedIcon />
                                </div>
                                <div className='space-y-[16px]'>
                                    <h3 className='text-base font-rubik font-semibold'>1099-B</h3>
                                    <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Forms 1099-B report cost basis when available. Gains reported on this are taxed pursuant to capital gains treatment if it meets the threshold, if not, it is treated as ordinary income.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tax forms issued by cryptocurrency exchanges */}
                    <div className='space-y-[32px] pt-4'>
                        <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold'>Tax forms issued by cryptocurrency exchanges</h3>
                        <div className='space-y-[16px]'>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Every taxpayer is expected to get relevant tax forms from the tax authority applicable to them and file their returns for the period.</p>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'><strong>Individuals</strong> are required to request for Personal Income Tax Returns Form, fill it, file and pay their taxes within six (6) months from the end of the government fiscal year and also apply for Tax Clearance Certificate. Their Cryptocurrency income is meant to be included in the other income from other sources column with an attachment of the tax report generated from the Taxwhales platform.</p>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'><strong>Corporate</strong> bodies are required to declare all their incomes in their financial statement, file same on the Company Income Tax Returns Form, remit their taxes and make an application for Tax Clearance Certificate to FIRS within six months from the end of their accounting period (Document attached). The realized income/loss should be recognized in the Statement of Profit or Loss while the Unrealized income/loss should be recognized in the Other comprehensive income section.</p>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'><strong>Withholding Tax</strong> - for both Corporate bodies and Individuals who trade cryptocurrency for others and pay returns (Like investment), Withholding Tax should be withheld and remitted to the FIRS on behalf of the Client. If Company - FIRS, If Individual - State Internal Revenue Service.</p>
                        </div>
                        <InfoWidget info="The processing of taxes for Companies/Corporate bodies has been made seamless and is done on the Taxpro (https://taxpromax.firs.gov.ng/) Platform of the government. Only taxes relating to individuals are filed manually." Icon={<BlueInfoIcon />} className='bg-[hsla(214,84%,56%,0.1)] h-fit lg:h-[84px] font-medium font-dmsans border-l-[hsla(214,84%,56%,1)]' />
                    </div>
                    {/* Reports issued by Chainkeeping for tax filing */}
                    <div className='space-y-[32px] pt-4'>
                        <h3 className='lg:text-[2rem] font-rubik font-semibold'>Reports issued by Chainkeeping for tax filing</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Our Platform, Chainkeeping provides both Individual and Corporates users with a comprehensive report - Tax Report - which details the wallet transactions within a particular period, the capital gains and other Incomes. The gains/losses in the report are certified by a Tax Professional who affirms to this report by signing on it. This report is to be attached with other document when filing taxes by the Taxpayer.</p>
                    </div>
                    {/* Tax Optimization */}
                    <div className='space-y-[32px] pt-4'>
                        <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold'>Tax Optimization</h3>
                        <div className='bg-accent w-full max-w-[976px] h-fit lg:h-[300px] flex items-end justify-center rounded-[8px]'>
                            <div className='relative w-[200px] lg:w-[386px] h-[183px] lg:h-[283px]'>
                                <Image src={ReportChecklistImg} alt="Report Checklist" fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>It is very important to understand the difference between a WASH SALE and Tax Optimization. Tax optimization refers to the usage and implementation of processes that can reduce an individual or company's tax liabilities and charges to a minimum without violating tax laws. It can decrease it to a minimal value in a legal manner and without violating the tax laws by using the various regulations to advantage - simply put, it is Tax Avoidance.<br /><br />
                            A Wash sale however, is the sale of a stock at a loss and repurchase of the same or substantially identical stock within 30 days, for which the capital loss is disallowed for tax purposes. A crypto wash sale is the act of selling a Cryptocurrency at a loss and then buying the same security again shortly after. The Wash sale rules restrict an investor from deducting the loss on a security if repurchased within 30 days. Day traders may buy and sell the same stock frequently which can result in a wash sale. A wash sale is Tax Evasion.<br /><br />
                            Chainkeeping helps to optimize taxes of users.</p>
                        {/* Importance of Tax Optimization */}
                        <div className='space-y-[16px]'>
                            <h3 className='text-base font-rubik font-semibold mt-4'>Importance of Tax Optimization</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                The following are some of the reasons why tax optimization is important:
                            </p>
                            <ol className="roman-list list-none space-y-2 text-gray-600 leading-[26px] font-dmsans font-normal pl-6">
                                {importanceOfTaxOptimization?.map((item, idx) => (
                                    <li key={idx} className="relative before:content-[counter(list-counter)'.'] before:absolute before:left-0 before:font-normal pl-6 font-dmsans font-normal text-base">
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        </div>
                        {/* How Chainkeeping Helps in Cryptocurrency Tax Optimization? */}
                        <div className='space-y-[16px]'>
                            <h3 className='text-base font-rubik font-semibold mt-4'>How Chainkeeping Helps in Cryptocurrency Tax Optimization?</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Our tax optimization services help individuals and companies to maximize their income by helping them identify assets which can be sold at a loss and replacing it with the same or reasonably similar investment, then use the loss to offset any realized gains. This reduces value of realized gains, thereby, reducing tax liability of the Individual or Company.
                            </p>
                        </div>
                    </div>

                    {/* Tax Professionals */}
                    <div className='space-y-[32px] pt-4'>
                        <h3 className='text-[2rem] font-rubik font-semibold'>Tax professionals</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Chainkeeping provides all users with the option of using a tax professional for all or one of the following services -</p>
                        <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                            {
                                taxProfessionals?.map((item, idx) => (
                                    <li key={idx} className='font-normal' >{item}</li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* How do tax authority know about your cryptocurrency */}
                    <div className='space-y-[32px] pt-4'>
                        <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold'>How do tax authorities know about your cryptocurrency?</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Tax authorities such as the IRS, ATO, CRA, HMRC, and others use a variety of techniques to track cryptocurrency transactions and enforce tax compliance. For starters, the IRS has subpoenaed domestic and international cryptocurrency exchanges such as Coinbase and Bitstamp for user transaction information. This has lead to at least tens of thousands of cryptocurrency users' transaction information being shared directly with the tax authorities.<br /><br />
                            In addition, tax authorities, like the IRS, use data analytics tools such as Chainanalysis and Palantir to pinpoint cryptocurrency users and tie their identity from a regulated cryptocurrency exchange to their off-exchange wallets and transactions (including multiple layers removed from the exchange).<br /><br />
                            The IRS and other tax authorities also partner and share data with other governmental bodies, academic institutions, and international governments to share information about cryptocurrency usage.</p>
                    </div>

                    {/* Penalty for non-payment and non-filing of crypto taxes */}
                    <div className='space-y-[32px] pt-4'>
                        <h3 className='text-2xl lg:text-[2rem] font-rubik font-semibold'>Penalty for non-payment and non-filing of crypto taxes</h3>
                        <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                            {
                                penalties?.map((item, idx) => (
                                    <li key={idx} className='font-normal' >{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeterminationOfCryptoGainsOrLoss