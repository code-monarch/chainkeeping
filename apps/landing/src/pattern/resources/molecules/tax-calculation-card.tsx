import React, { FC, useEffect, useState } from 'react'
import { Card, CardContent, cn } from '@chainkeeping/ui'

interface IProps {
    title: string;
    salesProceed: string;
    taxableIcome: string;
    taxLiability: string;
    costBasis: string;
    type: "FIFO" | "LIFO" | "Specific Identification Method" | "Average Cost Method"
}

const TaxCalculationCard: FC<IProps> = ({ salesProceed, taxLiability, taxableIcome, title, costBasis, type }) => {
    const [basis, setBasis] = useState("First Acquired")
    const [color, setColor] = useState<string>("bg-[#B1CCEF]")

    useEffect(() => {
        switch (type) {
            case 'FIFO':
                setBasis("First Acquired")
                setColor("bg-[#B1CCEF]")
                break
            case 'LIFO':
                setBasis("Last Acquired")
                setColor("bg-[#E1F5E9]")
                break
            case 'Specific Identification Method':
                setBasis("Last Acquired")
                setColor("bg-[#F2D3D3]")
                break
            case 'Average Cost Method':
                setBasis("Average cost")
                setColor("bg-[#F3EBD6]")
                break
            default:
                setBasis("First Acquired")
                setColor("bg-[#B1CCEF]")
        }
    }, [type])
    
    return (
        <Card className="w-full max-w-[460px]">
            <CardContent className="space-y-[16px] p-0">
                <h2 className="text-base font-semibold font-rubik whitespace-nowrap pb-3 mb-4 border-b">{title}</h2>
                <div className="bg-[hsla(204,33%,97%,1)] space-y-[16px] py-3 px-2 rounded-[8px]">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-dmsans">Sales Proceed</span>
                        <span className="text-sm font-dmsans">${salesProceed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-dmsans">Cost Basis ({basis})</span>
                        <span className="text-sm font-dmsans">(${costBasis})</span>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                    <span className="font-bold font-dmsans">Taxable Income (TI)</span>
                    <span className="font-bold font-dmsans">${taxableIcome}</span>
                </div>
                <div className={cn(color, "h-10 flex justify-between items-center p-2 rounded-[8px]")}>
                    <span className="text-sm font-rubik font-medium">Tax Liability @ 20% of TI</span>
                    <span className="text-sm font-rubik font-medium">${taxLiability}</span>
                </div>
            </CardContent>
        </Card >
    )
}

export default TaxCalculationCard