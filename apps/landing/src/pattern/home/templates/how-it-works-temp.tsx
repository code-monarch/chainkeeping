import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Button, Typography } from '@chainkeeping/ui'
import HowItWorksWidget from '../organisms/how-it-works-widget'
import HowItWorksImage from '../organisms/how-it-works-image'
import { useRouter } from 'next/navigation'
import { APP_ROUTES } from '@/lib/routes'

const HowItWorksTemp = () => {
  const { push } = useRouter()

  return (
    <div className='w-full h-fit md:h-[572px] flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-6 md:gap-[87px] px-[18px] md:container'>
      {/* Left */}
      <div className='w-full max-w-[515px] min-h-full flex flex-col justify-between gap-8'>
        <div className='space-y-[48px] md:space-y-[18px]'>
          <div className='w-full text-center space-y-[4px]'>
            <HeaderLabel className='text-left'>How it works</HeaderLabel>
            <Typography className='text-left md:text-center text-2xl md:text-[2.25rem] leading-[28.44px] md:leading-[42.66px] after:w-[71px] after:left-0 md:after:w-[515px]'>Get started in 3 simple steps</Typography>
          </div>
          <p className='text-foreground text-base leading-[22.4px] font-dmsans'>Calculate and generate report for your crypto taxes in a few simple steps within a matter of minutes.</p>
        </div>
        <HowItWorksWidget />

        <Button size="md" onClick={() => push(APP_ROUTES.signup)}>Get started</Button>
      </div>

      {/* Right */}
      <HowItWorksImage />
    </div>
  )
}

export default HowItWorksTemp