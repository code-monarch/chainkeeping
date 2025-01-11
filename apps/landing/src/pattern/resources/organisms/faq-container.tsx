import React, { FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@chainkeeping/ui'
import { IFaqs } from '@/lib/types'

interface IProps {
    faqs: IFaqs[]
    header: string
}

const FAQContainer: FC<IProps> = ({ faqs, header }) => {
    return (
        <div className='w-full h-[625px] flex items-center justify-center'>
            <div className='w-full h-full flex flex-col items-start gap-y-3'>
                <h3 className='w-full font-rubik font-semibold text-foreground text-[2rem] text-left pb-12 border-b'>{header}</h3>
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

export default FAQContainer