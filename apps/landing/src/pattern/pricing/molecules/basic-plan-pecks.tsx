import React from 'react'
import { Check } from 'lucide-react'

const perks = [
    "7 days free trial"
]

const BasicPlanPerks = () => {
    return (
        <div className='min-w-[200px] max-w-full flex flex-col items-start gap-y-[7px]'>
            <h3 className='text-foreground text-sm font-dmsans font-bold'>Basic</h3>
            <ul className="space-y-[7px]">
                {perks?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-gray-700 font-dmsans" >
                        <div>
                            <Check className="h-5 w-5 text-secondary mt-0.5" />
                        </div>
                        <span className="text-sm">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default BasicPlanPerks