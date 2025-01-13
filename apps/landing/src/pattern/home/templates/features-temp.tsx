import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import FeaturesWidget from '../organisms/features-widget'

const FeaturesTemp = () => {
    return (
        <section id="features" className='bg-primary w-full h-fit md:h-[994px] flex items-start py-12 md:items-center justify-center'>
            <div className="w-full flex flex-col gap-y-[72px] px-[18px] md:container">
                <div className='w-full flex flex-col items-center justify-center gap-y-3'>
                    <div className='w-full max-w-[1064px] self-center text-center space-y-[4px]'>
                        <HeaderLabel className='text-center text-white'>Features</HeaderLabel>
                        <Typography className='w-full md:w-fit text-center text-white text-2xl md:text-[2.25rem] leading-[28.44px] md:leading-[42.66px] after:w-full md:after:w-[601px] after:left-1/2 after:-translate-x-1/2'>We&apos;ve created these core solutions to take care of all your crypto tax and accounting needs.</Typography>
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