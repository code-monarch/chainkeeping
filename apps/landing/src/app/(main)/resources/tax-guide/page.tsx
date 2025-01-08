"use client";

import React from 'react'
import JoinUsWidget from '@/pattern/home/templates/join-us-widget';
import TaxGuideHeroSection from '@/pattern/resources/templates/tax-guide-hero-section';
import TaxGuideTemp from '@/pattern/resources/templates/tax-guide-temp';

const TaxGuidePage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-[88px] mb-[144px]'>
      <TaxGuideHeroSection />
      <TaxGuideTemp />
      <JoinUsWidget />
    </div>
  )
}

export default TaxGuidePage