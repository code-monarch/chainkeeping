import React from 'react'
import PlanCard from './plan-card'
import { Check } from 'lucide-react'
import ComparePricesSection from './compare-prices-section'
import CostCurrencyWidget from '../molecules/cost-currency-widget'

const CompanyPricingTab = () => {
    return (
        <div className='w-full lg:min-h-[400px] h-fit space-y-[32px] lg:space-y-[104px]'>
            <div className='w-full space-y-[32px]'>
                <div className='block lg:hidden'>
                    <CostCurrencyWidget />
                </div>
                <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    {/* Basic */}
                    <PlanCard amount='75' pack='Starter pack' title='Basic' pecks={
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]">
                                <Check className="h-5 w-5 text-secondary mt-0.5" />
                                <span className="text-sm">
                                    Up to <span className="font-semibold">1,000</span> Transactions
                                </span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]">
                                <Check className="h-5 w-5 text-secondary mt-0.5" />
                                <span className="text-sm">
                                    Autogenerated Tax forms of designated country
                                </span>
                            </li>
                        </ul>
                    } />

                    {/* Premium */}
                    <PlanCard amount='350' pack='Advanced, recommended' title='Premium' pecks={
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]">
                                <Check className="h-5 w-5 text-secondary mt-0.5" />
                                <span className="text-sm">
                                    Up to <span className="font-semibold">8,000</span> Transactions
                                </span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]">
                                <Check className="h-5 w-5 text-secondary mt-0.5" />
                                <span className="text-sm">
                                    Autogenerated Tax forms of designated country
                                </span>
                            </li>
                        </ul>
                    } />

                    {/* Customised */}
                    <PlanCard amount='***' pack='Unlimited plan' title='Customized' customized={true} pecks={
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]">
                                <Check className="h-5 w-5 text-secondary mt-0.5" />
                                <span className="text-sm">
                                    <span className="font-semibold">Unlimited</span> Transactions
                                </span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[hsla(215,16%,47%,1)]">
                                <Check className="h-5 w-5 text-secondary mt-0.5" />
                                <span className="text-sm">
                                    Autogenerated Tax forms of designated country
                                </span>
                            </li>
                        </ul>
                    } />
                </div>
            </div>
            <ComparePricesSection />
        </div>
    )
}

export default CompanyPricingTab