"use client";

import React from 'react'
import TaxGuideHeroSection from '@/pattern/resources/templates/tax-guide-hero-section';
import TaxGuideTemp from '@/pattern/resources/templates/tax-guide-temp';

const TaxGuidePage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-12 lg:gap-y-[88px] lg:mb-[144px]'>
      <TaxGuideHeroSection />
      <TaxGuideTemp />
    </div>
  )
}

export default TaxGuidePage