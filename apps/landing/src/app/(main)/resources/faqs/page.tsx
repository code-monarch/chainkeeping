"use client";

import React from 'react'
import FAQsHeroSection from '@/pattern/resources/templates/FAQs-hero-section'
import FAQsTemp from '@/pattern/resources/templates/FAQs-temp';

const FaqsPage = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-[88px] mb-[144px]'>
      <FAQsHeroSection />
      <FAQsTemp />
    </div>
  )
}

export default FaqsPage