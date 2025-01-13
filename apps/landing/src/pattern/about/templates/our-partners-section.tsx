import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import Image from 'next/image'
import ConvexityLogo from "@/public/logo/convexity-logo.png"
import EFCCLogo from "@/public/logo/EFCC-logo.png"
import NemozConsultLogo from "@/public/logo/nemoz-consult-logo.png"
import FIRSLogo from "@/public/logo/FIRS-logo.png"

const OurPartnersSection = () => {
    return (
        <div className='w-full flex flex-col items-center gap-y-12 lg:pt-[144px] px-[18px] lg:container'>
            <div className='w-full space-y-[56px]'>
                <div className='w-full text-left lg:text-center space-y-[4px]'>
                    <HeaderLabel className='text-left lg:text-center'>Our Partners</HeaderLabel>
                    <Typography className='w-[280px] lg:w-fit text-left lg:text-center text-2xl lg:text-[2.25rem] leading-[28.44px] lg:leading-[42.66px] after:w-[280px] lg:after:w-[768px] after:left-0'>Backed by industry giants and government</Typography>
                </div>
                <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-12 mx-auto'>
                    <Image src={ConvexityLogo} alt="Convexity logo" width={262} height={72} className="w-[262px] h-[72px]" />
                    <Image src={FIRSLogo} alt="FIRS logo" width={101} height={72} className="w-[101px] h-[72px]" />
                    <Image src={NemozConsultLogo} alt="Nemoz consult logo" width={192} height={72} className="w-[192px] h-[72px]" />
                    <Image src={EFCCLogo} alt="EFCC logo" width={72} height={72} className="w-[72px] h-[72px]" />
                </div>
            </div>
        </div>
    )
}

export default OurPartnersSection