import React, { FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@chainkeeping/ui'
import { IFaqs } from '@/lib/types'

interface IProps {
    faqs: IFaqs[]
}

const Faqs: FC<IProps> = ({ faqs }) => {
  return (
    <div className='w-full h-[625px] flex items-center justify-center'>
          <div className='w-full h-full lg:container flex flex-col items-center gap-y-12'>
              <h3 className='font-rubik font-semibold text-foreground text-[2rem]'>Frequently Asked Questions</h3>
              <div className='w-full'>
                  <Accordion type='single' collapsible className='w-full'>
                      {faqs?.map(({ question, answer }, idx) => (
                          <AccordionItem key={idx} value={`${idx}`} className='space-y-[12px]'>
                              <AccordionTrigger className='text-foreground text-lg font-dmsans font-medium hover:no-underline'>{question}</AccordionTrigger>
                              <AccordionContent className='text-base text-accent-foreground max-w-[1100px]'>{answer}</AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
              </div>
        </div>
    </div>
  )
}

export default Faqs