import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import OurVisionIcon from '../atoms/our-vision-icon'

const OurVisionStatementWidget = () => {
    return (
        <div className='w-full max-w-[560px] flex flex-col items-start gap-y-4'>
            <OurVisionIcon />
            <div className='w-full space-y-[18px]'>
                <div className='w-full text-left space-y-[4px]'>
                    <HeaderLabel className='text-left text-white'>Our Vision</HeaderLabel>
                    <Typography className='w-fit text-left text-[2rem] text-white font-rubik leading-[37.97px]'>We aim global adoption</Typography>
                </div>
                <p className='w-full text-white text-2xl leading-[31.25px] font-dmsans'>“ To be the most trusted and adopted global cryptocurrency accounting and tax platform by both crypto users, practitioners and tax authorities.”</p>
            </div>
        </div>
    )
}

export default OurVisionStatementWidget