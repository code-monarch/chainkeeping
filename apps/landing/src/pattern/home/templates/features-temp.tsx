import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import FeaturesWidget from '../organisms/features-widget'

const FeaturesTemp = () => {
    return (
        <section className='bg-primary w-full h-[994px] flex items-center justify-center'>
            <div className="md:container w-full flex flex-col gap-y-[72px]">
                <div className='w-full flex flex-col items-center justify-center gap-y-3'>
                    <div className='w-full max-w-[1064px] self-center text-center space-y-[4px]'>
                        <HeaderLabel className='text-center text-white'>Features</HeaderLabel>
                        <Typography className='w-fit text-center text-white text-[2.25rem] leading-[42.66px] after:w-[601px] after:left-1/2 after:-translate-x-1/2'>We&apos;ve created these core solutions to take care of all your crypto tax and accounting needs.</Typography>
                    </div>
                    <p className='max-w-[561px] font-dmsans text-base text-white text-center'>Expert crypto tax assistance, the trusted solution for crypto investors, stay ahead of the game with our innovative solution</p>
                </div>

                {/*  */}
                <FeaturesWidget />
            </div>
        </section>
    )
}

export default FeaturesTemp