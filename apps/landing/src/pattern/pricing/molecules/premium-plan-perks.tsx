import React from 'react'
import { Check } from 'lucide-react'

const perks = [
    "One **30** minutes consultations with tax experts annually",
    "Historical Tax forms - **2 Years**",
]

const PremiumPlanPerks = () => {
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
        <div className='min-w-[301px] max-w-full flex flex-col items-start gap-y-[7px]'>
            <h3 className='text-foreground text-sm font-dmsans font-bold'>Premium</h3>
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

export default PremiumPlanPerks

