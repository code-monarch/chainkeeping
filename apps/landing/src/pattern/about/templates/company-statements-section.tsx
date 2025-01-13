import React from 'react'
import OurMissionStatementWidget from '../organisms/our-mission-statement-widget'
import OurVisionStatementWidget from '../organisms/our-vision-statement-widget'

const CompanyStatementsSection = () => {
  return (
    <div className='w-full h-fit lg:h-[497px] bg-black bg-pattern-bg-img bg-cover bg-center py-[91px] lg:py-[91px] lg:mt-[144px]'>
      <div className='h-full flex flex-col lg:flex-row items-center justify-between gap-16 px-[18px] lg:container'>
        <OurMissionStatementWidget />
        <OurVisionStatementWidget />
      </div>
    </div>
  )
}

export default CompanyStatementsSection