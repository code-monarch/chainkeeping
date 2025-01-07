import React from 'react'
import { accountTaxPractitionerFAQs, corporatFAQs, GeneralFAQs, individualFAQs, pricingFAQs, taxAuthorityFAQs } from '@/lib/data/faqs'
import GeneralFAQsCard from '../organisms/general-FAQs-card'
import FAQContainer from '../organisms/faq-container'

const FAQsTemp = () => {
    return (
        <div className='relative w-full min-h-[500px] h-fit mb-[153px]'>
            <div className='w-full md:container flex items-start justify-between gap-16'>
                {/* left */}
                <div className='w-full max-w-[952px] flex flex-col gap-y-16'>
                    <div className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-foreground text-[2rem] font-rubik font-semibold'>General</h3>
                        <div className='w-full flex justify-start items-start gap-x-16 gap-y-12 flex-wrap'>
                            {GeneralFAQs?.map(({ answer, question }, idx) => (
                                <GeneralFAQsCard answer={answer} question={question} key={idx} />
                            ))}
                        </div>
                    </div>
                    <FAQContainer header='Individual Account' faqs={individualFAQs} />
                    <FAQContainer header='Corporate Account' faqs={corporatFAQs} />
                    <FAQContainer header='Accounting Practitioners' faqs={accountTaxPractitionerFAQs} />
                    <FAQContainer header='Tax Authorities' faqs={taxAuthorityFAQs} />
                    <FAQContainer header='Pricing FAQs' faqs={pricingFAQs} />
                </div>
                
                {/* Right */}
                <div className='sticky top-[88px] right-0 bg-red-500 w-[184px] min-h-[203px]'></div>
            </div>
        </div>
    )
}

export default FAQsTemp