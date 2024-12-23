import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Button, Typography } from '@chainkeeping/ui'
import HowItWorksWidget from '../organisms/how-it-works-widget'
import HowItWorksImage from '../organisms/how-it-works-image'

const HowItWorksTemp = () => {
  return (
    <div className='w-full md:container h-[572px] flex items-end justify-between gap-[87px]x'>
      {/* Left */}
      <div className='w-full max-w-[515px] min-h-full flex flex-col justify-between gap-8'>
        <div className='space-y-[18px]'>
          <div className='w-full text-center space-y-[4px]'>
            <HeaderLabel className='text-left'>How it works</HeaderLabel>
            <Typography className='w-fit text-left text-[2.25rem] leading-[42.66px]'>Get started in 3 simple steps</Typography>
          </div>
          <p className='text-foreground text-base leading-[22.4px] font-dmsans'>Calculate and generate report for your crypto taxes in a few simple steps within a matter of minutes.</p>
        </div>
        <HowItWorksWidget />

        <Button size="md">Get started access</Button>
      </div>

      {/* Right */}
      <HowItWorksImage />
    </div>
  )
}

export default HowItWorksTemp