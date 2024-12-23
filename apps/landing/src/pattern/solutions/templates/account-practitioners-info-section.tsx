import React from 'react'
import InfoCard, { IInfoCardProps } from '../organisms/info-card'
import GaapIfrsImg from "@/public/images/gaap-ifrs-img.png"
import CreateNewRevenueStreamImg from "@/public/images/create-new-revenue-stream-img.png"
import AssistingCurrentImg from "@/public/images/assisting-current-img.png"
import CompliantWithTaxRegulation from "@/public/images/compliant-with-tax-regulation.png"

const info: IInfoCardProps[] = [
    {
        img: GaapIfrsImg,
        title: "GAAP and IFRS Compliant",
        description: "With the different classifications of cryptocurrencies in different jurisdictions, Chainkeeping ensures that Cryptocurrencies are recorded in the Financial Statements in line with the IFRS Standards. For example, Nigeria classifies Digital Assets as securities.The USA classifies cryptocurrencies as Capital Assets, etc."
    },
    {
        img: CreateNewRevenueStreamImg,
        title: "Create new revenue stream",
        description: "By adding new clients who are distinct from your current clientele, you can grow your practice. With the automated tool from Chainkeeping, you can save time and generate more income"
    },
    {
        img: AssistingCurrentImg,
        title: "Assisting current clients with crypto taxes and reports",
        description: "You need the resources to assist your clients in filing their cryptocurrency taxes and capturing their cryptocurrency transactions in their Financial Reports because they must. Utilize our client dashboard to simplify the process of sorting through a large number of cryptocurrency transactions."
    },
    {
        img: CompliantWithTaxRegulation,
        title: "Compliant with tax regulations of  different jurisdiction",
        description: "Seamlessly integrate your cryptocurrency transactions from popular exchanges and wallets, enabling automatic synchronization and data import. Also integrate with your ERPs to automatically post your crypto transactions. This saves time and reduces the risk of manual entry errors, ensuring the accuracy and completeness of your financial records."
    }
]

const AccountPractitionersInfoSection = () => {
  return (
      <div className='w-full md:container grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-[72px]'>
          {info.map(({ description, img, title }, idx) => (
              <InfoCard key={idx} description={description} img={img} title={title} />
          ))}
      </div>
  )
}

export default AccountPractitionersInfoSection