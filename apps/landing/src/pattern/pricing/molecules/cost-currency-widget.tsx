import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@chainkeeping/ui'

const currency = [
    {
        label: "United states dollar - USD",
        value: "USD"
    },
    {
        label: "Nigerian Naira - NGN",
        value: "NGN"
    },
]

const CostCurrencyWidget = () => {
    return (
        <div className='min-w-[363px] w-fit h-[44px] flex items-center gap-4'>
            <label htmlFor="currency" className='text-foreground text-base font-dmsans whitespace-nowrap'>Show cost in:</label>
            <Select name='currency' defaultValue={currency[0].value}>
                <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Select a currency" />
                </SelectTrigger>
                <SelectContent>
                    {currency?.map(({ label, value }, idx) => (
                        <SelectItem key={idx} value={value}>{label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default CostCurrencyWidget