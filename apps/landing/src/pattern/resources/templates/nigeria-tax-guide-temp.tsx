import React, { FC } from 'react'
import TaxGuideNavigation from './tax-guide-navigation'
import TaxGuideCountryHeaderSection from '../organisms/tax-guide-country-header-section'
import TaxGuideIntroSection from '../organisms/tax-guide-intro-section'
import TaxationOfCryptoInNigeria from '../organisms/taxation-of-crypto-in-nigeria'
import TaxableCryptoIncome from '../organisms/taxable-crypto-income'
import NonTaxableCryptoIncome from '../organisms/non-taxable-crypto-incom'
import DeductibleCryptoForTax from '../organisms/deductible-crypto-for-tax-purpose'
import OtherDeducibleExpenses from '../organisms/other-deducible-expenses'
import DeterminationOfCryptoGainsOrLoss from '../organisms/determination-of-crypto-gains-or-loss'

interface IProps {
    country: "Nigeria" | "Ghana"
}

const NigeriaTaxGuideTemp: FC<IProps> = ({ country }) => {
    return (
        <div className='relative w-full min-h-[500px] h-fit mb-[153px]'>
            <div className='w-full md:container flex items-start justify-between gap-16'>
                {/* left */}
                <div className='w-full flex flex-col gap-y-16'>
                    <div id="general" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-foreground text-[2rem] font-rubik font-semibold'>Crypto Tax Guide Nigeria</h3>
                        <TaxGuideCountryHeaderSection country={country} />

                        <div id="guide" className='w-full'>
                            <TaxGuideIntroSection />
                        </div>
                        <div id="crypto-taxation" className='w-full'>
                            <TaxationOfCryptoInNigeria />
                        </div>
                        <div id="taxable-crypto-income" className='w-full'>
                            <TaxableCryptoIncome />
                        </div>
                        <div id="non-taxable-crypto-transactions" className='w-full'>
                            <NonTaxableCryptoIncome />
                        </div>
                        <div id="deductible-crypto-for-tax-policies" className='w-full'>
                            <DeductibleCryptoForTax />
                        </div>
                        <div id="other-deductible-expenses" className='w-full'>
                            <OtherDeducibleExpenses />
                        </div>
                        <div id="determination-of-crypto-gains-or-loss" className='w-full'>
                            <DeterminationOfCryptoGainsOrLoss />
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className='sticky top-[88px] right-0 w-[184px] min-h-[203px] h-full'>
                    <h6 className='w-full font-rubik font-medium text-base text-foreground pb-3'>On this page</h6>
                    <TaxGuideNavigation country={country} />
                </div>
            </div>
        </div>
    )
}

export default NigeriaTaxGuideTemp