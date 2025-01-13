import React from 'react'
import { accountTaxPractitionerFAQs, corporatFAQs, GeneralFAQs, individualFAQs, pricingFAQs, taxAuthorityFAQs } from '@/lib/data/faqs'
import GeneralFAQsCard from '../organisms/general-FAQs-card'
import FAQContainer from '../organisms/faq-container'
import FaqsNavigation from './faqs-navigation'

const FAQsTemp = () => {
    return (
        <div className='relative w-full min-h-[500px] h-fit mb-[153px]'>
            <div className='w-full lg:container flex items-start justify-between gap-16'>
                {/* left */}
                <div className='w-full flex flex-col gap-y-16'>
                    <div id="general" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-foreground text-[2rem] font-rubik font-semibold'>General</h3>
                        <div className='w-full flex justify-between items-start gap-y-12 flex-wrap'>
                            {GeneralFAQs?.map(({ answer, question }, idx) => (
                                <GeneralFAQsCard answer={answer} question={question} key={idx} />
                            ))}
                        </div>
                    </div>
                    <div id="individual-account" className='w-full h-fit'>
                        <FAQContainer header='Individual Account' faqs={individualFAQs} />
                    </div>
                    <div id="corporate-account" className='w-full h-fit'>
                        <FAQContainer header='Corporate Account' faqs={corporatFAQs} />
                    </div>
                    <div id="accounting-practitioners" className='w-full h-fit'>
                        <FAQContainer header='Accounting Practitioners' faqs={accountTaxPractitionerFAQs} />
                    </div>
                    <div id="tax-authority" className='w-full h-fit'>
                        <FAQContainer header='Tax Authorities' faqs={taxAuthorityFAQs} />
                    </div>
                    <div id="pricing" className='w-full h-fit'>
                        <FAQContainer header='Pricing FAQs' faqs={pricingFAQs} />
                    </div>
                </div>

                {/* Right */}
                <div className='sticky top-[88px] right-0 w-[184px] min-h-[203px]'>
                    <h6 className='w-full font-rubik font-medium text-base text-foreground pb-3'>On this page</h6>
                    <FaqsNavigation />
                </div>
            </div>
        </div>
    )
}

export default FAQsTemp