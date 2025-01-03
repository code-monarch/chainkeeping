import React from 'react'
import HeaderLabel from '@/pattern/common/atoms/header-label'
import { Typography } from '@chainkeeping/ui'
import CultureCard from '../organisms/culture-card'
import ClientNeedsCultureIcon from '../atoms/client-needs-culture-icon'
import CommunicationCultureIcon from '../atoms/communication-culture-icon'
import RegulatoryComplianceCultureIcon from '../atoms/regulatory-compliance-culture-icon'
import HelpCultureIcon from '../atoms/help-culture-icon'

const OurCulture = () => {
    return (
        <div className='w-full md:container flex flex-col items-start gap-y-12'>
            <div className='w-full max-w-[580px] space-y-[18px]'>
                <div className='w-full text-center space-y-[4px]'>
                    <HeaderLabel className='text-left'>Our Culture</HeaderLabel>
                    <Typography className='w-fit text-left text-[2.25rem] leading-[42.66px] after:w-[580px] after:left-0'>What sets us apart from others?</Typography>
                </div>
                <p className='w-[580px] text-foreground text-base leading-[22px] font-dmsans'>We know how overwhelming and tasking crypto taxes and financial reporting can be, so we built Chainkeeping to simplify and solve this process for you. This is why we are the most preferred crypto tax and accounting solution..</p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                <CultureCard icon={<ClientNeedsCultureIcon />} header='Client needs and understanding' description='We ensure your satisfaction by properly identifying your needs and understanding them. We then provide solutions to your needs.' className='bg-[hsla(211,66%,93%,1)]' />

                <CultureCard icon={<CommunicationCultureIcon />} header='Communication and Transparency' description='We ensure transparency in our systems and keep good communications going to Increase collaboration, enhance trust, and increase innovation.' className='bg-[hsla(211,66%,93%,1)]' />
            </div>
            <div className="w-full grid grid-cols-4 gap-4 mx-auto">
                <CultureCard icon={<RegulatoryComplianceCultureIcon />} header='Regulatory Compliance' description='Chainkeeping ensures compliance with relevant laws and regulations in its business line and product offerings' className='bg-[hsla(46,59%,93%,1)]' />

                <CultureCard icon={<RegulatoryComplianceCultureIcon />} header='The right solutions for your Crypto tax and Accounting needs' description='Our suite of products — Tax computation, portfolio management, payroll, invoicing, financial reporting etc. ensures your crypto tax and accounting problems are being catered for, hassle free. Worry about maximizing profits and let us take charge in providing you the best solutions to your crypto taxation and accounting.' className='bg-[hsla(249,24%,92%,1)] col-span-2' />

                <CultureCard icon={<HelpCultureIcon />} header='24/7 Help and support' description='We are here for you. Tell us what you need, and we will provide you with the appropriate assistance and support.' className='bg-[hsla(329,70%,95%,1)]' />
            </div>
        </div>
    )
}

export default OurCulture