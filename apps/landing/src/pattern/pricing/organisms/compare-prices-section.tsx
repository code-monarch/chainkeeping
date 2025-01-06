import React from 'react'
import BasicPlanPerks from '../molecules/basic-plan-pecks'
import PremiumPlanPerks from '../molecules/premium-plan-perks'
import CustomizedPlanPerks from '../molecules/customized-plan-pecks'
import AllInclusivePerks from '../molecules/all-inclusive-perks'
import { Button } from '@chainkeeping/ui'
import { APP_ROUTES } from '@/lib/routes'
import { useRouter } from 'next/navigation'

const ComparePricesSection = () => {
    const { push } = useRouter()
    return (
        <div className='w-full min-h-[464px] h-fit space-y-[16px]'>
            <div className='w-full h-[52px] pb-[24px] flex items-start justify-start border-b'>
                <h3 className='text-foreground text-2xl font-rubik font-bold'>Compare plans</h3>
            </div>
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                <BasicPlanPerks />
                <PremiumPlanPerks />
                <CustomizedPlanPerks />
                <AllInclusivePerks />
            </div>
            <div className='w-full h-fit pb-4 border-b flex items-start justify-start'>
                <span className='text-secondary text-xs font-dmsans'>*</span> <p className='text-foreground text-xs'>Discount T&C apply</p>
            </div>

            <div className="max-w-md space-y-[32px] pt-[72px]">
                <div className="space-y-[16px]">
                    <h2 className="text-xl font-semibold">
                        Not sure about the right plan to pick?
                    </h2>
                    <p className="text-foreground text-base">
                        If you&apos;re having trouble selecting the right plan for your account, our team of experts can assist you.
                    </p>
                </div>
                <Button variant="default" onClick={() => push(APP_ROUTES.contact)}>
                    Contact us
                </Button>
            </div>
        </div>
    )
}

export default ComparePricesSection