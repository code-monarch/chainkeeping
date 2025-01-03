import React from 'react'
import OurMissionStatementWidget from '../organisms/our-mission-statement-widget'
import OurVisionStatementWidget from '../organisms/our-vision-statement-widget'

const CompanyStatementsSection = () => {
  return (
    <div className='w-full h-[497px] bg-black bg-pattern-bg-img bg-cover bg-center mt-[144px]'>
      <div className='h-full md:container flex items-center justify-between gap-16'>
        <OurMissionStatementWidget />
        <OurVisionStatementWidget />
      </div>
    </div>
  )
}

export default CompanyStatementsSection