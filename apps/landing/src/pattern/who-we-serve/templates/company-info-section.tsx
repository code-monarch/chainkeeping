import React from 'react'
import InfoCard, { IInfoCardProps } from '../organisms/info-card'
import GaapIfrsImg from "@/public/images/gaap-ifrs-img.png"
import AutomatedTaxPlanningImg from "@/public/images/automated-tax-planning-img.png"
import CryptoInvoicingPayrollImg from "@/public/images/crypto-invoicing-payroll-img.png"
import RealTimeDataSynchronizationImg from "@/public/images/real-time-data-synchronization-img.png"
import RegulatoryComplianceImg from "@/public/images/regulatory-compliance-img.png"

const info: IInfoCardProps[] = [
    {
        img: GaapIfrsImg,
        title: "GAAP and IFRS Compliant",
        description: "Generate Crypto financial reports compliant with financial reporting guidelines. Chainkeeping ensures that your financial records meet the standards set by regulatory bodies and auditors for Crypto Reporting."
    },
    {
        img: AutomatedTaxPlanningImg,
        title: "Automated Tax planning and Filing",
        description: "By adding new clients who are distinct from your current clientele, you can grow your practice. With the automated tool from Chainkeeping, you can save time and generate more income"
    },
    {
        img: CryptoInvoicingPayrollImg,
        title: "Crypto Invoicing, Payments and Payroll",
        description: "Create and process cryptocurrency invoices, payments, and payroll all-in-one with Chainkeeping. This enables fast and borderless transactions, reducing reliance on traditional payment methods and associated fees."
    },
    {
        img: RealTimeDataSynchronizationImg,
        title: "Real-Time Data Synchronization",
        description: "Seamlessly integrate your cryptocurrency transactions from popular exchanges and wallets, enabling automatic synchronization and data import. Also integrate with your ERPs to automatically post your crypto transactions. This saves time and reduces the risk of manual entry errors, ensuring the accuracy and completeness of your financial records."
    },
    {
        img: RegulatoryComplianceImg,
        title: "Regulatory Compliance",
        description: "Stay compliant with tax regulations and financial reporting requirements in your jurisdiction. Chainkeeping continuously updates its software to align with changing regulations, ensuring that your financial records are in accordance with the latest standards."
    }
]

const CompanyInfoSection = () => {
    return (
        <div className='w-full md:container grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-[72px]'>
            {info.map(({ description, img, title }, idx) => (
                <InfoCard key={idx} description={description} img={img} title={title} />
            ))}
        </div>
    )
}

export default CompanyInfoSection