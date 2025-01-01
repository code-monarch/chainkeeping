import React from 'react'
import InfoCard, { IInfoCardProps } from '../organisms/info-card'
import ConnectEntireCryptoAssetsImg from "@/public/images/connect-entire-crypto-assets-img.png"
import VerifyTaxComputationsImg from "@/public/images/verify-tax-computations-img.png"

const info: IInfoCardProps[] = [
    {
        img: ConnectEntireCryptoAssetsImg,
        title: "Connect to the entire crypto asset ecosystem",
        description: "Chainkeeping enables seamless connectivity between Tax Authority and the crypto asset ecosystem. It allows users to integrate their accounts from various exchanges, wallets, and platforms, consolidating data and providing a comprehensive overview of their crypto assets. This connectivity ensures accurate and up-to-date information for tax calculations and reporting, streamlining the tax compliance process."
    },
    {
        img: VerifyTaxComputationsImg,
        title: "Validate, Verify tax computations",
        description: "Chainkeeping provides robust tools to validate and verify tax computations related to cryptocurrency transactions. Through advanced algorithms and data analysis, the platform ensures accurate collection of Crypto Tax payers basic information, tax calculations, automated tax administration, minimizing errors and discrepancies in crypto tax reporting. Tax Authorities can rely on Chainkeeping to audit and Investigate crypto tax payers’ tax computations and filings, providing confidence and peace of mind in their tax administration efforts."
    },
    {
        img: ConnectEntireCryptoAssetsImg,
        title: "Dedicated team of subject matter experts",
        description: "Chainkeeping has a dedicated team of subject matter experts who specialize in cryptocurrency financial reporting and taxation. These experts stay updated with the latest tax regulations and best practices in the crypto industry. They provide users with guidance and support, answering queries, addressing concerns, and offering expert advice to ensure accurate tax reporting and compliance."
    },
    {
        img: VerifyTaxComputationsImg,
        title: "Innovation and compliance, together",
        description: "Chainkeeping combines innovation and compliance in its platform. It embraces technological advancements and innovative features to streamline the crypto tax administration process. At the same time, it ensures compliance with tax regulations and regulatory requirements, helping taxpayers meet their obligations. Chainkeeping allows Tax Authorities to leverage the benefits of innovative solutions while administering and managing their jurisdiction taxes and tax payers."
    }
]

const TaxAuthorityInfoSection = () => {
    return (
        <div className='w-full h-fit md:container grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-[72px]'>
            {info.map(({ description, img, title }, idx) => (
                <InfoCard key={idx} description={description} img={img} title={title} />
            ))}
        </div>
    )
}

export default TaxAuthorityInfoSection