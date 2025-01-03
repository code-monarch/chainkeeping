import React from 'react'
import OurMissionIcon from '../atoms/our-mission-icon'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'

const OurMissionStatementWidget = () => {
  return (
      <div className='w-full max-w-[560px] flex flex-col items-start gap-y-4'>
        <OurMissionIcon />
          <div className='w-full space-y-[18px]'>
              <div className='w-full text-left space-y-[4px]'>
                  <HeaderLabel className='text-left text-white'>Our Mission</HeaderLabel>
                  <Typography className='w-fit text-left text-[2rem] text-white font-rubik leading-[37.97px]'>Harmonize global crypto tax laws</Typography>
              </div>
              <p className='w-full text-white text-2xl leading-[31.25px] font-dmsans'>“ To integrate all global regions’ crypto tax laws to allow global crypto users, practitioners and tax authorities to have seamless crypto financial reporting, tax computation, filing and verification process.”</p>
          </div>
    </div>
  )
}

export default OurMissionStatementWidget