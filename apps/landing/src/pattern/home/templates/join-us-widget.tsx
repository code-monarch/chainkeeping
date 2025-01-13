import React from 'react'
import { Button, Typography } from '@chainkeeping/ui'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import CheckIcon from '../atoms/check-icon'
import { APP_ROUTES } from '@/lib/routes'
import { useRouter } from 'next/navigation'

export const list = ["Crypto Tax computation, filing, compliance", "Crypto & Fiat Invoicing, Payroll and Payments", "Crypto Portfolio management"]

const JoinUsWidget = () => {
    const { push } = useRouter()
    return (
        <div className='w-full min-h-[646px] h-fit md:h-[472px] flex items-center justify-center px-[18px] md:px-8'>
            <div className='bg-[hsla(0,67%,98%,1)] w-full md:container h-full flex items-center justify-center py-16 px-[18px] rounded-[16px] md:rounded-[32px]'>
                <div className='w-full flex flex-col items-center gap-y-8'>
                    <div className='lg:w-[798px] text-center space-y-[4px]'>
                        <HeaderLabel>Join us</HeaderLabel>
                        <Typography className='text-center text-2xl md:text-[2.25rem] leading-[28.44px] md:leading-[42.66px] after:bottom-[8px]'>Seamless Crypto accounting and tax computations to make your compliance easy</Typography>
                    </div>
                    <p className='font-dmsans text-foreground'>Chainkeeping makes it easy for your to calculate your taxes in few steps</p>

                    <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-4'>
                        {list.map((item, idx) => (
                            <div key={idx} className='w-fit flex items-start gap-3'>
                                <div>
                                    <CheckIcon />
                                </div>
                                <p className='font-rubik'>{item}</p>
                            </div>
                        ))}
                    </div>

                    <Button variant="secondary" size="lg" onClick={() => push(APP_ROUTES.signup)} >Get started for free</Button>
                </div>
            </div>
        </div>
    )
}

export default JoinUsWidget