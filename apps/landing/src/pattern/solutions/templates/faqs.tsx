import React from 'react'
import { FAQuestions } from '@/lib/data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@chainkeeping/ui'

const Faqs = () => {
  return (
    <div className='w-full h-[625px] flex items-center justify-center'>
          <div className='w-full h-full md:container flex flex-col items-center gap-y-12'>
              <h3 className='font-rubik font-semibold text-foreground text-[2rem]'>Frequently Asked Questions</h3>
              <div className='w-full'>
                  <Accordion type='single' collapsible className='w-full'>
                      {FAQuestions.map(({ question, answer }, idx) => (
                          <AccordionItem key={idx} value={`${idx}`} className='space-y-[12px]'>
                              <AccordionTrigger className='text-primary text-lg font-dmsans font-medium hover:no-underline'>{question}</AccordionTrigger>
                              <AccordionContent className='text-base text-primary max-w-[1100px]'>{answer}</AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
              </div>
        </div>
    </div>
  )
}

export default Faqs