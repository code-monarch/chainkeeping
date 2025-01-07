import React, { FC } from 'react'
import { Card } from '@chainkeeping/ui'
import { IFaqs } from '@/lib/types'

const GeneralFAQsCard: FC<IFaqs> = ({ answer, question }) => {
  return (
      <Card className='w-full max-w-[444px] min-h-[226px] h-fit flex flex-col items-start gap-y-3 space-y-0 p-0 border-none shadow-none'>
          <h3 className='text-2xl font-dmsans font-medium'>{question}</h3>
          <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>{answer}</p>
      </Card>
  )
}

export default GeneralFAQsCard