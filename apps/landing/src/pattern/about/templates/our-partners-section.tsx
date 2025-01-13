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
        <div className='w-full lg:container flex flex-col items-center gap-y-12 pt-[144px]'>
            <div className='w-full space-y-[56px]'>
                <div className='w-full text-center space-y-[4px]'>
                    <HeaderLabel className='text-center'>Our Partners</HeaderLabel>
                    <Typography className='w-fit text-center text-[2.25rem] leading-[42.66px]'>Backed by industry giants and government</Typography>
                </div>
                <div className='w-full flex items-center justify-center gap-12 mx-auto'>
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