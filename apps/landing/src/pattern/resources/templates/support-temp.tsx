import React from 'react'
import SupportCard, { ISupportCardProps } from '../organisms/support-card'
import { APP_ROUTES, RESOURCES_ROUTES } from '@/lib/routes'
import FAQsCardIcon from '../atoms/FAQs-card-icon'
import HelpCenterCardIcon from '../atoms/help-center-card-icon'
import LiveChatIcon from '../atoms/live-chat-card-icon'
import { Button } from '@chainkeeping/ui'
import { useRouter } from 'next/navigation'

const SupportTypes: ISupportCardProps[] = [
  {
    Icon: <FAQsCardIcon />,
    title: "Frequently Asked Questions",
    description: "All your questions answered and more, check out our knowledge base",
    buttonText: "See FAQs",
    href: RESOURCES_ROUTES.FAQs
  },
  {
    Icon: <LiveChatIcon />,
    title: "Live chat",
    description: "All your questions answered and more, check out our knowledge base",
    buttonText: "Talk to us",
    href: RESOURCES_ROUTES.FAQs
  },
  {
    Icon: <HelpCenterCardIcon />,
    title: "Help center",
    description: "Read guides and useful tutorials on our help center",
    buttonText: "Visit help center",
    href: RESOURCES_ROUTES.FAQs
  },
]

const SupportTemp = () => {
  const { push } = useRouter();

  return (
    <div className='w-full flex flex-col items-center gap-y-[88px] px-[18px] lg:container'>
      <div className='w-full max-w-[1200px] h-fit lg:h-[304px] flex items-center justify-center gap-6 flex-wrap'>
        {SupportTypes?.map(({ Icon, buttonText, description, href, title }, idx) => (
          <SupportCard key={idx} Icon={Icon} buttonText={buttonText} description={description} href={href} title={title} />
        ))}
      </div>
      <div className='w-full max-w-[800px] h-fit lg:h-[175px] flex flex-col lg:flex-row items-center'>
        {/* Glossary */}
        <div className='w-full lg:w-[336px] h-fit lg:h-[150px] flex flex-col items-center gap-y-4 p-4 rounded-[8px]'>
          <h4 className='font-rubik font-medium text-2xl text-foreground'>Glossary</h4>
          <p className='w-full max-w-[304px] font-dmsans font-normal text-center text-sm text-[hsla(215,23%,40%,1)]'>Get informed, A-Z of crypto, crypto taxation and more.</p>
          <Button variant="link" className='text-base font-normal font-dmsans' onClick={() => push(APP_ROUTES.contact)} >Learn</Button>
        </div>

        <hr className='h-full w-[1px] bg-border mx-16' />

        {/* Email Support */}
        <div className='w-[336px] h-[150px] flex flex-col items-center gap-y-4 p-4 rounded-[8px]'>
          <h4 className='font-rubik font-medium text-2xl text-foreground'>Email Support</h4>
          <p className='w-full max-w-[304px] font-dmsans font-normal text-center text-sm text-[hsla(215,23%,40%,1)]'>Still can't find the answer you're looking for? send us an email.</p>
          <Button variant="link" className='text-base font-normal font-dmsans' onClick={() => push(APP_ROUTES.contact)} >Contact us</Button>
        </div>
      </div>
    </div>
  )
}

export default SupportTemp