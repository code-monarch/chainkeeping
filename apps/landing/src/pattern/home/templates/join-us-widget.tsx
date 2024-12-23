import React from 'react'
import { Button, Typography } from '@chainkeeping/ui'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import CheckIcon from '../atoms/check-icon'

export const list = ["Crypto Tax computation, filing, compliance", "Crypto & Fiat Invoicing, Payroll and Payments", "Crypto Portfolio management"]

const JoinUsWidget = () => {
    return (
        <div className='bg-[hsla(0,67%,98%,1)] w-full md:container h-[472px] flex items-center justify-center rounded-[32px]'>
            <div className='w-full flex flex-col items-center gap-y-8'>
                <div className='lg:w-[798px] text-center space-y-[4px]'>
                    <HeaderLabel>Join us</HeaderLabel>
                    <Typography className='text-center text-[2.25rem] after:bottom-[12px]'>Seamless Crypto accounting and tax computations to make your compliance easy</Typography>
                </div>
                <p className='font-dmsans text-foreground'>Chainkeeping makes it easy for your to calculate your taxes in few steps</p>

                <div className='w-full flex items-center justify-center gap-4'>
                    {list.map((item, idx) => (
                        <div key={idx} className='w-fit flex items-center gap-3'><CheckIcon /> <p className='font-rubik'>{item}</p>
                        </div>
                    ))}
                </div>

                <Button variant="secondary" size="lg" >Get started for free</Button>
            </div>
        </div>
    )
}

export default JoinUsWidget