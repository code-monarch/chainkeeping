import React from 'react'
import InfoCard, { IInfoCardProps } from '../organisms/info-card'
import CompliantRegulatoryFilingImg from "@/public/images/compliant-regulatory-filing-img.png"
import MultipleIntegrationsImg from "@/public/images/multiple-integrations-img.png";
import TaxOptimizationImg from "@/public/images/tax-optimization-img.png"
import BulkPaymentImg from "@/public/images/bulk-payment-img.png"

const info: IInfoCardProps[] = [
    {
        img: CompliantRegulatoryFilingImg,
        title: "Compliant regulatory filings",
        description: "Chainkeeping collects your crypto transactions via integration with all your crypto platforms to help you properly account for and compute your taxes accurately in line with crypto tax regulations put in place by the tax authorities in different jurisdictions."
    },
    {
        img: BulkPaymentImg,
        title: "Bulk payments",
        description: "Connect and make bulk payments from your digital assets' wallets at events, to event attendees, friends, and/or loved ones and save time and errors in making single payments. We have provided integrations for your wallets, in order to make things easy for you."
    },
    {
        img: MultipleIntegrationsImg,
        title: "Multiple integrations",
        description: "Integrate all your crypto platforms with Chainkeeping. We've provided integrations for exchanges, wallets, DeFi platforms and NFT Marketplaces in order to make things easy for you."
    },
    {
        img: TaxOptimizationImg,
        title: "Tax optimization",
        description: "Our tax Optimization feature searches through your portfolio of cryptocurrencies and identifies the legal and organizational framework that provides the lowest possible level of tax. Simply put, we help you use legal means to reduce your tax liabilities."
    }
]

const TaxComputationInfoSection = () => {
    return (
        <div className='w-full lg:container grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-[72px]'>
            {info.map(({ description, img, title }, idx) => (
                <InfoCard key={idx} description={description} img={img} title={title} />
            ))}
        </div>
    )
}

export default TaxComputationInfoSection