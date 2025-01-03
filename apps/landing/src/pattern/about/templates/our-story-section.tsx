import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import Image from 'next/image'
import OurStoryImg from "@/public/images/our-story-img.png"

const OurStorySection = () => {
    return (
        <div className='w-full md:container min-h-[572px] h-fit flex items-start justify-between gap-[87px] mt-[88px]'>
            <div className='min-w-[576px] w-full flex items-center justify-between gap-8'>
                {/* left */}
                <div className='w-full max-w-[576px] space-y-[18px]'>
                    <div className='w-full text-center space-y-[4px]'>
                        <HeaderLabel className='text-left'>Our Story</HeaderLabel>
                        <Typography className='w-fit text-left text-[2.25rem] leading-[42.66px] after:w-[469px] after:left-0'>Envisioned by a group of Accounting professionals</Typography>
                    </div>
                    <p className='w-[545px] text-foreground text-base leading-[22px] font-dmsans'>Chainkeeping is a Crypto Accounting and Taxation platform envisioned by a group of Accounting Professionals, to provide crypto users, practicing Accountants and Tax authority with a seamless solution to the financial reporting of Cryptocurrency transactions as well as ease Tax computation and filing. Every process is automated, companies and individuals have a direct link to reach Practicing accountants to handle the crypto account and taxes and the Tax Authorities of different jurisdictions are provided with a platform to administer crypto tax as well as inspect and verify tax payments.</p>
                </div>

                {/* Right */}
                <Image src={OurStoryImg} alt="Our Story Image" width={576} height={352} className="w-[576px] h-[352px]" />
            </div>
        </div>
    )
}

export default OurStorySection