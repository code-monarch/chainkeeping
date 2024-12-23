"use client";

import React from 'react'
import JoinUsWidget from '@/pattern/home/templates/join-us-widget';
import Faqs from '@/pattern/solutions/templates/faqs';
import TaxComputationHeroSection from '@/pattern/solutions/templates/tax-computation-hero-section';
import TaxComputationInfoSection from '@/pattern/solutions/templates/tax-computation-info-section';

const TaxComputationPage = () => {
  return (
    <div className='w-full flex flex-col gap-y-[88px] pb-[144px]'>
      <TaxComputationHeroSection />
      <TaxComputationInfoSection />
      <Faqs />
      <JoinUsWidget />
    </div>
  )
}

export default TaxComputationPage