import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import WhoWeServeWidget, { IWhoWeServeWidgetProps } from '../organisms/who-we-serve-widget'
import IndividualCardIcon from '../atoms/individual-card-icon'
import CompanyCardIcon from '../atoms/company-card-icon'
import AccountingPractitionersCardIcon from '../atoms/accounting-practitioners-card-icon'
import TaxAuthorityCardIcon from '../atoms/tax-authority-card-icon'
import { SOLUTIONS_ROUTES, WHO_WE_SERVE_ROUTES } from '@/lib/routes'

const customers: IWhoWeServeWidgetProps[] = [
    {
        icon: <IndividualCardIcon />,
        label: 'Individuals',
        title: "Connecting all cryptocurrency accounts via a single system of record for tax reporting.",
        description: 'Monitor the overall value of your cryptocurrency holdings in real time with our user-friendly dashboard and get our Cryptocurrencies properly accounted for, taxed appropriately and filed, all in a single solution',
        href: SOLUTIONS_ROUTES.computation,
    },
    {
        icon: <CompanyCardIcon />,
        label: 'Companies',
        title: "Portfolio management, Financial Reporting and Tax planning for businesses all year round.",
        description: 'Self-service option that consolidates all cryptocurrency transactions into a single system and enables ERP integrations, accurate financial reporting, tax preparation and filing while adhering to the necessary financial reporting and tax regulatory guidelines.',
        href: WHO_WE_SERVE_ROUTES.company,
    },
    {
        icon: <AccountingPractitionersCardIcon />,
        label: 'Accounting Practitioners',
        title: "One-stop solution to manage your crypto clients' taxes and accounting.",
        description: 'Grow your practice by adding new clients who are distinct from your current clientele, through the automated technology from Chainkeeping. Also assist your clients with financial reporting, tax preparation and filing for their cryptocurrency assets seamlessly and generate more income.',
        href: WHO_WE_SERVE_ROUTES.accountingPractitioners,
    },
    {
        icon: <TaxAuthorityCardIcon />,
        label: 'Tax authorities',
        title: "Connecting the Crypto ecosystem to verify information, compute taxes, and ensure regulatory compliance by Tax-payers.",
        description: "Ensure efficient crypto-tax administration, promote the government's interest as regulators and generate revenue for the running of the government.Chainkeeping also provides support for inspections and reporting with full tax calculation throughout the ecosystem of digital assets.",
        href: WHO_WE_SERVE_ROUTES.taxAuthority,
    }
]

const WhoWeServe = () => {
    return (
        <div className='w-full md:container min-h-[819px] flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-2 items-center'>
                <HeaderLabel>Who we serve</HeaderLabel>
                <Typography className='text-center text-[2.25rem] leading-[42.66px]'>Crypto tax software for everyone</Typography>
            </div>
            <div className='flex flex-col gap-y-6'>
                <div className='w-full h-fit grid grid-cols-2 gap-x-16 gap-y-6 mx-auto'>
                    {customers.map(({ description, href, icon, label, title }, idx) => (
                        <WhoWeServeWidget key={idx} description={description} href={href} icon={icon} label={label} title={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoWeServe