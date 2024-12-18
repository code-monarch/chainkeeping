import React from 'react'
import NavListItem from '../molecules/nav-list-item'
import CryptoTaxGuideIcon from '../atoms/nav-icons/crypto-tax-icon'
import BlogIcon from '../atoms/nav-icons/blog-icon'
import FinancialReportingGuide from '../atoms/nav-icons/financial-reporting-guide'
import SupportIcon from '../atoms/nav-icons/support-icon'
import GlossaryIcon from '../atoms/nav-icons/glossary-icon'

const ResourcesNavContent = () => {
    return (
        <div className='bg-inherit w-full h-[280px] grid grid-cols-3 gap-12 mx-auto'>
            <div className='w-full flex flex-col items-center gap-y-9'>
                {/* Crypto Tax guide */}
                <NavListItem icon={<CryptoTaxGuideIcon />} href='/' title='Crypto tax guide' description='Learn how crypto taxes work in your country of residence.Computation, filing, optimization and consultation' />
                
                {/* Blog */}
                <NavListItem icon={<BlogIcon />} href='/' title='Blog' description='Articles on cryptocurrency taxation, accounting, industry regulations etc.' />
            </div>

            <div className='w-full flex flex-col items-center gap-y-9'>
                {/* Financial reporting guide */}
                <NavListItem icon={<FinancialReportingGuide />} href='/' title='Financial reporting guide' description='Everything you need to know about crypto financial reporting.' />

                {/* Support */}
                <NavListItem icon={<SupportIcon />} href='/' title='Support' description='More information about Chainkeeping, get answers to your questions.' />
            </div>

            <div className='w-full flex flex-col items-center gap-y-9'>
                {/* Glossary */}
                <NavListItem icon={<GlossaryIcon />} href='/' title='Glossary' description='Get informed, A-Z of crypto, crytpo taxation and more.' />
            </div>
        </div>
    )
}

export default ResourcesNavContent