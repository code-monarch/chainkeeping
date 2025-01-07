import React from 'react'
import { Check } from 'lucide-react'
import { formatTextWithBoldMarkers } from '@/lib/utils/format-text'

const perks = [
    "One-time **60** minutes consultations with tax experts annually",
    "Historical Tax forms - **Unlimited**",
    "Live chat support",
    "Unlimited Transactions",
    "Crypto and Non-Crypto Tax Reporting",
    "Tax optimization and Tax-loss Harvesting",
]

const CustomizedPlanPerks = () => {
    return (
        <div className='min-w-[301px] max-w-full flex flex-col items-start gap-y-[7px]'>
            <h3 className='text-foreground text-sm font-dmsans font-bold'>Customized</h3>
            <ul className="space-y-[7px]">
                {perks?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-gray-700 font-dmsans" >
                        <div>
                            <Check className="h-5 w-5 text-secondary mt-0.5" />
                        </div>
                        <span className="text-sm">
                            {formatTextWithBoldMarkers(item)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomizedPlanPerks

