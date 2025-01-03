import React from 'react'
import { Check } from 'lucide-react'

const perks = [
    "Basic Portfolio Tracking",
    "Email Support",
    "CSV Uploads",
    "Unlimited Synchronization of Exchanges, Wallets, Defi, NFT & Staking Platforms",
    "Manual Transaction Entry",
    "Tax Calculation Type Selection",
    "Social Media channels consultation support",
]

const AllInclusivePerks = () => {
    const formatPerkText = (text: string) => {
        // Split the text by ** markers
        const parts = text.split('**')

        return parts.map((part, index) => {
            // Even indices are regular text, odd indices should be bold
            if (index % 2 === 1) {
                return <strong key={index} className="font-bold">{part}</strong>
            }
            return part
        })
    }

    return (
        <div className='bg-accent min-w-[301px] max-w-full flex flex-col items-start gap-y-[7px] py-5 px-6 rounded-[8px]'>
            <h3 className='w-full h-[30px] flex items-start justify-start text-foreground text-base font-rubik font-bold'>Inclusive in all plans</h3>
            <ul className="space-y-[7px]">
                {perks?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-gray-700 font-dmsans" >
                        <div>
                            <Check className="h-5 w-5 text-secondary mt-0.5" />
                        </div>
                        <span className="text-sm">
                            {formatPerkText(item)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllInclusivePerks

